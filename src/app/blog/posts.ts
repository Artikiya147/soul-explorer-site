export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "closing"; text: string };

export type Post = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  titleEm: string;
  dek: string;
  excerpt: string;
  featured?: boolean;
  draft?: boolean;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "past-life-regression",
    category: "QHHT & Regression",
    readTime: "8 min read",
    title: "What Really Happens in a ",
    titleEm: "Past-Life Regression",
    dek: "The fears, the wonder, and the moment a stranger's life turns out to be your own.",
    excerpt:
      "The fears, the wonder, and the moment a stranger's life turns out to be your own, a gentle walk through the experience, from the first breath to the voice that answers.",
    featured: true,
    body: [
      {
        type: "p",
        text: "Almost everyone arrives with the same quiet worry: what if nothing happens? What if I'm the one person who can't be hypnotized, who lies there for three hours and sees only the back of their own eyelids? I want to begin here, because this fear is so common, and so completely understandable.",
      },
      {
        type: "p",
        text: "Here is the truth I tell everyone. The state we enter in a regression is not exotic or hard to reach. It's the same soft, drowsy place you move through every single night as you fall asleep, and every morning as you wake. You've been visiting it your whole life. In a session, we simply linger there a little longer, with intention.",
      },
      { type: "h3", text: "The first breath" },
      {
        type: "p",
        text: "We don't rush. Before any hypnosis, we talk, often for a couple of hours, about your life, your questions, the threads that brought you here. By the time you lie down, you already feel safe, and your body knows it's allowed to rest.",
      },
      {
        type: "p",
        text: "Then my voice becomes a kind of handrail. I guide you down through relaxation, into a cloud, a staircase, a warm descent. Your thinking mind, the one composing grocery lists and worrying about traffic, gradually steps aside. And then, almost always more vividly than people expect, the first scene arrives.",
      },
      { type: "quote", text: "It rarely feels like imagining. It feels like remembering something you'd simply forgotten you knew." },
      { type: "h3", text: "A stranger's life, that turns out to be yours" },
      {
        type: "p",
        text: "You might find yourself looking down at unfamiliar feet on a dusty road. A pair of worn boots. The hem of a dress from a century you never studied. A name will surface. A season. A place. And slowly, a whole life unfolds, one your soul has lived before.",
      },
      {
        type: "p",
        text: "What moves people most is never the costume or the era. It's the thread: the way that distant life speaks directly to the one they're living now. The fear that never made sense. The pain with no medical cause. The love that felt impossibly old. Again and again, the regression leads precisely to the root.",
      },
      { type: "h3", text: "The voice that answers" },
      {
        type: "p",
        text: "After the lifetimes, we go deeper still, past the individual story, into what I call, following Dolores Cannon, the Subconscious. This is the loving, vast intelligence that has never once left you. I read your questions aloud, and it answers, through you, in your own voice. Tender, often funny, and unfailingly true.",
      },
      {
        type: "p",
        text: "And that, more than any single past life, is why people come. Not only to remember who they've been, but to finally hear, in their own words, the part of them that always knew the way home.",
      },
      {
        type: "closing",
        text: "If something in you stirred while reading this, that's not an accident. When you're ready, read more about QHHT, try a free oracle reading, or simply book a conversation.",
      },
    ],
  },
  {
    slug: "signs-youve-lived-before",
    category: "Past Lives",
    readTime: "5 min",
    title: "The Signs You've ",
    titleEm: "Lived Before",
    dek: "Déjà vu, unexplained fears, an instant bond with a stranger, the quiet ways a past life makes itself known.",
    excerpt: "Déjà vu, unexplained fears, an instant bond with a stranger, the quiet ways a past life makes itself known.",
    draft: true,
    body: [
      {
        type: "p",
        text: "Most people don't come to a past life through a dramatic vision. They come through a small, nagging feeling they've been carrying for years, one they've never quite had the words for. A room that felt familiar the first time they walked into it. A fear of water with no memory to explain it. A person they met once and somehow already knew.",
      },
      {
        type: "p",
        text: "None of this is coincidence, and none of it means something is wrong with you. It means your soul is doing what souls do: carrying forward what it hasn't finished, until you're ready to look at it directly.",
      },
      { type: "h3", text: "The body remembers before the mind does" },
      {
        type: "p",
        text: "Unexplained physical sensitivities are one of the clearest signals. A tightness in the throat around certain topics. A flinch at a sound. A season of the year that always brings grief you can't source. The body keeps its own records, often long before the conscious mind is willing to.",
      },
      {
        type: "p",
        text: "Déjà vu belongs here too, not as a glitch, but as a brief crossing of timelines, a moment when this life and a former one line up closely enough for you to feel the seam.",
      },
      { type: "h3", text: "The instant bond, and the instant aversion" },
      {
        type: "p",
        text: "You meet someone and within minutes it feels like a reunion, not an introduction. Or the opposite: someone you've done nothing to deserve unease from sets your whole body on alert. Soul contracts don't announce themselves. They just arrive, fully formed, in the nervous system.",
      },
      { type: "quote", text: "A past life doesn't need to be proven to you. It only needs to be recognised." },
      {
        type: "p",
        text: "You don't have to chase these signs down or interpret every one of them alone. Sometimes it's enough to simply notice them, and trust that the pattern will keep speaking until you're ready to sit with it properly.",
      },
      {
        type: "closing",
        text: "If any of this sounds familiar, a QHHT session is the most direct way to go looking, or start gently with a Soul Reading to see what's already surfacing.",
      },
    ],
  },
  {
    slug: "reading-the-season-youre-in",
    category: "Soul Readings",
    readTime: "6 min",
    title: "Reading the Season ",
    titleEm: "You're In",
    dek: "How astrology and numerology map the timing of a life, and why nothing arriving now is an accident.",
    excerpt: "How astrology and numerology map the timing of a life, and why nothing arriving now is an accident.",
    draft: true,
    body: [
      {
        type: "p",
        text: "One of the questions I hear most often, in almost every reading, is some version of: why is this happening now? Not what does it mean, not what should I do, but why now, of all the years this could have arrived.",
      },
      {
        type: "p",
        text: "Timing is not decoration on top of the story. It is the story. Astrology and numerology exist because your soul doesn't move in a straight line, it moves in seasons, and each season has its own weather.",
      },
      { type: "h3", text: "Two maps, one soul" },
      {
        type: "p",
        text: "Your birth chart is the sky memorised at the exact moment you arrived, a signature written in timing rather than words. It shows the transits you're moving through now, and what they tend to ask of a person passing beneath them.",
      },
      {
        type: "p",
        text: "Numerology works differently but arrives at the same place. The numbers in your name and birth date describe a rhythm, a personal year, a life path, a season that repeats and deepens as you move through it. Where astrology shows the weather, numerology shows the calendar.",
      },
      { type: "h3", text: "Why nothing is really an accident" },
      {
        type: "p",
        text: "When a reading and a channeled message agree, independently, on the same theme, it stops feeling like fortune-telling and starts feeling like confirmation. That's the moment most people exhale. Not because the future is suddenly certain, but because the present finally makes sense.",
      },
      { type: "quote", text: "You are not behind schedule. You are precisely on the one your soul chose." },
      {
        type: "p",
        text: "A season doesn't need to be endured blindly. Once you can see its shape, you can move with it instead of against it, which is most of what a good reading is actually for.",
      },
      {
        type: "closing",
        text: "Curious what season you're standing in right now? A Soul Reading weaves your chart, your numbers, and channeled guidance into one coherent answer.",
      },
    ],
  },
  {
    slug: "finding-the-theta-doorway",
    category: "Meditation",
    readTime: "4 min",
    title: "Finding the ",
    titleEm: "Theta Doorway",
    dek: "A simple practice to touch the in-between state on your own, between sessions and before sleep.",
    excerpt: "A simple practice to touch the in-between state on your own, between sessions and before sleep.",
    draft: true,
    body: [
      {
        type: "p",
        text: "Theta isn't a special place reserved for hypnosis sessions. It's a brainwave state you already visit twice a day, once as you fall asleep, once as you wake. Most people simply move through it too quickly to notice.",
      },
      {
        type: "p",
        text: "The good news is that you don't need a practitioner in the room to find it. You only need to learn how to slow down at the doorway instead of walking straight through.",
      },
      { type: "h3", text: "The five-minute version" },
      {
        type: "p",
        text: "Lie down somewhere you won't be disturbed, ideally right before sleep or just after waking, while the body is already loose. Let your breath slow on its own, don't force it. Count backward slowly from twenty, and let each number sink you a little further, the way you would sink into warm water.",
      },
      {
        type: "p",
        text: "Somewhere around the middle of the count, you'll notice thoughts start to arrive sideways rather than in straight lines, images rather than sentences. That drift is the doorway. Stay there as long as you can before sleep or the day pulls you the rest of the way through.",
      },
      { type: "h3", text: "What to do once you're there" },
      {
        type: "p",
        text: "Nothing, at first. Theta rewards patience more than effort. Once you're comfortable simply resting in it, you can begin to ask a single, gentle question, and notice what rises, an image, a word, a feeling, without grabbing for it.",
      },
      { type: "quote", text: "You are not trying to leave your body. You are trying to stop leaving the present moment." },
      {
        type: "p",
        text: "This is also exactly the state the Returning to the Breath meditation is built to guide you into, if you'd rather have a voice walking beside you the first few times.",
      },
      {
        type: "closing",
        text: "Want a guided version of this same doorway? Begin with the free preview meditation, or explore the full 21-Day Crystalline Flow series.",
      },
    ],
  },
  {
    slug: "highly-sensitive-in-a-loud-world",
    category: "The Journey",
    readTime: "7 min",
    title: "On Being Highly Sensitive in a ",
    titleEm: "Loud World",
    dek: "For the ones who feel more than they can explain, and how this path was made for exactly that.",
    excerpt: "For the ones who feel more than they can explain, and how this path was made for exactly that.",
    draft: true,
    body: [
      {
        type: "p",
        text: "If you've spent your life being told you're too sensitive, too much, too easily affected by rooms and moods and other people's unspoken feelings, I want to start by saying something plainly: there is nothing wrong with you.",
      },
      {
        type: "p",
        text: "What you're carrying is not a flaw in your design. It's a wider bandwidth. You are simply receiving more of the frequency the rest of the world has learned to tune out.",
      },
      { type: "h3", text: "Why it feels like too much" },
      {
        type: "p",
        text: "A loud world was never built with wide receivers in mind. Fluorescent light, constant notification, small talk layered over unspoken tension, none of it was designed for a nervous system that notices everything. So exhaustion isn't a sign you're failing at being human. It's a sign you're accurately reading a noisy room.",
      },
      {
        type: "p",
        text: "Many highly sensitive people also carry old soul memory of quieter, slower lives, which only sharpens the contrast. The overwhelm isn't only sensory. It's sometimes ancestral, sometimes past-life, sometimes simply the friction of an old rhythm meeting a fast new world.",
      },
      { type: "h3", text: "Turning the volume from enemy to instrument" },
      {
        type: "p",
        text: "The goal was never to become less sensitive. It's to build a life with enough quiet in it that the sensitivity can become useful again, intuition, empathy, the ability to read a room or a client or a chart with real precision.",
      },
      { type: "quote", text: "You were not given this much feeling by accident. You were given it because you can do something with it." },
      {
        type: "p",
        text: "Most of the practitioners, readers, and healers I know share this exact trait. It isn't in spite of their sensitivity that they do this work. It's because of it.",
      },
      {
        type: "closing",
        text: "If this describes you, a Soul Reading can help name what you're actually carrying, and a guided meditation practice can help you rest in it instead of fighting it.",
      },
    ],
  },
  {
    slug: "meeting-the-subconscious",
    category: "QHHT & Regression",
    readTime: "6 min",
    title: "Meeting the ",
    titleEm: "Subconscious",
    dek: "Who, or what, is the loving intelligence that answers in your own voice? An introduction to the SC.",
    excerpt: "Who, or what, is the loving intelligence that answers in your own voice? An introduction to the SC.",
    draft: true,
    body: [
      {
        type: "p",
        text: "In every QHHT session, there is a moment the whole day has been building toward, quietly, from the first hello. It's the moment we move past the lifetimes and I ask to speak with what Dolores Cannon called the Subconscious, or simply, the SC.",
      },
      {
        type: "p",
        text: "People often expect this to feel dramatic. Mostly, it feels like the room gets very still, and then a different quality of voice, still yours, but unmistakably more, begins to answer.",
      },
      { type: "h3", text: "Not a separate being, and not entirely you either" },
      {
        type: "p",
        text: "The SC isn't a spirit guide passing through, and it isn't the anxious, thinking part of you that worries about traffic and unread emails. It's closer to the part of you that has been present for every lifetime, every choice, every lesson, the continuous thread beneath all the separate stories.",
      },
      {
        type: "p",
        text: "It speaks with a particular tone: unhurried, plainspoken, often gently funny, and never, in my experience, cruel. Whatever it says, even the hard things, arrives wrapped in something unmistakably like love.",
      },
      { type: "h3", text: "What it actually does" },
      {
        type: "p",
        text: "The SC is the one who decides which lifetime to show, and when. It's also the one capable of healing the body directly, on request, in ways that still humble me after years of witnessing it. And it answers questions, yours, in a way that somehow already knows exactly what you needed to ask.",
      },
      { type: "quote", text: "It has never once left you. It has simply been waiting for you to ask." },
      {
        type: "p",
        text: "People sometimes worry they won't be able to reach it, that it's reserved for the especially gifted or the especially calm. It isn't. Everyone I have worked with has met it. The only requirement is willingness.",
      },
      {
        type: "closing",
        text: "Curious what your own Subconscious might say? A QHHT session is the most direct way to find out, in person or through BQH online.",
      },
    ],
  },
  {
    slug: "how-to-prepare-for-your-session",
    category: "The Journey",
    readTime: "5 min",
    title: "How to Prepare for ",
    titleEm: "Your Session",
    dek: "What to do the week before, the questions to bring, and how to soften into trust beforehand.",
    excerpt: "What to do the week before, the questions to bring, and how to soften into trust beforehand.",
    draft: true,
    body: [
      {
        type: "p",
        text: "The most common question I get in the week before a session isn't about hypnosis at all. It's some version of: what do I need to do to make sure this works? The honest answer is reassuring: less than you think.",
      },
      {
        type: "p",
        text: "A session isn't something you pass or fail. But there are a few gentle things that genuinely help the work land more easily.",
      },
      { type: "h3", text: "In the week before" },
      {
        type: "p",
        text: "Rest more than usual, if you can. Drink more water than you think you need. Notice what's been surfacing lately, dreams, sudden emotions, recurring images, and jot them down rather than dismissing them. None of this is a test. It's simply loosening the soil before we plant anything.",
      },
      {
        type: "p",
        text: "Try to keep the day of your session itself unhurried. Arrive without having rushed from somewhere else. The nervous system settles far faster when it hasn't just been sprinting.",
      },
      { type: "h3", text: "The questions worth bringing" },
      {
        type: "p",
        text: "Write your questions down beforehand, in your own words, even if they feel too big or too small. The clearest sessions usually come from people who arrive with three or four honest questions rather than twenty vague ones. Health, relationships, purpose, patterns that repeat, all of it is fair territory.",
      },
      { type: "quote", text: "You don't have to arrive certain. You only have to arrive willing." },
      {
        type: "p",
        text: "And if you're nervous, that's not a problem to solve before we begin. Almost everyone is. We simply start there, together, and let the nervousness become part of the settling rather than an obstacle to it.",
      },
      {
        type: "closing",
        text: "Ready to book your own session? Explore QHHT in person, or BQH if you'd rather begin from home.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, count = 3) {
  return POSTS.filter((p) => p.slug !== slug).slice(0, count);
}
