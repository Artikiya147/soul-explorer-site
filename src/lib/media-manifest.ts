import { promises as fs } from "fs";
import path from "path";
import { getSlot } from "./media-slots";

export type ImageEntry = { kind: "image"; filename: string; uploadedAt: string };
export type VideoEntry = { kind: "video"; videoId: string; uploadedAt: string };
export type ManifestEntry = ImageEntry | VideoEntry;

export type Manifest = Record<string, ManifestEntry>;

const DATA_DIR = path.join(process.cwd(), "data");
const MANIFEST_PATH = path.join(DATA_DIR, "media-manifest.json");
export const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
export const UPLOAD_URL_PREFIX = "/uploads";

export async function readManifest(): Promise<Manifest> {
  try {
    const raw = await fs.readFile(MANIFEST_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeManifest(manifest: Manifest) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

const ALLOWED_IMAGE = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_IMAGE_BYTES = 15 * 1024 * 1024;

export async function saveSlotImage(slotId: string, file: File): Promise<ImageEntry> {
  const slot = getSlot(slotId);
  if (!slot || slot.type !== "image") throw new Error("Unknown image slot");

  if (!ALLOWED_IMAGE.has(file.type)) {
    throw new Error("Only JPEG, PNG, WebP or GIF images are allowed.");
  }
  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error(`File is too large (max ${Math.round(MAX_IMAGE_BYTES / (1024 * 1024))}MB).`);
  }

  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  const ext = file.type.split("/")[1];
  const filename = `${slotId}.${ext}`;

  const manifest = await readManifest();
  const existing = manifest[slotId];
  if (existing && existing.kind === "image" && existing.filename !== filename) {
    await fs.rm(path.join(UPLOAD_DIR, existing.filename), { force: true });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(UPLOAD_DIR, filename), buffer);

  const entry: ImageEntry = { kind: "image", filename, uploadedAt: new Date().toISOString() };
  manifest[slotId] = entry;
  await writeManifest(manifest);
  return entry;
}

export function extractYouTubeId(rawUrl: string): string | null {
  let u: URL;
  try {
    u = new URL(rawUrl.trim());
  } catch {
    return null;
  }
  const host = u.hostname.replace(/^www\.|^m\./, "");
  let id: string | null = null;
  if (host === "youtu.be") {
    id = u.pathname.slice(1).split("/")[0] || null;
  } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (u.pathname === "/watch") {
      id = u.searchParams.get("v");
    } else {
      const m = u.pathname.match(/^\/(embed|shorts)\/([^/]+)/);
      if (m) id = m[2];
    }
  }
  if (id && /^[\w-]{6,15}$/.test(id)) return id;
  return null;
}

export async function saveSlotVideoUrl(slotId: string, youtubeUrl: string): Promise<VideoEntry> {
  const slot = getSlot(slotId);
  if (!slot || slot.type !== "video") throw new Error("Unknown video slot");

  const videoId = extractYouTubeId(youtubeUrl);
  if (!videoId) {
    throw new Error("That doesn't look like a valid YouTube link.");
  }

  const manifest = await readManifest();
  const entry: VideoEntry = { kind: "video", videoId, uploadedAt: new Date().toISOString() };
  manifest[slotId] = entry;
  await writeManifest(manifest);
  return entry;
}

export async function clearSlot(slotId: string): Promise<void> {
  const manifest = await readManifest();
  const existing = manifest[slotId];
  if (existing) {
    if (existing.kind === "image") {
      await fs.rm(path.join(UPLOAD_DIR, existing.filename), { force: true });
    }
    delete manifest[slotId];
    await writeManifest(manifest);
  }
}

export function imageUrl(entry: ImageEntry): string {
  return `${UPLOAD_URL_PREFIX}/${entry.filename}?v=${encodeURIComponent(entry.uploadedAt)}`;
}

export function youtubeEmbedUrl(entry: VideoEntry): string {
  return `https://www.youtube-nocookie.com/embed/${entry.videoId}`;
}

export function youtubeThumbUrl(entry: VideoEntry): string {
  return `https://img.youtube.com/vi/${entry.videoId}/mqdefault.jpg`;
}

export function youtubeWatchUrl(entry: VideoEntry): string {
  return `https://www.youtube.com/watch?v=${entry.videoId}`;
}
