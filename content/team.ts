export type Member = {
  name: string;
  role: string;
  layers: string[];
  pending?: boolean;
  artifact:
    | { type: "audio"; caption: string }
    | { type: "code"; lines: { text: string; dim?: boolean }[]; caption: string }
    | { type: "pending"; caption: string };
};

export const teamPage = {
  path: "/team",
  title: "The Team: Engineers Who Also Make Things | Broadifi",
  metaDescription:
    "Meet the Broadifi team in Kolkata, India: senior engineers who are also writers, musicians, poets, and trekkers. Judgment first, then code.",
  ogTitle: "Software is our day job. It is not our whole stack.",
  lastUpdated: "6 September 2026",
  hero: {
    prefix: "Software is our day job. It is not our whole",
    words: ["stack.", "poems.", "songs.", "steps.", "treks.", "stories."],
    support: "Broadifi is engineers, and also writers, poets, musicians, and dancers. We think the second list is why the first list is good.",
  },
  thinking: {
    h2: "You do not need another coder. You need an engineer who thinks with you.",
    paragraphs: [
      "Code is cheap now. AI writes a first draft of almost anything in minutes, and it will keep getting better at that. What it cannot do is sit across the table, ask why the feature exists, notice the cost your infrastructure will carry in year three, and tell you the plan is wrong before it is built.",
      "That is the work we sell. A senior engineer who brings a second perspective, owns the architecture, and stays accountable for every line that reaches production. AI writes the first draft. We decide what ships.",
    ],
    aside: "If all you need is more typing, there are cheaper ways to get it. If you need someone to think with, keep reading.",
  },
  members: <Member[]>[
    {
      name: "Team Member 01",
      role: "Co-founder, engineering",
      layers: ["engineering /", "open source /", "music /", "mountains /"],
      artifact: { type: "audio", caption: "artifact pending / field recording, plays on click only" },
    },
    {
      name: "Team Member 02",
      role: "Engineer, developer tooling",
      layers: ["devtools /", "ssh /"],
      artifact: {
        type: "code",
        lines: [{ text: "aslit add prod-01" }, { text: "✓ saved. connect with: aslit go prod-01", dim: true }],
        caption: "artifact pending / CLI author",
      },
    },
    {
      name: "Team Member 03",
      role: "Engineering lead",
      layers: ["backend /", "mongodb /"],
      artifact: { type: "pending", caption: "artifact pending" },
    },
    { name: "Team Member 04", role: "Role pending", layers: ["layer /", "layer /"], pending: true, artifact: { type: "pending", caption: "artifact pending" } },
    { name: "Team Member 05", role: "Role pending", layers: ["layer /", "layer /"], pending: true, artifact: { type: "pending", caption: "artifact pending" } },
    { name: "Team Member 06", role: "Role pending", layers: ["layer /", "layer /"], pending: true, artifact: { type: "pending", caption: "artifact pending" } },
  ],
  offHours: {
    h2: "What we make when we are not making software.",
    items: [
      { kind: "photo", width: 420, height: 280, label: "trek photograph / Himalayas", caption: "photograph / name pending" },
      { kind: "verse", width: 340, height: 200, label: "artifact pending / verse", caption: "verse / name pending" },
      { kind: "audio", width: 380, height: 240, label: "audio pending / plays on click only", caption: "field recording / name pending" },
      { kind: "photo", width: 300, height: 300, label: "Durga Puja / photograph", caption: "photograph / name pending" },
      { kind: "sketch", width: 320, height: 220, label: "sketch / artifact pending", caption: "sketch / name pending" },
    ] as { kind: "photo" | "verse" | "audio" | "sketch"; width: number; height: number; label: string; caption: string }[],
  },
  kolkata: {
    line: "We work from Kolkata, a city that has always taken its engineers and its poets equally seriously.",
    place: "MODULE 206, WEBEL IT PARK, SECTOR V",
  },
  values: [
    "Curiosity first. The code follows.",
    "We work to the client's problem, not to our preferences.",
    "Everything worth shipping was reviewed by someone else here.",
  ],
  join: {
    h2: "If you build things and also make things, we would like to meet you.",
    cta: "Careers",
    href: "mailto:hello@broadifitech.com?subject=Careers",
  },
};
