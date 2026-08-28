import type { Client } from "./clients";

export type EmailTemplate = {
  id: string;
  label: string;
  subject: string;
  body: string;
};

export const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: "reply",
    label: "First reply",
    subject: "Your {practiceShort} session — first steps",
    body: `Hello {client},

thank you for writing. Briefly, here is how it works: the session lasts 4–6 hours in total and includes an opening conversation, the deep relaxation part, and a closing where we review together what emerged.

Before we set a date I will send you three things: the waiver with informed consent, the intake questionnaire and the preparation guide.

If you like, we can have a 20-minute call to get to know each other. Let me know two or three times when you are free.

Warmly,
Alessandra`,
  },
  {
    id: "booked",
    label: "Booking confirmation",
    subject: "Confirmed: {date}",
    body: `Hello {client},

everything is confirmed for {date}. I ask you to:

• return the signed waiver
• complete the intake questionnaire at least 5 days before
• write your questions by hand and bring them with you

Attached is the preparation guide: read it calmly a few days before.

See you soon,
Alessandra`,
  },
  {
    id: "reminder",
    label: "Preparation reminder",
    subject: "A few days to go — small reminders",
    body: `Hello {client},

almost there. In the coming days: sleep as much as you can, drink water, avoid alcohol in the 24 hours before, eat lightly on the day.

Make no other commitments: no rush and no clock.

If the session is online, let us do a 5-minute tech check the day before: tell me when to find you.

Alessandra`,
  },
  {
    id: "recording",
    label: "Recording delivery",
    subject: "The recording of your session",
    body: `Hello {client},

here is the recording of the session on {date}: ______

One suggestion: do not listen straight away. Let a few days pass, then listen in a quiet moment, with pen and paper beside you.

The transcript and analysis will arrive within 7–10 days.

Alessandra`,
  },
  {
    id: "analysis",
    label: "Analysis delivery",
    subject: "Your analysis is ready",
    body: `Hello {client},

attached you will find the transcript and the analysis of the session. I have gathered the themes that emerged, the answers to your questions and some integration suggestions.

Read it without hurry. If something does not sit right or you want to talk it through, write to me: we will speak in two weeks anyway.

Alessandra`,
  },
  {
    id: "followup",
    label: "Follow-up",
    subject: "How are you, two weeks on?",
    body: `Hello {client},

two weeks have passed. How are you? Has anything shifted in your sleep, your body, your relationships, the way you look at a situation?

Even tiny changes count: tell me what you notice.

Alessandra`,
  },
  {
    id: "decline",
    label: "Not the right time",
    subject: "About your request",
    body: `Hello {client},

thank you for your trust and for what you shared. Having read it carefully, I believe this is not the right moment for a session: what you are going through deserves different support than mine.

I suggest speaking first with your doctor or a mental health professional. The door stays open: if and when things change, write to me.

With respect,
Alessandra`,
  },
];

function formatDate(iso?: string) {
  if (!iso) return "____________";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function fillEmail(str: string, client: Client): string {
  return str
    .replace(/{client}/g, client.name.split(" ")[0] || client.name)
    .replace(/{practitioner}/g, "Alessandra Fadda")
    .replace(/{practiceShort}/g, client.sessionType)
    .replace(/{date}/g, formatDate(client.sessionDate));
}
