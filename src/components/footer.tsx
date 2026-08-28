export function Footer() {
  return (
    <footer className="footer grain grain-dark">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            Soul Explorer<span className="dot">.</span>
          </div>
          <div className="footer-tag">your soul has been here before</div>
        </div>
        <div className="footer-col">
          <h4>Sessions</h4>
          <a href="/qhht">QHHT</a>
          <a href="/bqh">BQH · Online</a>
          <a href="/qmv">QMV</a>
          <a href="/soul-readings">Soul Readings</a>
          <a href="/soul-systems">Soul Systems</a>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <a href="/oracle">Free oracle reading</a>
          <a href="/meditations">Meditations</a>
          <a href="/community">Community</a>
          <a href="/blog">Journal</a>
        </div>
        <div className="footer-col">
          <h4>Begin</h4>
          <a href="/contact">Contact</a>
          <a href="/booking">Book a call</a>
          <a href="/shop">Shop</a>
          <a href="/studio">The Studio</a>
          <a href="mailto:hello@soul-explorer.com">hello@soul-explorer.com</a>
        </div>
      </div>
      <div className="footer-base">
        <span>Soul Explorer · Alex Fadda · soul-explorer.com</span>
        <span style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>
            Privacy Policy
          </a>
          <span>·</span>
          <a href="/cookie-policy" style={{ color: "inherit", textDecoration: "none" }}>
            Cookie Policy
          </a>
          <span>·</span>
          <a href="/disclaimer" style={{ color: "inherit", textDecoration: "none" }}>
            Disclaimer
          </a>
          <span>·</span>
          <a href="/admin" style={{ color: "inherit", textDecoration: "none", opacity: 0.6 }}>
            Admin
          </a>
        </span>
        <span>© 2026 · Made between two worlds</span>
      </div>
    </footer>
  );
}
