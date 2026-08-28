"use client";

import { useActionState } from "react";
import "@/styles/admin.css";
import { updatePassword } from "./actions";

export default function ResetPasswordPage() {
  const [error, action, pending] = useActionState(updatePassword, null);

  return (
    <div className="gate-wrap">
      <form className="gate-box" action={action}>
        <div className="rail-brand" style={{ marginBottom: 6 }}>
          soul <em>explorer</em>
        </div>
        <p className="gate-label">Set a new password</p>
        <input
          type="password"
          name="password"
          placeholder="New password"
          minLength={8}
          required
          autoFocus
        />
        <input
          type="password"
          name="confirm"
          placeholder="Confirm new password"
          minLength={8}
          required
        />
        {error && <p className="gate-error">{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Saving…" : "Save password"}
        </button>
      </form>
    </div>
  );
}
