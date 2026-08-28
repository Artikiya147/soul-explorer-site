type Row = { name: string; elsewhere: string };

const DEFAULT_ROWS: Row[] = [
  { name: "Booking & scheduling", elsewhere: "Calendly / Acuity" },
  { name: "Email marketing", elsewhere: "Mailchimp / Flodesk" },
  { name: "Client proposals & contracts", elsewhere: "PandaDoc / HoneyBook" },
  { name: "A reading or quiz tool", elsewhere: "Typeform + a third app" },
];

export function SubscriptionCompare({ rows = DEFAULT_ROWS }: { rows?: Row[] }) {
  return (
    <div className="pi-vs">
      <div className="pi-vs-col">
        <h4>Piecing it together yourself</h4>
        {rows.map((r) => (
          <div className="pi-vs-row" key={r.name}>
            <span className="nm">{r.name}</span>
            <span className="price">{r.elsewhere}, another bill</span>
          </div>
        ))}
      </div>
      <div className="pi-vs-col included">
        <h4>Inside a Soul Explorer Studio build</h4>
        {rows.map((r) => (
          <div className="pi-vs-row" key={r.name}>
            <span className="nm">{r.name}</span>
            <span className="price">Included</span>
          </div>
        ))}
      </div>
    </div>
  );
}
