import { createFileRoute, Link } from "@tanstack/react-router";

import projectFurniture from "@/assets/project-furniture.jpg";
import projectBanking from "@/assets/project-banking.jpg";
import projectEditorial from "@/assets/project-editorial.jpg";

const projects = [
  {
    image: projectEditorial,
    alt: "Content-rich association website with large typography",
    tag: "Association · Umbraco",
    title: "Danish Hunters' Association",
    role: "Developer at Diviso ApS",
    description:
      "Client work on a large membership organisation's web presence — content structures in Umbraco, backend logic in C# and data handled in SQL Server.",
  },
  {
    image: projectFurniture,
    alt: "Business website design shown on a laptop screen",
    tag: "Business sites · C# / ASP.NET",
    title: "Client platforms at Diviso",
    role: "Developer at Diviso ApS",
    description:
      "Building and maintaining websites and web applications for around 20 clients: new features, integrations against REST APIs, and ongoing improvements.",
  },
  {
    image: projectBanking,
    alt: "Clean dashboard interface with cards and data",
    tag: "Education · React",
    title: "Multimedia design portfolio work",
    role: "Erhvervsakademi Aarhus",
    description:
      "Course and exam projects covering UX/UI design, visual communication and front-end builds in HTML, CSS, JavaScript, React and WordPress.",
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects · Umbraco, ASP.NET & Client Web Platforms" },
      {
        name: "description",
        content:
          "A look at Julie Nielsen's work: Umbraco and ASP.NET client platforms at Diviso ApS, the Danish Hunters' Association, and design school projects.",
      },
      { property: "og:title", content: "Projects · Julie Nielsen" },
      {
        property: "og:description",
        content: "Umbraco and ASP.NET client platforms, plus multimedia design work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 py-10">
      <p className="anim-fade anim-d1 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
        Selected work
      </p>
      <h1 className="anim-fade anim-d2 mt-4 max-w-2xl font-display text-5xl leading-tight tracking-tight">
        Platforms built for <span className="italic text-shimmer">real</span> clients.
      </h1>
      <p className="anim-fade anim-d3 mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
        Most of my work is client work, so some details stay under wraps. Here's the shape of it —
        happy to walk through the code and decisions in a conversation.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[1.75rem] border border-white/60 bg-cream/55 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-mist">
              <img
                src={project.image}
                alt={project.alt}
                width={1024}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                {project.tag}
              </p>
              <h2 className="mt-2 font-display text-2xl">{project.title}</h2>
              <p className="mt-1 text-xs font-semibold text-ink/45">{project.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border border-white/60 bg-cream/55 p-8 text-center backdrop-blur-sm sm:p-12">
        <h2 className="font-display text-3xl tracking-tight">Want the details?</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/65">
          I can talk through architecture, code samples and references on request.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-xl transition hover:-translate-y-0.5"
        >
          Start a conversation
        </Link>
      </div>
    </div>
  );
}
