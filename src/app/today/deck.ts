export type CotdCard = { name: string; kw: string; msg: string };

export const COTD_DECK: CotdCard[] = [
  {
    name: "The First Light",
    kw: "beginnings",
    msg: "Something new is asking to begin in you today. You don't need the whole staircase, only the first step, taken in trust.",
  },
  {
    name: "Stardust Memory",
    kw: "past lives",
    msg: "A feeling today may be older than this life. Don't rush to explain it. Let it remind you how far your soul has already travelled.",
  },
  {
    name: "The Cosmic Womb",
    kw: "creation",
    msg: "You are being remade in the quiet, where no one can see it yet. The dark is not against you today, it is the place you are forming.",
  },
  {
    name: "Nebula Veil",
    kw: "mystery",
    msg: "Not everything will make sense today, and it isn't meant to. Trust what you cannot yet see; the veil is thin for a reason.",
  },
  {
    name: "The Returning Soul",
    kw: "reincarnation",
    msg: "A circle is completing today. What returns to you has come the long way round, meet it like the old friend it is.",
  },
  {
    name: "Celestial Mother",
    kw: "nurture",
    msg: "You are held today by something that has never once left you. Let yourself be cared for, even if only by your own gentle hand.",
  },
  {
    name: "The Black Moon",
    kw: "release",
    msg: "There is something you are ready to set down today. What you release now will not follow you home.",
  },
  {
    name: "Constellation of Self",
    kw: "wholeness",
    msg: "The scattered parts of you make one picture, seen from far enough away. Today, step back and let yourself be whole.",
  },
  {
    name: "The Wandering Comet",
    kw: "change",
    msg: "Movement is your medicine today. Don't resist the pull, let yourself be carried somewhere truer than where you stand.",
  },
  {
    name: "Astral Tide",
    kw: "intuition",
    msg: "Feel your way today rather than thinking it. The knowing you're looking for lives in your body, not your head.",
  },
  {
    name: "The Silver Thread",
    kw: "guidance",
    msg: "You are being led today, gently. Follow the small pull, the quiet yes, it knows the way better than your worry does.",
  },
  {
    name: "Supernova Heart",
    kw: "transformation",
    msg: "What feels like it's ending in you today is also igniting. You are not breaking. You are becoming light.",
  },
];

export function cotdIndexForDate(d: Date) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  const day = Math.floor(diff / 86400000);
  return day % COTD_DECK.length;
}
