"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getEditMode, EDIT_MODE_EVENT } from "@/lib/edit-mode";

const IcImage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcPlay = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5v7l6-3.5-6-3.5Z" strokeLinejoin="round" fill="currentColor" stroke="none" />
  </svg>
);

function useEditMode() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(getEditMode());
    const refresh = () => setOn(getEditMode());
    window.addEventListener(EDIT_MODE_EVENT, refresh);
    return () => window.removeEventListener(EDIT_MODE_EVENT, refresh);
  }, []);
  return on;
}

async function uploadImage(slotId: string, file: File) {
  const fd = new FormData();
  fd.append("slot", slotId);
  fd.append("file", file);
  const res = await fetch("/api/media", { method: "POST", body: fd });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Upload failed");
}

async function saveVideoUrl(slotId: string, url: string) {
  const fd = new FormData();
  fd.append("slot", slotId);
  fd.append("youtubeUrl", url);
  const res = await fetch("/api/media", { method: "POST", body: fd });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Couldn't save that link");
}

async function removeSlot(slotId: string) {
  await fetch(`/api/media?slot=${encodeURIComponent(slotId)}`, { method: "DELETE" });
}

export function MediaSlots({
  imageSlotId,
  videoSlotId,
  imageLabel,
  videoLabel,
  imageUrl,
  videoEmbedUrl,
}: {
  imageSlotId: string;
  videoSlotId: string;
  imageLabel: string;
  videoLabel: string;
  imageUrl?: string;
  videoEmbedUrl?: string;
}) {
  const editing = useEditMode();
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<Record<string, string>>({});
  const [videoInput, setVideoInput] = useState("");

  async function handleImage(file: File) {
    setBusy(true);
    setErr((e) => ({ ...e, image: "" }));
    try {
      await uploadImage(imageSlotId, file);
      router.refresh();
    } catch (e) {
      setErr((v) => ({ ...v, image: e instanceof Error ? e.message : "Upload failed" }));
    }
    setBusy(false);
  }

  async function handleVideoSave() {
    if (!videoInput.trim()) return;
    setBusy(true);
    setErr((e) => ({ ...e, video: "" }));
    try {
      await saveVideoUrl(videoSlotId, videoInput);
      setVideoInput("");
      router.refresh();
    } catch (e) {
      setErr((v) => ({ ...v, video: e instanceof Error ? e.message : "Couldn't save that link" }));
    }
    setBusy(false);
  }

  async function handleRemove(slotId: string) {
    setBusy(true);
    await removeSlot(slotId);
    router.refresh();
    setBusy(false);
  }

  return (
    <div className="pi-media">
      {imageUrl ? (
        <div className="pi-slot pi-slot-filled">
          <img
            src={imageUrl}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14 }}
          />
          {editing && (
            <button className="pi-replace-btn" disabled={busy} onClick={() => handleRemove(imageSlotId)}>
              Remove
            </button>
          )}
        </div>
      ) : editing ? (
        <label className="pi-slot pi-edit-empty">
          <div className="ic">
            <IcImage />
          </div>
          <span>{busy ? "Uploading…" : "Click to upload an image"}</span>
          <span className="pi-edit-label">browse files</span>
          {err.image && <span className="pi-edit-err">{err.image}</span>}
          <input
            type="file"
            accept="image/*"
            disabled={busy}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImage(file);
              e.target.value = "";
            }}
          />
        </label>
      ) : (
        <div className="pi-slot">
          <div className="ic">
            <IcImage />
          </div>
          <span>{imageLabel}</span>
        </div>
      )}

      {videoEmbedUrl ? (
        <div className="pi-slot pi-slot-filled">
          <iframe
            src={videoEmbedUrl}
            title="Explainer video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: 0, borderRadius: 14 }}
          />
          {editing && (
            <button className="pi-replace-btn" disabled={busy} onClick={() => handleRemove(videoSlotId)}>
              Remove
            </button>
          )}
        </div>
      ) : editing ? (
        <div className="pi-slot pi-edit-empty" style={{ cursor: "default" }}>
          <div className="ic">
            <IcPlay />
          </div>
          <div className="pi-video-form">
            <input
              type="url"
              placeholder="Paste a YouTube link"
              value={videoInput}
              disabled={busy}
              onChange={(e) => setVideoInput(e.target.value)}
            />
            <button disabled={busy} onClick={handleVideoSave}>
              {busy ? "Saving…" : "Save"}
            </button>
          </div>
          {err.video && <span className="pi-edit-err">{err.video}</span>}
        </div>
      ) : (
        <div className="pi-slot">
          <div className="ic">
            <IcPlay />
          </div>
          <span>{videoLabel}</span>
        </div>
      )}
    </div>
  );
}
