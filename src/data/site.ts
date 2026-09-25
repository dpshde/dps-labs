/**
 * Site facts. Edit lists here.
 * The About essay itself lives in src/pages/index.astro.
 *
 * TODO(dylan): confirm the public GitHub handle. Project links below
 * still point at github.com/dpshade, which is what the previous site used.
 * The content brief also mentions dpshde.
 */

export const identity = {
  name: "Dylan Shade",
  place: "Louisville, KY",
  email: "dylanpriceshade@icloud.com",
  site: "https://dpslabs.dev",
  role: "Software engineer and composer",
  links: {
    linkedin: "https://www.linkedin.com/in/dylan-shade",
    github: "https://github.com/dpshade",
    spotify: "https://open.spotify.com/artist/4XOMyjPhYS9tT0SccdzZAt",
    apple: "https://music.apple.com/us/artist/dylan-shade/1475065308",
    youtube: "https://www.youtube.com/@dylanpshade",
    canon: "https://canonchords.com/",
    sheetMusic: "https://www.sheetmusicplus.com/en/category/arrangeme/312/dylan-shade/",
  },
} as const;

export type Note = {
  name: string;
  year: string;
  description: string;
  href?: string;
};

export const projects: Note[] = [
  {
    name: "Canon",
    year: "2025",
    description: "Chord composer for iOS, Mac, and Windows, with harmonic tension analysis.",
    href: "https://canonchords.com/",
  },
  {
    name: "Arbit Studio",
    year: "2024",
    description: "Web-based music studio with decentralized storage on Arweave.",
    href: "https://arbitstudio.ar.io/",
  },
  {
    name: "Voyager",
    year: "2024",
    description: "Censorship-resistant scripture translations on Arweave.",
    href: "https://voyager.ar.io/",
  },
  {
    name: "Vivace Theory",
    year: "2022",
    description: "Identify chords from the notes you play, with formal academic names.",
    href: "https://apps.apple.com/us/app/vivace-theory/id1603885678",
  },
  {
    name: "Chord Solver",
    year: "2021",
    description: "Enter a root and get voicings. 21,000+ installs.",
    href: "https://apps.apple.com/us/app/chord-solver/id1564025162",
  },
  {
    name: "Scripture",
    year: "2023–26",
    description: "Semantic Bible search running in the browser.",
    href: "https://github.com/dpshade/scripture",
  },
];

export const openSource: Note[] = [
  {
    name: "jj-opencode",
    year: "2025",
    description: "JJ define-before-implement workflow plugin for OpenCode.",
    href: "https://github.com/dpshade/jj-opencode",
  },
  {
    name: "LLM Fuel",
    year: "2025",
    description: "Documentation aggregation pipeline for AI training.",
    href: "https://github.com/dpshade/permaweb-llm-fuel",
  },
  {
    name: "Glossary",
    year: "2025",
    description: "15× performance work on the permaweb glossary. Featured in ar.io docs.",
    href: "https://github.com/dpshade/permaweb-glossary",
  },
  {
    name: "raycast-opencode",
    year: "2025",
    description: "Raycast extension for OpenCode, with session search.",
    href: "https://github.com/dpshade/raycast-opencode",
  },
  {
    name: "Prompt Suite",
    year: "2025",
    description: "AI context management with a CLI, a TUI, and Raycast.",
    href: "https://github.com/dpshade/pocket-prompt-suite",
  },
  {
    name: "auto-title",
    year: "2025",
    description: "Obsidian plugin that names notes with an LLM.",
    href: "https://github.com/dpshade/auto-title",
  },
];

export const experience: Note[] = [
  {
    // TODO(dylan): replace this line with the exact Papa Johns blurb you want public.
    name: "Papa Johns",
    year: "Current",
    description: "Applied AI Engineer.",
  },
  {
    name: "Forward Research",
    year: "2025",
    description: "Software Engineer. Developer tooling, an AI documentation system, and the AO Cookbook.",
  },
  {
    name: "JPMorgan Chase",
    year: "2023–25",
    description: "Software Engineer. AWS migration, LLM-powered systems, and two hackathon championships.",
  },
  {
    name: "Stantec",
    year: "2023",
    description: "Data Science Intern. DBScan clustering, a model-testing dashboard, and anomaly detection.",
  },
  {
    name: "CSI",
    year: "2022",
    description: "Software Developer Intern. Full-stack enterprise application development.",
  },
  {
    name: "OpenText",
    year: "2021",
    description: "Software Developer Intern. Enterprise content management.",
  },
];

export const education: Note[] = [
  {
    name: "University of Kentucky",
    year: "2019–23",
    description: "BS Computer Science, minor in Music. Resident advisor, 2020–2022.",
  },
  {
    name: "AWS Cloud Practitioner",
    year: "2023",
    description: "Certified Cloud Practitioner.",
  },
];

export type Release = {
  title: string;
  year: string;
  kind: "Album" | "Single";
  art?: string;
};

/** Recordings. Titles link to the artist page until specific Spotify URLs are chosen. */
export const releases: Release[] = [
  { title: "Pacific", year: "2019", kind: "Album", art: "/images/albums/Pacific.jpeg" },
  { title: "Nightfall", year: "2019", kind: "Single", art: "/images/albums/Nightfall.jpg" },
  { title: "Glimpse", year: "2020", kind: "Album", art: "/images/albums/Glimpse.jpeg" },
  { title: "Serenity", year: "2021", kind: "Album", art: "/images/albums/Serenity.jpeg" },
  // TODO(dylan): add years and per-track Spotify URLs for the later singles.
  { title: "Lift the Window", year: "", kind: "Single" },
  { title: "Not My Fault", year: "", kind: "Single" },
];

export type Score = {
  title: string;
  arrangement: string;
  slug: string;
};

export const scores: Score[] = [
  {
    title: "The Unquiet Grave",
    arrangement: "SSAATTBB choir",
    slug: "the-unquiet-grave-complete-song-cycle-23576036",
  },
  {
    title: "Mount Targon",
    arrangement: "Orchestra",
    slug: "mount-targon-score-only-23576064",
  },
  {
    title: "The Stars Above",
    arrangement: "SATB choir",
    slug: "the-stars-above-23576050",
  },
  {
    title: "Beyond the Sea",
    arrangement: "SATB choir",
    slug: "beyond-the-sea-23576056",
  },
  {
    title: "Mad's Orchestra",
    arrangement: "SATB choir",
    slug: "mad-s-orchestra-23576051",
  },
  {
    title: "Midnight",
    arrangement: "SATB choir",
    slug: "midnight-23576047",
  },
  {
    title: "Autumn Dusk",
    arrangement: "SATB choir",
    slug: "autumn-dusk-23576052",
  },
  {
    title: "The Battle of Blenheim",
    arrangement: "SATB choir",
    slug: "the-battle-of-blenheim-23576023",
  },
];

export const film = {
  title: "Crossing Over",
  year: "2022",
  role: "Sound supervisor and designer",
  genre: "Horror / science fiction",
  imdb: "https://www.imdb.com/title/tt17321224/",
  youtube: "https://www.youtube.com/watch?v=gkw653LYWP0",
} as const;

export function scoreHref(slug: string): string {
  return `https://www.sheetmusicplus.com/en/product/${slug}.html`;
}
