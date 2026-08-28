const KEY = "sx_edit_mode";
export const EDIT_MODE_EVENT = "sx-edit-mode-change";

export function getEditMode(): boolean {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function setEditMode(on: boolean) {
  try {
    if (on) localStorage.setItem(KEY, "1");
    else localStorage.removeItem(KEY);
  } catch {}
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(EDIT_MODE_EVENT));
  }
}
