import { createFileRoute, Link } from "@tanstack/react-router";

import { caseStudies } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/")({
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
        Most of my work is client work, so some details stay under wraps. Open a case for the full
        story — the brief, the build and what I'd do differently.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((project) => (
          <Link
            key={project.slug}
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/60 bg-cream/55 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                {project.tag}
              </p>
              <h2 className="mt-2 font-display text-2xl">{project.title}</h2>
              <p className="mt-1 text-xs font-semibold text-ink/45">{project.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{project.summary}</p>
              <span className="mt-5 text-sm font-semibold text-brand">
                Read the case
                <span className="ml-1 inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
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
