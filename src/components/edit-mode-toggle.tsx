"use client";

import { useEffect, useState } from "react";
import { getEditMode, setEditMode, EDIT_MODE_EVENT } from "@/lib/edit-mode";

export function EditModeToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("edit") === "1") setEditMode(true);
    setOn(getEditMode());
    const refresh = () => setOn(getEditMode());
    window.addEventListener(EDIT_MODE_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(EDIT_MODE_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return (
    <button
      className={`edit-mode-toggle${on ? " on" : ""}`}
      onClick={() => setEditMode(!on)}
    >
      <span className="dot" />
      {on ? "Editing on" : "Edit page"}
    </button>
  );
}
