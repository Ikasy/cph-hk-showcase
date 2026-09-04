import { createFileRoute, Link } from "@tanstack/react-router";

import { stack } from "@/lib/site-data";

const tools = [
  "C#",
  ".NET",
  "ASP.NET",
  "REST APIs",
  "Microservices",
  "SQL Server",
  "Umbraco CMS",
  "WordPress",
  "React",
  "JavaScript",
  "HTML & CSS",
  "UX/UI design",
  "SEO",
  "Git",
];

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Tech Stack · C#, ASP.NET, SQL Server & Umbraco" },
      {
        name: "description",
        content:
          "The tools Julie Nielsen works with daily: C#, .NET, ASP.NET, REST APIs, SQL Server, Umbraco CMS, React and UX/UI design.",
      },
      { property: "og:title", content: "Tech Stack · Julie Nielsen" },
      {
        property: "og:description",
        content: "C#, .NET, ASP.NET, SQL Server, Umbraco, React and UX/UI design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Stack,
});

function Stack() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 py-10">
      <p className="anim-fade anim-d1 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
        The toolkit
      </p>
      <h1 className="anim-fade anim-d2 mt-4 max-w-2xl font-display text-5xl leading-tight tracking-tight">
        Backend depth, with a <span className="italic text-shimmer">design</span> eye.
      </h1>
      <p className="anim-fade anim-d3 mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
        My foundation is object-oriented programming in C# and data work in SQL Server, wrapped in
        the UX and visual training from my multimedia design degree.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/60 bg-cream/55 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div
              className={`mb-4 grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${item.gradient}`}
            >
              <span className="font-display text-lg font-semibold text-cream">{item.icon}</span>
            </div>
            <h2 className="font-display text-xl">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-3xl tracking-tight">Everything on the list</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-ink/10 bg-cream/60 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-14">
        <Link
          to="/projects"
          className="inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-xl transition hover:-translate-y-0.5"
        >
          See it applied →
        </Link>
      </div>
    </div>
  );
}
