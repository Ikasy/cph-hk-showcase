import projectFurniture from "@/assets/project-furniture.jpg";
import projectBanking from "@/assets/project-banking.jpg";
import projectEditorial from "@/assets/project-editorial.jpg";

export type CaseStudy = {
  slug: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  link?: { label: string; href: string };
  facts: { label: string; value: string }[];
  stack: string[];
  sections: { heading: string; body: string[] }[];
  highlights: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "danmarks-jaegerforbund",
    image: projectEditorial,
    alt: "Content-rich association website with large typography",
    tag: "Association · Umbraco",
    title: "Danmarks Jægerforbund",
    role: "Developer at Diviso ApS",
    period: "2024 — present",
    summary:
      "The Danish Hunters' Association runs one of the largest membership sites in Denmark: news, courses, a calendar, hunting-season rules, a member magazine and a member portal — all edited by a distributed team of non-technical editors.",
    link: { label: "jaegerforbundet.dk", href: "https://www.jaegerforbundet.dk" },
    facts: [
      { label: "Client", value: "Danmarks Jægerforbund" },
      { label: "My role", value: "Full-stack development" },
      { label: "Team", value: "Diviso ApS" },
      { label: "Timeframe", value: "2024 — present" },
    ],
    stack: ["Umbraco CMS", "C#", "ASP.NET", "SQL Server", "REST APIs", "Razor", "JavaScript", "CSS"],
    sections: [
      {
        heading: "The brief",
        body: [
          "A membership organisation with tens of thousands of members needs a site that behaves like a publication and a service desk at the same time. Visitors arrive for very different reasons: a first-time hunter looking for a course, an experienced member checking this season's hunting periods, a journalist after a press statement, a member renewing a subscription.",
          "The editorial team is spread across the organisation, so every content type has to be safe to edit without a developer nearby. My work sits in that space — making the content model expressive enough for the editors while keeping the front-end fast and coherent.",
        ],
      },
      {
        heading: "How it is built",
        body: [
          "The site runs on Umbraco CMS with a C#/ASP.NET backend. Pages are composed from a library of reusable blocks — hero, link cards, article lists, calendar feeds, rich text, media galleries — so editors assemble pages instead of requesting layouts.",
          "Structured data such as courses, events and hunting seasons lives in its own document types and is queried through SQL Server, then surfaced both on public pages and through REST endpoints used by other parts of the platform, including the member portal.",
        ],
      },
      {
        heading: "What I worked on",
        body: [
          "Building and extending page components in Razor and C#, wiring them to Umbraco document types, and shaping the back-office so each field has an obvious purpose for the editor filling it in.",
          "Integration work against internal REST APIs — membership data, calendar entries and media — including caching and graceful fallbacks when an upstream service is slow or unavailable.",
          "Ongoing maintenance: performance passes on image delivery, accessibility fixes, and bug work reported straight from the editorial team.",
        ],
      },
      {
        heading: "What I took from it",
        body: [
          "Large content sites live or die on their editing experience. The most valuable changes I made were rarely visible on the front-end — they were the ones that removed a support ticket permanently.",
        ],
      },
    ],
    highlights: [
      "Reusable Umbraco block library for editor-composed pages",
      "REST integrations for membership, calendar and media data",
      "Performance and accessibility work on a high-traffic public site",
    ],
  },
  {
    slug: "diviso-client-platforms",
    image: projectFurniture,
    alt: "Business website design shown on a laptop screen",
    tag: "Business sites · C# / ASP.NET",
    title: "Client platforms at Diviso",
    role: "Developer at Diviso ApS",
    period: "2024 — present",
    summary:
      "Building and maintaining websites and web applications for around 20 clients — new features, API integrations and ongoing improvements across very different industries.",
    facts: [
      { label: "Clients", value: "~20" },
      { label: "My role", value: "Full-stack development" },
      { label: "Team", value: "Diviso ApS" },
      { label: "Timeframe", value: "2024 — present" },
    ],
    stack: ["C#", "ASP.NET", "Umbraco CMS", "SQL Server", "REST APIs", "JavaScript", "HTML/CSS"],
    sections: [
      {
        heading: "The work",
        body: [
          "Agency work means switching context often: a feature request on one codebase in the morning, a production bug on another after lunch. I work across the stack — data model, backend logic, front-end markup and styling.",
          "Most projects are Umbraco-based, with custom C# services behind them and SQL Server for anything structured. Where a client already has an ERP, booking system or CRM, my job is usually to talk to it over REST and present the result as something a visitor understands.",
        ],
      },
      {
        heading: "How I approach a new codebase",
        body: [
          "Read the data model first, then follow one real user journey end to end. That tells me more about a project's conventions than any documentation does.",
          "Small, reviewable changes with clear commit messages, and a note back to the client in plain language rather than technical shorthand.",
        ],
      },
    ],
    highlights: [
      "Feature work and maintenance across ~20 live client sites",
      "REST integrations against third-party business systems",
      "Design background used to catch UI issues before the client does",
    ],
  },
  {
    slug: "multimedia-design-portfolio",
    image: projectBanking,
    alt: "Clean dashboard interface with cards and data",
    tag: "Education · React",
    title: "Multimedia design portfolio work",
    role: "Erhvervsakademi Aarhus",
    period: "2023 — 2025",
    summary:
      "Course and exam projects covering UX/UI design, visual communication and front-end builds — the foundation the development work is standing on.",
    facts: [
      { label: "School", value: "Erhvervsakademi Aarhus" },
      { label: "Programme", value: "Multimediadesigner" },
      { label: "Focus", value: "UX/UI and front-end" },
      { label: "Timeframe", value: "2023 — 2025" },
    ],
    stack: ["React", "JavaScript", "HTML", "CSS", "WordPress", "Figma", "UX research"],
    sections: [
      {
        heading: "What the programme covered",
        body: [
          "Two years split between design and code: user research, wireframing, visual communication and prototyping on one side; HTML, CSS, JavaScript, React and WordPress on the other.",
          "Projects were run with real briefs and presentations, so the deliverable was always both a working build and an argument for why it looked the way it did.",
        ],
      },
      {
        heading: "Why it still matters",
        body: [
          "It is the reason I can take an unfinished design and finish it myself instead of waiting, and the reason I care about how a CMS feels to the person typing into it.",
        ],
      },
    ],
    highlights: [
      "UX research and interface design through to working builds",
      "Front-end projects in React, JavaScript and WordPress",
      "Final exam project completed alongside work at Diviso",
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
