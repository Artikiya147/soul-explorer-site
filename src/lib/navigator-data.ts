export type NavEntry = {
  id: string;
  tag: string;
  q: string;
  a: string;
};

export const NAV_ENTRIES: NavEntry[] = [
  {
    id: "nogo",
    tag: "Induction",
    q: "Won't go down / stays alert",
    a: "• Slow your voice and lengthen the pauses: you are the metronome.\n• Move attention from “seeing” to “feeling”: weight, temperature, breath.\n• Return to the body, then the stairs/cloud, then the body again.\n• Normalise: “That is fine, there is nothing to force.”\n• Use their favourite image from the questionnaire (sea, wood, childhood home).\n• If they stay alert: continue anyway. Many sessions work in a light state.",
  },
  {
    id: "nothing",
    tag: "Scene",
    q: "“I see nothing”",
    a: "• “You do not need to see. What do you know, even without seeing?”\n• Start at the feet: “What is on your feet? Shoes, sand, grass?”\n• Ask about temperature, light, sounds, smells.\n• Ask them to imagine: imagination opens the door, then the scene takes over.\n• Count: “On three the first image will be there. One… two… three.”",
  },
  {
    id: "loop",
    tag: "Scene",
    q: "Stuck in a loop / frozen scene",
    a: "• Move time: “Go to the next important moment.”\n• Change scale: “Rise above the scene and look from above.”\n• Change channel: visual → emotional, emotional → body.\n• Jump to the end: “Go to the last day of that life.”\n• If the loop persists, call in the Higher Self early and ask why the scene repeats.",
  },
  {
    id: "emotion",
    tag: "Emotion",
    q: "Intense emotional release / crying",
    a: "• Do not interrupt and do not soothe too soon: the release is the work.\n• Low, present voice: “I am here. Let it come. Breathe.”\n• If it becomes too much: “Step back and watch the scene from a distance, like a film.”\n• Then return to the body; offer water at the end, never during.\n• Ask the Higher Self to lighten what was seen and explain its meaning.",
  },
  {
    id: "fear",
    tag: "Emotion",
    q: "Fear, resistance, “I don't want to look”",
    a: "• Respect the no: “You do not have to go in. We can look from here.”\n• Build distance: screen, glass, bridge, your hand in theirs.\n• Ask permission of the protecting part: “What do you need to let us see?”\n• Offer an always-available exit: “Just say ‘out’ and we are out.”\n• If it stays closed, move to the Higher Self: it often explains the resistance better than the scene.",
  },
  {
    id: "pain",
    tag: "Body",
    q: "Physical pain or discomfort during the session",
    a: "• Allow movement: “You can adjust, you will stay relaxed.”\n• Ask whether the pain belongs to the scene or to the present body.\n• If it is the scene's: “What does it want to tell you?” then ask the Higher Self to release it.\n• If it is the body's: change position, pillow, blanket; restore the state with three breaths.",
  },
  {
    id: "sc",
    tag: "Higher Self",
    q: "Cannot reach the Higher Self",
    a: "• Change the name: “the wisest part of you”, “the one who has always known you”, “your guide”.\n• Go through the scene: speak first with the character from the life just seen.\n• Ask for a simple yes or no to begin, then widen.\n• Use the body: “Where do you feel it? Speak from there.”\n• If it does not come, do not push: gather the messages from the scene and close with care.",
  },
  {
    id: "wake",
    tag: "State",
    q: "Wakes too early / comes out of state",
    a: "• Do not be alarmed and do not comment: resume in a low voice.\n• “Close your eyes and go back to where we were, everything is still there.”\n• Three breaths, restore the weight of the body, then a detail from the scene already seen.\n• If it happens repeatedly, continue in a light state: the answers still come.",
  },
  {
    id: "sleep",
    tag: "State",
    q: "Has fallen asleep / not responding",
    a: "• Raise your volume slightly and use their first name: “[Name], can you hear me?”\n• Ask for a minimal signal: “Lift one finger if you can hear me.”\n• If truly asleep: allow 2–3 minutes, then bring them back with “Now you hear my voice and continue.”\n• Remember: many people in a deep state seem asleep and still respond.",
  },
  {
    id: "tech",
    tag: "Technical",
    q: "Technical problems (online): audio, connection, recording",
    a: "• Always record on two devices: one local, one in the cloud.\n• If the connection drops: call back immediately and resume with “Go back to where we were.”\n• Keep their phone number ready as plan B: the session can continue by voice.\n• Do not announce technical problems while they are deep: fix in silence.\n• Check disk space and battery before you start, every time.",
  },
  {
    id: "time",
    tag: "Timing",
    q: "Time is short and questions remain",
    a: "• Move to the Higher Self now and read only the priority questions.\n• Group them: “What does she need to know about health, relationships and work?”\n• Ask for a summary: “The most important message for her, right now.”\n• Always include the body scan, even briefly.\n• Close with care: never rush the awakening.",
  },
  {
    id: "closing",
    tag: "Closing",
    q: "Closing & awakening, step by step",
    a: "1. Thank the Higher Self and ask if there is anything more.\n2. Ask to seal the changes and leave only what serves.\n3. Suggestions: memory of the experience, wellbeing, sleep, integration.\n4. Return to the body: feet, hands, breath.\n5. Count from 1 to 5, more energy with each number.\n6. Water, silence, time. No hasty interpretation.\n7. Stop the recording only once they are fully present.",
  },
  {
    id: "after",
    tag: "After",
    q: "After the session: what to say, what not to say",
    a: "• Do not interpret: ask what they remember and what stayed with them.\n• Remind them they will listen back: much will only land then.\n• Advise a quiet evening, water, no major decisions for 24 hours.\n• Note your own impressions and the synchronicities immediately: they feed the analysis.\n• Recording within 24 hours, transcript and analysis within 7–10 days.",
  },
];

export const NAV_ALWAYS = `• Two recorders, always. Check battery and disk space before you start.
• Low, slow voice: you are the metronome.
• Do not interpret while they are deep.
• Never rush the closing, even when time is short.
• Water and silence at the end, no major decisions for 24 hours.`;
