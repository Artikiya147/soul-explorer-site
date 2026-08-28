"use client";

import { useEffect, useState } from "react";
import { MEDIA_SLOTS } from "@/lib/media-slots";

type ImageEntry = { kind: "image"; filename: string; uploadedAt: string };
type VideoEntry = { kind: "video"; videoId: string; uploadedAt: string };
type ManifestEntry = ImageEntry | VideoEntry;
type Manifest = Record<string, ManifestEntry>;

function imageUrl(entry: ImageEntry) {
  return `/uploads/${entry.filename}?v=${encodeURIComponent(entry.uploadedAt)}`;
}
function youtubeThumb(entry: VideoEntry) {
  return `https://img.youtube.com/vi/${entry.videoId}/mqdefault.jpg`;
}
function youtubeWatch(entry: VideoEntry) {
  return `https://www.youtube.com/watch?v=${entry.videoId}`;
}

export function MediaAdmin() {
  const [manifest, setManifest] = useState<Manifest>({});
  const [busy, setBusy] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [videoInputs, setVideoInputs] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/media")
      .then((r) => r.json())
      .then((d) => setManifest(d.manifest || {}));
  }, []);

  async function uploadImage(slotId: string, file: File) {
    setBusy(slotId);
    setErrors((e) => ({ ...e, [slotId]: "" }));
    const fd = new FormData();
    fd.append("slot", slotId);
    fd.append("file", file);
    const res = await fetch("/api/media", { method: "POST", body: fd });
    const data = await res.json();
    setBusy(null);
    if (!res.ok) {
      setErrors((e) => ({ ...e, [slotId]: data.error || "Upload failed" }));
      return;
    }
    setManifest((m) => ({ ...m, [slotId]: data.entry }));
  }

  async function saveVideo(slotId: string) {
    const url = (videoInputs[slotId] || "").trim();
    if (!url) return;
    setBusy(slotId);
    setErrors((e) => ({ ...e, [slotId]: "" }));
    const fd = new FormData();
    fd.append("slot", slotId);
    fd.append("youtubeUrl", url);
    const res = await fetch("/api/media", { method: "POST", body: fd });
    const data = await res.json();
    setBusy(null);
    if (!res.ok) {
      setErrors((e) => ({ ...e, [slotId]: data.error || "Couldn't save that link" }));
      return;
    }
    setManifest((m) => ({ ...m, [slotId]: data.entry }));
    setVideoInputs((v) => ({ ...v, [slotId]: "" }));
  }

  async function remove(slotId: string) {
    setBusy(slotId);
    await fetch(`/api/media?slot=${encodeURIComponent(slotId)}`, { method: "DELETE" });
    setBusy(null);
    setManifest((m) => {
      const next = { ...m };
      delete next[slotId];
      return next;
    });
  }

  const pages = Array.from(new Set(MEDIA_SLOTS.map((s) => s.page)));

  return (
    <div className="admin-page">
      <div className="admin-head">
        <h1>Site media</h1>
        <p>
          Upload real images for the hero backgrounds and screenshot slots, and paste a YouTube
          link for each explainer video. This replaces the &ldquo;coming soon&rdquo; placeholder
          the moment you save something, sitewide, for every visitor.
        </p>
      </div>

      <div className="admin-note">
        Images: JPEG, PNG, WebP or GIF, up to 15MB. Videos: paste any YouTube link (a normal
        watch link, a youtu.be short link, or an unlisted video works fine), it plays through
        YouTube&apos;s privacy-enhanced player. This page isn&apos;t linked from navigation or
        indexed by search engines, but it also isn&apos;t password-protected yet, so don&apos;t
        share this link publicly before that&apos;s added.
      </div>

      {pages.map((page) => (
        <div className="admin-group" key={page}>
          <h2>{page}</h2>
          {MEDIA_SLOTS.filter((s) => s.page === page).map((slot) => {
            const entry = manifest[slot.id];
            const isBusy = busy === slot.id;
            const isVideo = slot.type === "video";

            return (
              <div className="admin-slot" key={slot.id}>
                <div className="admin-thumb">
                  {entry ? (
                    entry.kind === "image" ? (
                      <img src={imageUrl(entry)} alt="" />
                    ) : (
                      <img src={youtubeThumb(entry)} alt="" />
                    )
                  ) : (
                    <span>No {slot.type} yet</span>
                  )}
                </div>
                <div className="admin-slot-info">
                  <h3>{slot.label}</h3>
                  <p className="hint">{slot.hint}</p>
                  <span className={`status${entry ? " filled" : ""}`}>
                    {entry ? "Saved" : "Using placeholder"}
                  </span>
                  {entry && entry.kind === "video" && (
                    <p className="hint">
                      <a href={youtubeWatch(entry)} target="_blank" rel="noopener">
                        View on YouTube →
                      </a>
                    </p>
                  )}
                  {errors[slot.id] && <p className="err">{errors[slot.id]}</p>}
                </div>
                <div className="admin-actions">
                  {isVideo ? (
                    <>
                      <input
                        type="url"
                        placeholder="Paste a YouTube link"
                        value={videoInputs[slot.id] ?? ""}
                        disabled={isBusy}
                        onChange={(e) =>
                          setVideoInputs((v) => ({ ...v, [slot.id]: e.target.value }))
                        }
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: 13,
                          padding: "9px 12px",
                          borderRadius: 8,
                          border: "1px solid rgba(196,181,160,.7)",
                          minWidth: 200,
                        }}
                      />
                      <button disabled={isBusy} onClick={() => saveVideo(slot.id)}>
                        {isBusy ? "Saving…" : "Save"}
                      </button>
                    </>
                  ) : (
                    <label className={isBusy ? "busy" : ""}>
                      {isBusy ? "Uploading…" : entry ? "Replace" : "Upload"}
                      <input
                        type="file"
                        accept="image/*"
                        disabled={isBusy}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) uploadImage(slot.id, file);
                          e.target.value = "";
                        }}
                      />
                    </label>
                  )}
                  {entry && (
                    <button disabled={isBusy} onClick={() => remove(slot.id)}>
                      Remove
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
