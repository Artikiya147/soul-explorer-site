"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "sx_cookie_ack";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) {
        setShow(true);
      }
    } catch {}
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(CONSENT_KEY, "1");
    } catch {}
    setShow(false);
  }

  return (
    <div className={`cookie-banner${show ? " show" : ""}`} role="dialog" aria-live="polite">
      <p>
        This site keeps your cart and a few preferences in your browser&apos;s local storage —
        we don&apos;t use tracking or advertising cookies. Read the{" "}
        <a href="/cookie-policy">Cookie Policy</a> for the details.
      </p>
      <div className="cookie-banner-actions">
        <button className="cb-ok" onClick={dismiss}>
          Got it
        </button>
      </div>
    </div>
  );
}
