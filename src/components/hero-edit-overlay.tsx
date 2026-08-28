"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getEditMode, EDIT_MODE_EVENT } from "@/lib/edit-mode";

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

export function HeroEditOverlay({ slotId, hasImage }: { slotId: string; hasImage: boolean }) {
  const editing = useEditMode();
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  if (!editing) return null;

  async function handleFile(file: File) {
    setBusy(true);
    const fd = new FormData();
    fd.append("slot", slotId);
    fd.append("file", file);
    const res = await fetch("/api/media", { method: "POST", body: fd });
    setBusy(false);
    if (res.ok) router.refresh();
  }

  async function handleRemove() {
    setBusy(true);
    await fetch(`/api/media?slot=${encodeURIComponent(slotId)}`, { method: "DELETE" });
    router.refresh();
    setBusy(false);
  }

  return (
    <div className={`hero-edit-btn ${hasImage ? "filled" : "empty"}`} style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <label style={{ cursor: "pointer" }}>
        {busy ? "Uploading…" : hasImage ? "Replace background" : "+ Add background image"}
        <input
          type="file"
          accept="image/*"
          disabled={busy}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
            e.target.value = "";
          }}
        />
      </label>
      {hasImage && !busy && (
        <button
          type="button"
          onClick={handleRemove}
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            textDecoration: "underline",
            cursor: "pointer",
            font: "inherit",
            padding: 0,
          }}
        >
          Remove
        </button>
      )}
    </div>
  );
}
