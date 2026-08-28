export type SxUser = {
  name: string;
  email: string;
};

const AUTH_KEY = "sx_user";
export const AUTH_CHANGE_EVENT = "sx-auth-change";

export function authGet(): SxUser | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function authSet(user: SxUser) {
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  } catch {}
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(AUTH_CHANGE_EVENT));
  }
}

export function authClear() {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch {}
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(AUTH_CHANGE_EVENT));
  }
}
