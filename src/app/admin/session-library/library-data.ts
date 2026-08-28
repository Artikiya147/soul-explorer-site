export type LibraryDoc = {
  title: string;
  file: string;
  category: string;
  blurb: string;
  href?: string;
};

export const CATEGORIES = [
  "In-session scripts",
  "If this comes up mid-session",
  "Client communication",
  "Practitioner prep",
  "QHHT specific",
] as const;

export const LIBRARY: LibraryDoc[] = [
  // In-session scripts — things to read/guide live, in roughly session order
  { title: "Setting Intentions", file: "BQH - Setting Intentions 23.pdf", category: "In-session scripts", blurb: "Opening the session: helping the client set a clear intention before induction." },
  { title: "Induction", file: "BQH - Induction 23.pdf", category: "In-session scripts", blurb: "Guiding the client into the hypnotic state." },
  { title: "Deepeners", file: "BQH - Deepeners 23.pdf", category: "In-session scripts", blurb: "Techniques to deepen trance once induction has begun." },
  { title: "Grounding", file: "BQH - Grounding 23.pdf", category: "In-session scripts", blurb: "Grounding techniques, for opening and for bringing a client back at the end." },
  { title: "Connection and Protections", file: "BQH - Connection and Protections 23.pdf", category: "In-session scripts", blurb: "Establishing energetic connection and protection before going deeper." },
  { title: "Optional Relaxation Techniques", file: "BQH - Optional Relaxation Techniques 23.pdf", category: "In-session scripts", blurb: "Alternate relaxation approaches if the standard induction isn't landing." },
  { title: "Imagination Exercises", file: "BQH - Imagination Exercises 23.pdf", category: "In-session scripts", blurb: "Warm-up exercises to test and build the client's visualization ability." },
  { title: "Heart Mind Coherence Script", file: "BQH - Heart Mind Coherence Script 23.pdf", category: "In-session scripts", blurb: "A coherence script for aligning heart and mind before deeper work." },
  { title: "Water Alchemy Script", file: "BQH - Water Alchemy Script 23.pdf", category: "In-session scripts", blurb: "A specific alchemical/water-themed guided script." },
  { title: "Bringing in the Light of Source", file: "BQH - Bringing in the Light of Source 23.pdf", category: "In-session scripts", blurb: "Guiding the client to connect with Source/higher light." },
  { title: "Rewinding Time", file: "BQH - Rewinding Time 23.pdf", category: "In-session scripts", blurb: "Technique for moving a client backward through time within a scene." },
  { title: "Changing Scenes", file: "BQH - Changing Scenes 23.pdf", category: "In-session scripts", blurb: "How to transition the client from one scene to the next." },
  { title: "Combined Scripts", file: "BQH - Combined Scripts 23.pdf", category: "In-session scripts", blurb: "Multiple scripts combined for reference in one place." },
  { title: "Ending the Session", file: "BQH - Ending the Session 23.pdf", category: "In-session scripts", blurb: "Bringing the client fully back and closing the session." },

  // If this comes up mid-session — reference for handling specific content
  { title: "Session Variables", file: "BQH - Session Variables 23.pdf", category: "If this comes up mid-session", blurb: "General variables that shape how a session unfolds." },
  { title: "Asking Session Questions", file: "BQH - Asking Session Questions 23.pdf", category: "If this comes up mid-session", blurb: "How to phrase questions to the client's Subconscious during the session." },
  { title: "Open and Closed Questions", file: "BQH - Open and Closed Questions 23.pdf", category: "If this comes up mid-session", blurb: "Difference between open/closed questions and when to use each." },
  { title: "Human Past Life", file: "BQH - Human Past Life 23.pdf", category: "If this comes up mid-session", blurb: "Guidance for when the client lands in a human past life." },
  { title: "Parallel Life, Future Life", file: "BQH - Parallel Life, Future Life 23.pdf", category: "If this comes up mid-session", blurb: "Guidance for parallel-life or future-life material." },
  { title: "Current Human Life", file: "BQH - Current Human Life 23.pdf", category: "If this comes up mid-session", blurb: "When the session surfaces material from the client's current life." },
  { title: "ET / ED Life", file: "BQH - ET ED Life 23.pdf", category: "If this comes up mid-session", blurb: "Guidance for extraterrestrial / extradimensional life material." },
  { title: "Animal, Plant, Cellular, Object", file: "BQH - Animal, Plant, Cellular, Object 23.pdf", category: "If this comes up mid-session", blurb: "When the client's awareness lands as a non-human form." },
  { title: "Energy or Non-physical", file: "BQH - Energy or Non-physical  23.pdf", category: "If this comes up mid-session", blurb: "When the client experiences themself as pure energy or non-physical." },
  { title: "Soul Source Origin", file: "BQH - Soul Source Origin  23.pdf", category: "If this comes up mid-session", blurb: "Exploring the client's soul origin / Source connection." },
  { title: "Attached Entities", file: "BQH - Attached Entities 23.pdf", category: "If this comes up mid-session", blurb: "How to recognize and handle attached entities if they arise." },
  { title: "Frequently Encountered Beings", file: "BQH - Frequently Encountered Beings 23.pdf", category: "If this comes up mid-session", blurb: "Common beings/guides clients report meeting, and how to work with them." },
  { title: "Trauma and Abuse Stories", file: "BQH - Trauma and Abuse Stories 23.pdf", category: "If this comes up mid-session", blurb: "Handling trauma or abuse material with care during a session." },
  { title: "All of the Above", file: "BQH - All of the Above 23.pdf", category: "If this comes up mid-session", blurb: "When several of the above categories overlap in one session." },
  { title: "Session Synchronicities", file: "BQH - Session Synchronicities 23.pdf", category: "If this comes up mid-session", blurb: "Noticing and working with synchronicities that arise during a session." },

  // Client communication
  { title: "Client Intake Form", file: "BQH - Client Intake Form 23.docx", category: "Client communication", blurb: "The real intake form: contact details, session history, liability release, and social-media/recording consent." },
  { title: "Client First Contact Checklist", file: "BQH - Client First Contact Checklist 23.pdf", category: "Client communication", blurb: "What to ask and cover on the very first call or message." },
  { title: "Client Debrief Checklist", file: "BQH - Client Debrief Checklist 23.pdf", category: "Client communication", blurb: "What to cover with the client right after a session ends." },
  { title: "Client Acceptance (screening guide)", file: "BQH - Client Acceptance 23.pdf", category: "Client communication", blurb: "Positive, negative and borderline indicators for deciding whether to accept a client." },
  { title: "Preparing for a Session — Client Message", file: "BQH - Preparing for a Session - Client Message 23.docx", category: "Client communication", blurb: "Full pre-session prep message to send clients before a booked session." },
  { title: "Sample Client Email Responses", file: "BQH - Sample Client Email Responses 23.pdf", category: "Client communication", blurb: "Ready-to-adapt replies for a vague inquiry, a trauma disclosure, and an unclear message." },
  { title: "Typical Client Questions", file: "BQH - Typical Client Questions 23.pdf", category: "Client communication", blurb: "The questions clients most often ask before booking." },
  { title: "Interview Questions", file: "BQH - Interview Questions 23.pdf", category: "Client communication", blurb: "Questions to ask a prospective client during a discovery call." },
  { title: "Client Session Preparation Resource List", file: "BQH - Client Session Preparation Resource List 23.pdf", category: "Client communication", blurb: "Resources to point clients to while they prepare for their session." },
  { title: "Video & Social Media Consent (new)", file: "", href: "/admin/session-library/social-media-consent", category: "Client communication", blurb: "A separate explicit consent for using a client's actual (non-anonymized) video or photo in marketing." },

  // Practitioner prep & business
  { title: "Practitioner Preparation Pre-Session", file: "BQH - Practitioner Preparation Pre-Session 23.pdf", category: "Practitioner prep", blurb: "How to prepare yourself before holding a session." },
  { title: "Business Basics", file: "BQH - Business Basics 23.pdf", category: "Practitioner prep", blurb: "Foundational business practices for running a BQH practice." },
  { title: "More Resources", file: "13.3 BQH - More Resources 23.pdf", category: "Practitioner prep", blurb: "Additional reference resources." },
  { title: "Raising Your Frequency", file: "2.3 BQH - Raising your Frequency 23.pdf", category: "Practitioner prep", blurb: "Practices for raising your own frequency as a practitioner." },
  { title: "Basic Terms", file: "BQH - Basic Terms 23.pdf", category: "Practitioner prep", blurb: "Core vocabulary used throughout BQH work." },
  { title: "Basic Hypnosis Terms", file: "BQH - Basic Hypnosis Terms 23.pdf", category: "Practitioner prep", blurb: "Standard hypnosis terminology glossary." },

  // QHHT specific
  { title: "QHHT Waiver (ITA)", file: "QHHT - Waiver ITA.pdf", category: "QHHT specific", blurb: "The signed liability release and recording consent for QHHT clients." },
  { title: "L1 Procedure Notes (ITA)", file: "QHHT - L1 Procedure Notes ITA.pdf", category: "QHHT specific", blurb: "Level 1 QHHT procedure notes." },
  { title: "Ipnosi Regressiva (ITA)", file: "QHHT - Ipnosi Regressiva ITA.pdf", category: "QHHT specific", blurb: "Regression hypnosis reference material, in Italian." },
  { title: "Come prepararsi per una sessione (ITA)", file: "Come prepararsi per una sessione QHHT (ITA).pages", category: "QHHT specific", blurb: "Italian client prep guide — question list and pre-session mindset, to send to Italian-speaking clients." },
  { title: "Video & Audio Release Form (QHHT Academy)", file: "QHHT-Video-Release-Audio-Release-Form-2025-Rev.pdf", category: "QHHT specific", blurb: "QHHT Academy's official release, for training-purpose use of a session recording — separate from marketing consent." },
  { title: "Level 2 Procedure Notes", file: "Level-2-Procedure-Notes-5.2015-Rev.pdf", category: "QHHT specific", blurb: "QHHT Level 2 procedure reference notes." },
  { title: "Level 3 Recording Tips", file: "Level-3-Recording-Tips.pdf", category: "QHHT specific", blurb: "Practical tips for recording a session cleanly, from Level 3 training." },
  { title: "Dolores Cannon — Past Life Regression", file: "Dolores Cannon PLR.pdf", category: "QHHT specific", blurb: "Reference notes on Dolores Cannon's past-life regression approach." },
];
