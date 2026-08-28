"use client";

import { useActionState } from "react";
import "@/styles/admin.css";
import { requestReset } from "./actions";

export default function ForgotPasswordPage() {
  const [message, action, pending] = useActionState(requestReset, null);

  return (
    <div className="gate-wrap">
      <form className="gate-box" action={action}>
        <div className="rail-brand" style={{ marginBottom: 6 }}>
          soul <em>explorer</em>
        </div>
        <p className="gate-label">Reset password</p>
        <input type="email" name="email" placeholder="Email" required autoFocus />
        {message && <p className="gate-note">{message}</p>}
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Sending…" : "Send reset link"}
        </button>
        <p className="gate-note">
          <a href="/admin/login">Back to sign in</a>
        </p>
      </form>
    </div>
  );
}
