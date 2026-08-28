import { practiceOf } from "./practices";
import { createClient } from "./supabase/client";

type PracticeId = string;
type DocTypeId = string;

export type LibraryItem = {
  id: string;
  heading: string;
  body: string;
  category?: string;
  /** Auto-included in every new document of this practice + doc type. */
  isDefault: boolean;
};

async function seedFor(practiceId: PracticeId, docType: DocTypeId): Promise<LibraryItem[]> {
  const p = await practiceOf(practiceId);
  const name = "the Client";
  const item = (
    id: string,
    heading: string,
    body: string,
    category?: string,
    isDefault = true
  ): LibraryItem => ({
    id,
    heading,
    body,
    category,
    isDefault,
  });

  if (docType === "waiver") {
    return [
      item(
        "seed-1",
        "Not a medical service",
        `I understand that ${p.fullName} involves relaxation, visualization, hypnosis and stress-reduction techniques. I understand these are not medical treatment and do not replace the advice or care of a licensed physician or mental health professional. I will continue to consult my own doctor for any medical condition, existing or new, and let them know about any changes in my health or in my session.`,
        "Core"
      ),
      item(
        "seed-2",
        "My own responsibility",
        `I understand that ultimate responsibility for any change resulting from this ${p.sessionNoun} rests with me. All healing is self-healing; Alessandra Fadda acts only as a facilitator in the process. Any guidance or "homework" I receive during the session is understood to come from my own higher self, not from the practitioner.`,
        "Core"
      ),
      item(
        "seed-3",
        "Right to decline",
        `I understand that if Alessandra Fadda determines that continuing is not in the best interest of either of us, she may choose not to proceed with the session. I understand she is not responsible for any costs I've incurred in connection with a declined session, including travel or accommodation.`,
        "Core"
      ),
      item(
        "seed-4",
        "Recording, and how it's used",
        `I understand my session is recorded digitally for my own later use. Because of the sensitive, energetic nature of this work, recording equipment can occasionally be affected, resulting in static or partial recordings — I release Soul Explorer from responsibility for any such loss. My name and personal details are always kept confidential. Sharing my session beyond my own copy, including as an anonymized summary, requires my separate, explicit, written consent, and is never assumed.`,
        "Recording"
      ),
      item("seed-5", "Emergency contact", `Emergency contact name & phone: ________________________`, "Core"),
      item("seed-6", "Governing law", `This agreement is governed by and interpreted under Italian law.`, "Legal"),
    ];
  }

  if (docType === "release") {
    return [
      item(
        "seed-1",
        "Scope of consent",
        `I authorise the use of: ☐ audio excerpts  ☐ video excerpts  ☐ written testimonial  ☐ my first name  ☐ initials only / anonymous. Tick what you wish to allow; anything not ticked may not be used.`,
        "Scope"
      ),
      item(
        "seed-2",
        "Channels & purpose",
        `The material may be published on the website, social channels (Instagram, Facebook, YouTube, TikTok), newsletter and educational materials of Soul Explorer, for informational and educational purposes about the practice. No commercial use by third parties.`,
        "Scope"
      ),
      item(
        "seed-3",
        "Duration & withdrawal",
        `Consent is granted for an indefinite period and may be withdrawn at any time by writing to alex@soul-explorer.com. Upon withdrawal the material will be removed from channels managed by Soul Explorer within 30 days; copies already shared by third parties cannot be recalled.`,
        "Terms"
      ),
      item(
        "seed-4",
        "No compensation",
        `I acknowledge that no compensation is provided for the use of the material and that any publication will respect my dignity and privacy.`,
        "Terms"
      ),
      item(
        "seed-5",
        "Data processing",
        `Data and material are processed in accordance with EU Regulation 2016/679 (GDPR). Data controller: Alessandra Fadda — alex@soul-explorer.com.`,
        "Legal"
      ),
    ];
  }

  if (docType === "disclaimer") {
    return [
      item(
        "seed-1",
        "Not a medical service",
        `The sessions offered by Soul Explorer are practices of deep relaxation, guided imagery and non-clinical hypnosis for personal growth. They do not constitute diagnosis, therapy, prescription or treatment of any physical or psychological condition and do not replace medical advice.`,
        "Core"
      ),
      item(
        "seed-2",
        "Who it is not for",
        `Sessions are not suitable in the presence of severe psychiatric disorders, psychosis, schizophrenia, uncontrolled epilepsy, active addictions, or while on psychoactive medication without the treating doctor's consent. In these cases a prior conversation is required.`,
        "Core"
      ),
      item(
        "seed-3",
        "No guarantee of results",
        `Every experience is personal and unrepeatable. No specific content, memories, sensations or outcomes can be guaranteed. Published testimonials describe individual experiences and are not a promise of results.`,
        "Core"
      ),
      item(
        "seed-4",
        "Client responsibility",
        `The client remains responsible for their own choices, their own care pathway and the integration of the experience. All healing is self-healing: the practitioner accompanies and facilitates the process.`,
        "Core"
      ),
      item(
        "seed-5",
        "Confidentiality",
        `Everything that emerges in sessions is confidential. Recordings are made for the client's benefit and are not shared without written consent. Data processed under GDPR (EU Reg. 2016/679).`,
        "Legal"
      ),
      item("seed-6", "Contact", `For any question before booking: alex@soul-explorer.com — +44 7915 607621.`, "Legal"),
    ];
  }

  if (docType === "welcome") {
    return [
      item(
        "seed-1",
        "Your next steps",
        `1. Sign the waiver and informed consent.\n2. Fill in the intake questionnaire and send it back at least 5 days before.\n3. Prepare your list of questions (see the preparation guide).\n4. Block out the whole morning or afternoon of the session in your diary.`,
        "Next steps"
      ),
      item(
        "seed-2",
        "How the session unfolds",
        `We take all the time we need: a first conversation part where we go through your story and your questions together, the central part of deep relaxation, and a closing where we bring back what emerged. In total, allow 4–6 hours.`,
        "What to expect"
      ),
      item(
        "seed-3",
        "What you receive",
        `• The full audio recording of the session\n• The written transcript\n• The final analysis with the themes that emerged and integration suggestions\n• A follow-up two weeks later`,
        "What to expect"
      ),
      item(
        "seed-4",
        "Investment & payment",
        `Session: € ______. Deposit of € ______ on confirmation, balance on the day of the session. Cancellations up to 48 hours before.`,
        "Payment"
      ),
      item(
        "seed-5",
        "If you need me",
        `Write to me any time at alex@soul-explorer.com or on WhatsApp at +44 7915 607621. No question is too small.`,
        "Contact"
      ),
    ];
  }

  if (docType === "prep") {
    return [
      item(
        "seed-1",
        "Your questions",
        `Write between 4 and 10 questions, in order of importance. They can be about health, relationships, work, recurring dreams, fears, feelings you have carried forever. Write them by hand on a sheet of paper and bring it with you: we will read them together before we begin.`,
        "Before"
      ),
      item(
        "seed-2",
        "In the days before",
        `• Sleep as much as you can: tiredness helps relaxation, exhaustion does not.\n• Avoid alcohol and substances in the 24 hours before.\n• Drink plenty of water.\n• Reduce caffeine on the day (one cup in the morning is fine).`,
        "Before"
      ),
      item(
        "seed-3",
        "On the day",
        `• Eat lightly, but do not arrive hungry.\n• Dress comfortably, in layers.\n• Make no other commitments: no rush, no clock.\n• Use the bathroom before we begin.`,
        "On the day"
      ),
      item(
        "seed-4",
        "If the session is online",
        `• A quiet room where nobody will come in for 5 hours.\n• Bed or sofa, pillow, light blanket.\n• Headphones with a microphone, device plugged in, stable connection.\n• Notifications and doorbell silenced, pets in another room.\n• We will do a 5-minute tech check the day before.`,
        "Online"
      ),
      item(
        "seed-5",
        "About expectations",
        `Some people see vivid images, others hear, others simply know. No modality is better than another. There is nothing to force and nothing to control: my job is to accompany you, yours is to let it happen.`,
        "On the day"
      ),
      item(
        "seed-6",
        "After the session",
        `Give yourself a quiet evening. Drink water, write down what you remember, avoid major decisions for 24 hours. Listen back to the recording after a few days, not straight away.`,
        "After"
      ),
    ];
  }

  if (docType === "intake") {
    return [
      item(
        "seed-1",
        "Details",
        `Full name: ____________________\nDate of birth: ____________________\nPlace of birth: ____________________\nPhone / WhatsApp: ____________________\nEmail: ____________________\nOccupation: ____________________`,
        "Details"
      ),
      item(
        "seed-2",
        "How you found me",
        `How did you hear about Soul Explorer? What brought you to look for a session right now? Have you already experienced hypnosis, regression, meditation or other practices?`,
        "Background"
      ),
      item(
        "seed-3",
        "Health",
        `Current physical conditions: ____________________\nMedication: ____________________\nPast or current psychological/psychiatric care: ____________________\nEpilepsy, dissociative disorders, psychosis in the family: ____________________\nHearing, sight or speech difficulties: ____________________`,
        "Health"
      ),
      item(
        "seed-4",
        "Your story in brief",
        `Write freely: family, moments that marked you, what you have always carried. A few lines are enough.`,
        "Background"
      ),
      item(
        "seed-5",
        "Dreams, fears, recurrences",
        `Recurring dreams: ____________________\nUnexplained fears: ____________________\nPlaces or eras that attract you: ____________________\nPeople you met with a sense of "already known": ____________________`,
        "Background"
      ),
      item(
        "seed-6",
        "Your questions for the session",
        `1. ____________________\n2. ____________________\n3. ____________________\n4. ____________________\n5. ____________________\n6. ____________________`,
        "Questions"
      ),
      item(
        "seed-7",
        "Body",
        `Is there a part of the body you would like your Higher Self to look at? Pains, symptoms, tensions: ____________________`,
        "Health"
      ),
    ];
  }

  if (docType === "transcript") {
    return [
      item("seed-2", "Induction & descent", ``, "Journey"),
      item("seed-3", "First scene", ``, "Journey"),
      item("seed-4", "Following scenes", ``, "Journey"),
      item("seed-5", "Death & transition", ``, "Journey"),
      item("seed-6", "Higher Self dialogue", ``, "Journey"),
      item("seed-7", "Client questions", ``, "Journey"),
      item("seed-8", "Body scan", ``, "Journey"),
      item("seed-9", "Closing & awakening", ``, "Closing"),
    ];
  }

  if (docType === "analysis") {
    return [
      item("seed-1", "In brief", ``, "Summary"),
      item("seed-2", "The scenes experienced", ``, "Summary"),
      item("seed-3", "Recurring themes", ``, "Summary"),
      item("seed-4", "Answers to your questions", ``, "Summary"),
      item("seed-5", "Messages from the Higher Self", ``, "Summary"),
      item("seed-6", "The body", ``, "Summary"),
      item("seed-7", "Integration suggestions", ``, "Follow-up"),
      item("seed-8", "Next steps", ``, "Follow-up"),
    ];
  }

  if (docType === "practitioner") {
    return [
      item(
        "seed-1",
        "1 · First contact",
        `Collect name, contact and how they found you. Listen to your intuition while you write or talk. Ask the main reason they are seeking a session, what they know about the practice, whether they have experienced hypnosis, and what they expect. Explain timing, cost, technology and privacy before booking anything.`,
        "Method"
      ),
      item(
        "seed-2",
        "2 · Accepting (or declining) a client",
        `Positive indicators: they contacted you, they are motivated to change, open-minded, communicate clearly, have a reasonably stable life.\nCaution indicators: they want to prove it does not work, they seek a diagnosis or cure, they are in acute crisis, they were sent by someone else, they ask for guarantees.\nIf your gut says no, decline kindly and suggest an alternative.`,
        "Method"
      ),
      item(
        "seed-3",
        "3 · Documents & consents",
        `Send waiver and informed consent, intake questionnaire, preparation guide. The media release is optional and must be requested separately, never at the same moment as payment.`,
        "Method"
      ),
      item(
        "seed-4",
        "4 · Practitioner preparation",
        `Re-read the questionnaire and the questions the day before. Prepare your list of Higher Self questions. Care for the space, water, temperature, silence. Check recorder and batteries: two devices, always. Take five minutes of centring before they arrive.`,
        "Method"
      ),
      item(
        "seed-5",
        "5 · Session day",
        `Unhurried opening conversation. Re-read the questions together and reorder them. Explain what will and will not happen. Then induction, scenes, Higher Self, questions, body scan, closing. On awakening: water, time, no hasty interpretation.`,
        "Method"
      ),
      item(
        "seed-6",
        "6 · Delivery & follow-up",
        `Recording within 24 hours. Transcript and analysis within 7–10 days. Follow-up at two weeks. File everything in the client record and note the synchronicities: they are precious material.`,
        "Method"
      ),
    ];
  }

  if (docType === "studio_brief") {
    return [
      item("seed-1", "Obiettivi", `[Cosa deve ottenere questo progetto per ${name}.]`, "Strategia"),
      item("seed-2", "Pubblico", `[A chi si rivolge il sito o il progetto.]`, "Strategia"),
      item("seed-3", "Contenuti e pagine", `[Elenco delle pagine e dei contenuti previsti.]`, "Contenuti"),
      item("seed-4", "Riferimenti e tono", `[Siti di riferimento, tono di voce, stile visivo.]`, "Contenuti"),
      item("seed-5", "Tempi e milestone", `[Tappe principali e relative scadenze.]`, "Timeline"),
      item("seed-6", "Fuori perimetro", `[Cosa esplicitamente non è incluso in questo progetto.]`, "Scope"),
    ];
  }

  if (docType === "studio_handover") {
    return [
      item("seed-1", "Accessi", `[Credenziali di hosting, dominio, WordPress, e dove sono conservate.]`, "Accessi"),
      item("seed-2", "Come modificare i contenuti", `[Guida passo-passo per aggiornare testi e immagini.]`, "Guida"),
      item("seed-3", "Manutenzione e backup", `[Con che frequenza e come vengono fatti gli aggiornamenti e i backup.]`, "Guida"),
      item("seed-4", "Assistenza", `Per qualsiasi domanda dopo il lancio: info@af-webstylist.com.`, "Guida"),
    ];
  }

  // custom, user-created document type — starts with an empty library, built up via "+ Add new section".
  return [];
}

type LibraryRow = {
  id: string;
  heading: string;
  body: string | null;
  category: string | null;
  is_default: boolean;
};

function fromRow(row: LibraryRow): LibraryItem {
  return {
    id: row.id,
    heading: row.heading,
    body: row.body ?? "",
    category: row.category ?? undefined,
    isDefault: row.is_default,
  };
}

const seedAttempted = new Set<string>();

export async function libraryGet(practiceId: PracticeId, docType: DocTypeId): Promise<LibraryItem[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("pipeline_library_items")
    .select("*")
    .eq("practice_id", practiceId)
    .eq("doc_type_id", docType)
    .order("created_at");
  if (error) return [];

  const pairKey = `${practiceId}::${docType}`;
  if ((!data || data.length === 0) && !seedAttempted.has(pairKey)) {
    seedAttempted.add(pairKey);
    const seeded = await seedFor(practiceId, docType);
    if (seeded.length > 0) {
      const { error: seedError } = await supabase.from("pipeline_library_items").insert(
        seeded.map((i) => ({
          practice_id: practiceId,
          doc_type_id: docType,
          heading: i.heading,
          body: i.body,
          category: i.category,
          is_default: i.isDefault,
        }))
      );
      if (!seedError) {
        const { data: reseeded } = await supabase
          .from("pipeline_library_items")
          .select("*")
          .eq("practice_id", practiceId)
          .eq("doc_type_id", docType)
          .order("created_at");
        return (reseeded ?? []).map(fromRow);
      }
    }
  }

  return (data ?? []).map(fromRow);
}

export async function libraryAdd(
  practiceId: PracticeId,
  docType: DocTypeId,
  input: { heading: string; body: string; category?: string }
): Promise<LibraryItem | undefined> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("pipeline_library_items")
    .insert({
      practice_id: practiceId,
      doc_type_id: docType,
      heading: input.heading,
      body: input.body,
      category: input.category?.trim() || null,
      is_default: false,
    })
    .select()
    .single();
  if (error || !data) return undefined;
  return fromRow(data);
}

export async function libraryUpdate(
  practiceId: PracticeId,
  docType: DocTypeId,
  id: string,
  patch: Partial<Pick<LibraryItem, "heading" | "body" | "category">>
) {
  const supabase = createClient();
  const update: Record<string, unknown> = {};
  if (patch.heading !== undefined) update.heading = patch.heading;
  if (patch.body !== undefined) update.body = patch.body;
  if (patch.category !== undefined) update.category = patch.category?.trim() || null;
  await supabase.from("pipeline_library_items").update(update).eq("id", id);
}

export async function libraryRemove(practiceId: PracticeId, docType: DocTypeId, id: string) {
  const supabase = createClient();
  await supabase.from("pipeline_library_items").delete().eq("id", id);
}
