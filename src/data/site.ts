export type Course = {
  slug: string;
  title: string;
  icon: "Briefcase" | "BookOpen" | "PenLine" | "Feather" | "Mic" | "Sparkles";
  short: string;
  long: string;
  duration: string;
  audience: string;
  outcomes: string[];
};

export const courses: Course[] = [
  {
    slug: "career-focused-communication",
    title: "Career-Focused Communication",
    icon: "Briefcase",
    short: "Interview answers, workplace presence and presentations that get you noticed.",
    long: "A practical programme for working professionals and job seekers. You practise interviews, stakeholder updates, client pitches and everyday workplace conversations until they feel natural.",
    duration: "8 weeks · 2 sessions a week",
    audience: "Working professionals & graduates",
    outcomes: [
      "Structure any answer in under ten seconds",
      "Speak with a calm, steady voice under pressure",
      "Deliver crisp updates to senior stakeholders",
    ],
  },
  {
    slug: "all-rounder-english",
    title: "All-Rounder English",
    icon: "BookOpen",
    short: "Grammar, vocabulary, fluency and pronunciation in one balanced track.",
    long: "For learners who want the whole picture: reading, writing, listening and speaking built together so progress in one area lifts the others.",
    duration: "12 weeks · 3 sessions a week",
    audience: "All levels, ages 15+",
    outcomes: [
      "Everyday fluency without translating in your head",
      "A working vocabulary you actually use",
      "Clear, neutral pronunciation",
    ],
  },
  {
    slug: "young-author-program",
    title: "Young Author Program",
    icon: "PenLine",
    short: "Guided writing for young learners, ending in a published class anthology.",
    long: "Students plan, draft and edit their own stories with weekly feedback. The course closes with a printed anthology and a public reading.",
    duration: "10 weeks · weekend batch",
    audience: "Ages 10-16",
    outcomes: ["Story structure and character craft", "Confident self-editing", "A finished, published piece"],
  },
  {
    slug: "writers-choice",
    title: "Writer's Choice",
    icon: "Feather",
    short: "Advanced writing workshop: essays, opinion pieces and long-form narrative.",
    long: "A workshop-style course where you bring your own project and leave with a portfolio-ready body of work, shaped by peer critique and one-to-one edits.",
    duration: "8 weeks · 1 long session a week",
    audience: "Ages 16+ and adults",
    outcomes: ["A sharper personal voice", "Editing discipline", "Three polished portfolio pieces"],
  },
  {
    slug: "young-orator",
    title: "Young Orator",
    icon: "Mic",
    short: "Stage confidence, debate and storytelling for school-age speakers.",
    long: "From first-time stage nerves to competitive debate. Students learn breathing, body language, argument building and how to hold a room.",
    duration: "12 weeks · weekend batch",
    audience: "Ages 9-17",
    outcomes: ["Stage presence without nerves", "Debate and extempore skills", "Three live performances"],
  },
  {
    slug: "custom-communication-coaching",
    title: "Custom Communication Coaching",
    icon: "Sparkles",
    short: "A programme designed around your goal, timeline and speaking context.",
    long: "Preparing for a keynote, a viva, a funding pitch or a wedding toast? We build the syllabus backwards from your date and rehearse the real thing.",
    duration: "Flexible · 1-to-1",
    audience: "Individuals & teams",
    outcomes: ["A syllabus built for your goal", "Rehearsal in the real setting", "Recorded feedback after each session"],
  },
];

export const testimonials = [
  {
    name: "Ananya Rao",
    role: "MBA Student",
    review:
      "I used to freeze in group discussions. Eight weeks in, I led my cohort's final presentation and actually enjoyed it.",
  },
  {
    name: "Rohit Menon",
    role: "IT Professional",
    review:
      "The interview drills were brutally practical. I stopped rambling, started structuring, and cleared three rounds in a row.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Senior Manager",
    review:
      "My leadership updates were dense and dull. Now they are short, clear and people remember them. That is the whole difference.",
  },
  {
    name: "Imran Sheikh",
    role: "Startup Founder",
    review:
      "We rehearsed my investor pitch line by line. The feedback was direct and it showed on demo day.",
  },
];

export const posts = [
  {
    slug: "structure-beats-confidence",
    title: "Structure Beats Confidence",
    date: "2026-08-18",
    excerpt:
      "Confidence is a by-product, not a prerequisite. Learn the three-part frame that makes any answer sound prepared.",
  },
  {
    slug: "five-minutes-before-you-speak",
    title: "The Five Minutes Before You Speak",
    date: "2026-07-30",
    excerpt:
      "A short physical routine that settles your breathing, slows your pace and stops the shaky first sentence.",
  },
  {
    slug: "how-to-run-a-room",
    title: "How to Run a Room, Not Just Present to It",
    date: "2026-07-02",
    excerpt: "Eye contact, pausing and question handling: the three habits that turn a talk into a conversation.",
  },
  {
    slug: "vocabulary-you-actually-use",
    title: "Building Vocabulary You Actually Use",
    date: "2026-06-11",
    excerpt: "Word lists fade. Here is how to move new words from recognition into everyday speech in two weeks.",
  },
  {
    slug: "teaching-teens-to-argue-well",
    title: "Teaching Teens to Argue Well",
    date: "2026-05-24",
    excerpt: "Debate is not about winning. It is the fastest way to teach young speakers to think in public.",
  },
  {
    slug: "the-pause-is-the-point",
    title: "The Pause Is the Point",
    date: "2026-05-05",
    excerpt: "Filler words vanish when you get comfortable with silence. A simple drill to practise it.",
  },
];

export const locations = [
  { city: "Bengaluru", address: "221 Orator Lane, Indiranagar, Bengaluru 560038", phone: "+91 98000 12345" },
  { city: "Pune", address: "14 Skyline Plaza, Baner Road, Pune 411045", phone: "+91 98000 12346" },
  { city: "Hyderabad", address: "3rd Floor, Vector Hub, Madhapur, Hyderabad 500081", phone: "+91 98000 12347" },
  { city: "Delhi NCR", address: "B-42 Sector 44, Gurugram 122003", phone: "+91 98000 12348" },
];
