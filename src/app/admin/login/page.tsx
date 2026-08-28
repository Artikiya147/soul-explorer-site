"use client";

import { useActionState } from "react";
import "@/styles/admin.css";
import { signIn } from "./actions";

export default function AdminLoginPage() {
  const [error, action, pending] = useActionState(signIn, null);

  return (
    <div className="gate-wrap">
      <form className="gate-box" action={action}>
        <div className="rail-brand" style={{ marginBottom: 6 }}>
          soul <em>explorer</em>
        </div>
        <p className="gate-label">Restricted area</p>
        <input type="email" name="email" placeholder="Email" required autoFocus />
        <input type="password" name="password" placeholder="Password" required />
        {error && <p className="gate-error">{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Signing in…" : "Enter"}
        </button>
        <p className="gate-note">
          Forgot your password?{" "}
          <a href="/admin/forgot-password">Reset it</a>.
        </p>
      </form>
    </div>
  );
}
