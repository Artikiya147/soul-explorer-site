export function OrbitDiagram() {
  return (
    <div className="ss-orbit">
      <svg viewBox="0 0 400 400" role="img" aria-label="An orbital diagram showing past life, present self, and chosen timeline">
        <ellipse cx="200" cy="200" rx="170" ry="60" fill="none" stroke="#5CE1E6" strokeWidth="1" opacity=".35" />
        <ellipse cx="200" cy="200" rx="120" ry="42" fill="none" stroke="#5CE1E6" strokeWidth="1" opacity=".5" />
        <ellipse cx="200" cy="200" rx="70" ry="24" fill="none" stroke="#5CE1E6" strokeWidth="1" opacity=".65" />
        <line x1="200" y1="60" x2="200" y2="340" stroke="#5CE1E6" strokeWidth="1" strokeDasharray="3 5" opacity=".4" />
        <circle cx="200" cy="200" r="7" fill="#5CE1E6" opacity=".9" />
        <circle cx="200" cy="200" r="16" fill="none" stroke="#5CE1E6" strokeWidth="1" opacity=".5" />
        <circle cx="30" cy="140" r="3" fill="#9B8EC4" />
        <circle cx="330" cy="260" r="3" fill="#5CE1E6" />
      </svg>
      <div className="ss-orbit-tag ss-orbit-tag--top">
        <span className="q">past life</span>
        <span className="s">what shaped this one</span>
      </div>
      <div className="ss-orbit-label">you, now</div>
      <div className="ss-orbit-tag ss-orbit-tag--bottom">
        <span className="q">chosen timeline</span>
        <span className="s">what you activate next</span>
      </div>
    </div>
  );
}
