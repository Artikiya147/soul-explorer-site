"use client";

import { useState } from "react";
import { clientSetStep, type Client } from "@/lib/clients";
import { SESSION_JOURNEY, STUDIO_JOURNEY, type JourneyKind } from "@/lib/journey";

export function PipelineView({
  clients,
  kind,
  onSelect,
}: {
  clients: Client[];
  kind: JourneyKind;
  onSelect: (id: string) => void;
}) {
  const [dragId, setDragId] = useState<string | null>(null);
  const [overCol, setOverCol] = useState<string | null>(null);

  const steps = kind === "studio" ? STUDIO_JOURNEY : SESSION_JOURNEY;

  function drop(stepId: string) {
    if (dragId) clientSetStep(dragId, stepId);
    setDragId(null);
    setOverCol(null);
  }

  return (
    <div className="pipe-board">
      {steps.map((step) => {
        const cards = clients.filter((c) => c.stepId === step.id);
        return (
          <div
            key={step.id}
            className={`pipe-col${overCol === step.id ? " over" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setOverCol(step.id);
            }}
            onDragLeave={() => setOverCol((c) => (c === step.id ? null : c))}
            onDrop={(e) => {
              e.preventDefault();
              drop(step.id);
            }}
          >
            <div className="pipe-col-head">
              <span>{step.label}</span>
              <span className="pipe-col-count">{cards.length}</span>
            </div>
            <div className="pipe-col-body">
              {cards.map((c) => (
                <div
                  key={c.id}
                  className={`pipe-card${dragId === c.id ? " dragging" : ""}`}
                  draggable
                  onDragStart={(e) => {
                    setDragId(c.id);
                    e.dataTransfer.effectAllowed = "move";
                  }}
                  onDragEnd={() => {
                    setDragId(null);
                    setOverCol(null);
                  }}
                  onClick={() => onSelect(c.id)}
                >
                  <h4>{c.name}</h4>
                  <p>{c.sessionType}</p>
                </div>
              ))}
              {cards.length === 0 && <p className="pipe-col-empty">Drop here</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
