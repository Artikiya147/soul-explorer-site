export type MediaSlotType = "image" | "video";

export type MediaSlotDef = {
  id: string;
  label: string;
  page: string;
  type: MediaSlotType;
  hint: string;
};

export const MEDIA_SLOTS: MediaSlotDef[] = [
  {
    id: "la-postina-hero",
    label: "Hero background",
    page: "La Postina",
    type: "image",
    hint: "Full-bleed background behind the dark hero header.",
  },
  {
    id: "la-postina-image",
    label: "Screenshot",
    page: "La Postina",
    type: "image",
    hint: "Product screenshot placeholder, below the hero.",
  },
  {
    id: "la-postina-video",
    label: "Explainer video",
    page: "La Postina",
    type: "video",
    hint: "Short walkthrough video, below the hero.",
  },
  {
    id: "oracle-widget-hero",
    label: "Hero background",
    page: "Oracle Widget",
    type: "image",
    hint: "Full-bleed background behind the dark hero header.",
  },
  {
    id: "oracle-widget-image",
    label: "Screenshot",
    page: "Oracle Widget",
    type: "image",
    hint: "Widget screenshot placeholder, below the hero.",
  },
  {
    id: "oracle-widget-video",
    label: "Explainer video",
    page: "Oracle Widget",
    type: "video",
    hint: "Short walkthrough video, below the hero.",
  },
  {
    id: "booking-tool-hero",
    label: "Hero background",
    page: "Booking Tool",
    type: "image",
    hint: "Full-bleed background behind the dark hero header.",
  },
  {
    id: "booking-tool-image",
    label: "Screenshot",
    page: "Booking Tool",
    type: "image",
    hint: "Calendar screenshot placeholder, below the hero.",
  },
  {
    id: "booking-tool-video",
    label: "Explainer video",
    page: "Booking Tool",
    type: "video",
    hint: "Short walkthrough video, below the hero.",
  },
  {
    id: "proposal-builder-hero",
    label: "Hero background",
    page: "Proposal Builder",
    type: "image",
    hint: "Full-bleed background behind the dark hero header.",
  },
  {
    id: "proposal-builder-image",
    label: "Sample proposal",
    page: "Proposal Builder",
    type: "image",
    hint: "Sample proposal image placeholder, below the hero.",
  },
  {
    id: "proposal-builder-video",
    label: "Explainer video",
    page: "Proposal Builder",
    type: "video",
    hint: "Short walkthrough video, below the hero.",
  },
  {
    id: "doc-cover-logo-qhht",
    label: "QHHT — letterhead logo",
    page: "Document Builder",
    type: "image",
    hint: "Shown top-left on every QHHT document. Falls back to the Soul Explorer wordmark.",
  },
  {
    id: "doc-cover-logo-qmv",
    label: "QMV — letterhead logo",
    page: "Document Builder",
    type: "image",
    hint: "Shown top-left on every QMV document. Falls back to the Soul Explorer wordmark.",
  },
  {
    id: "doc-cover-logo-bqh",
    label: "BQH — letterhead logo",
    page: "Document Builder",
    type: "image",
    hint: "Shown top-left on every BQH document. Falls back to the Soul Explorer wordmark.",
  },
  {
    id: "doc-cover-logo-studio",
    label: "Studio — letterhead logo",
    page: "Document Builder",
    type: "image",
    hint: "Shown top-left on every Studio document. Falls back to the AF Webstylist wordmark.",
  },
];

export function getSlot(id: string): MediaSlotDef | undefined {
  return MEDIA_SLOTS.find((s) => s.id === id);
}
