type PhaseProps = {
  reversed?: boolean;
  image: string;
  cap: string;
  rotate: number;
  num: string;
  title: string;
  tag: string;
  quote: string;
  bare?: boolean;
  children: React.ReactNode;
};

export function Phase({
  reversed,
  image,
  cap,
  rotate,
  num,
  title,
  tag,
  quote,
  bare,
  children,
}: PhaseProps) {
  return (
    <div className={`phase${reversed ? " phase--rev" : ""}`}>
      <div className="phase-media">
        {bare ? (
          <img
            className="phase-bare-img"
            src={image}
            alt={cap}
            style={{ transform: `rotate(${rotate}deg)` }}
          />
        ) : (
          <div
            className="polaroid phase-card"
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <span className="tape"></span>
            <div className="ph">
              <img src={image} alt={cap} />
            </div>
            <div className="cap">{cap}</div>
          </div>
        )}
      </div>
      <div>
        <span className="phase-num">{num}</span>
        <h3>{title}</h3>
        <span className="phase-tag">{tag}</span>
        {children}
        <p className="phase-quote">&ldquo;{quote}&rdquo;</p>
      </div>
    </div>
  );
}
