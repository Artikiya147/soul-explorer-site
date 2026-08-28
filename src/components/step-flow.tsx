import { Fragment, type ReactNode } from "react";

type Step = { icon: ReactNode; title: string; body: string };

export function StepFlow({ steps }: { steps: Step[] }) {
  return (
    <div className="pi-flow">
      {steps.map((s, i) => (
        <Fragment key={s.title}>
          <div className="pi-flow-step">
            <div className={`pi-flow-badge ${i % 2 === 0 ? "a" : "b"}`}>
              <div className="ic">{s.icon}</div>
              <span className="n">{i + 1}</span>
            </div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
          {i < steps.length - 1 && <div className="pi-flow-connector" />}
        </Fragment>
      ))}
    </div>
  );
}
