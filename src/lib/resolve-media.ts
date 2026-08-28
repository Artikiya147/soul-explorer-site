import { readManifest, imageUrl, youtubeEmbedUrl } from "./media-manifest";

export async function resolvePageMedia(prefix: string) {
  const manifest = await readManifest();
  const hero = manifest[`${prefix}-hero`];
  const image = manifest[`${prefix}-image`];
  const video = manifest[`${prefix}-video`];
  return {
    heroUrl: hero && hero.kind === "image" ? imageUrl(hero) : undefined,
    imageUrl: image && image.kind === "image" ? imageUrl(image) : undefined,
    videoEmbedUrl: video && video.kind === "video" ? youtubeEmbedUrl(video) : undefined,
  };
}
