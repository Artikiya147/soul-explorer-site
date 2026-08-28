import type { SessionType } from "./clients";

export type JourneyKind = "session" | "studio";

export type JourneyStep = { id: string; label: string };

export const SESSION_JOURNEY: JourneyStep[] = [
  { id: "contact", label: "First contact" },
  { id: "call", label: "Discovery call" },
  { id: "accept", label: "Client accepted" },
  { id: "welcome", label: "Welcome on board sent" },
  { id: "waiver", label: "Waiver & consent signed" },
  { id: "release", label: "Media release signed" },
  { id: "intake", label: "Intake questionnaire received" },
  { id: "prep", label: "Preparation guide sent" },
  { id: "booked", label: "Date booked & deposit" },
  { id: "session", label: "Session held" },
  { id: "recording", label: "Recording delivered" },
  { id: "transcript", label: "Transcript completed" },
  { id: "analysis", label: "Final analysis delivered" },
  { id: "followup", label: "Follow-up (2 weeks)" },
];

export const STUDIO_JOURNEY: JourneyStep[] = [
  { id: "brief", label: "Brief received" },
  { id: "call", label: "Alignment call" },
  { id: "proposal", label: "Proposal sent" },
  { id: "contract", label: "Contract signed" },
  { id: "deposit", label: "Deposit received" },
  { id: "design", label: "Design approved" },
  { id: "build", label: "Build" },
  { id: "review", label: "Client review" },
  { id: "launch", label: "Launch" },
  { id: "handover", label: "Handover & training" },
];

export function journeyKindFor(sessionType: SessionType): JourneyKind {
  return sessionType === "Studio" ? "studio" : "session";
}

export function journeyFor(sessionType: SessionType): JourneyStep[] {
  return journeyKindFor(sessionType) === "studio" ? STUDIO_JOURNEY : SESSION_JOURNEY;
}

export function stepLabel(sessionType: SessionType, stepId: string): string {
  return journeyFor(sessionType).find((s) => s.id === stepId)?.label || stepId;
}
