import { createFileRoute, Link } from "@tanstack/react-router";

import { profile, stats, stack } from "@/lib/site-data";
import cvAsset from "@/assets/cv.pdf.asset.json";
import projectFurniture from "@/assets/project-furniture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julie Nielsen · C# & Umbraco Developer in Denmark" },
      {
        name: "description",
        content:
          "Danish full-stack developer working in C#, ASP.NET and Umbraco. 4+ years, ~20 clients — now looking for a developer role in Hong Kong.",
      },
      { property: "og:title", content: "Julie Nielsen · C# & Umbraco Developer" },
      {
        property: "og:description",
        content:
          "Danish full-stack developer in C#, ASP.NET and Umbraco, open to roles in Hong Kong.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-8 pt-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="anim-fade anim-d1 mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 glass px-4 py-2 shadow-[0_8px_24px_-14px_rgba(217,136,90,0.4)]">
            <span className="size-2 animate-pulse rounded-full bg-rose" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/70">
              Open to relocation · Aarhus → Hong Kong
            </span>
          </div>

          <h1 className="anim-fade anim-d2 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            I build calm, <span className="italic text-shimmer">considered</span> web platforms.
          </h1>

          <p className="anim-fade anim-d3 mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            {profile.summary}
          </p>

          <div className="anim-fade anim-d4 mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              View my work
            </Link>
            <a
              href={cvAsset.url}
              download="Julie-Nielsen-CV.pdf"
              className="rounded-full border border-ink/15 bg-cream/40 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition hover:bg-cream/70"
            >
              Download résumé (PDF)
            </a>
          </div>

          <div className="anim-fade anim-d4 mt-10 flex gap-8 border-t border-ink/10 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl">{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-ink/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="anim-fade anim-d3 relative hidden lg:block">
          <div className="anim-float absolute -left-6 -top-6 size-24 rounded-3xl bg-gradient-to-br from-amber/50 to-rose/50 backdrop-blur-sm" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-cream/70 p-8 shadow-warm-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Currently
            </p>
            <p className="mt-3 font-display text-3xl leading-tight">Web Developer at Diviso ApS</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Building and maintaining client platforms in C#, ASP.NET and Umbraco since my
              internship in 2024.
            </p>
            <div className="mt-6 space-y-2 border-t border-ink/10 pt-5 text-sm">
              <p className="flex justify-between">
                <span className="text-ink/50">Based in</span>
                <span className="font-semibold">{profile.location}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-ink/50">Languages</span>
                <span className="font-semibold">English & Danish, native</span>
              </p>
              <p className="flex justify-between">
                <span className="text-ink/50">Looking for</span>
                <span className="font-semibold">Full-time in {profile.target}</span>
              </p>
            </div>
          </div>
          <div className="anim-float2 absolute -bottom-5 -right-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-3 shadow-[0_20px_40px_-24px_rgba(58,43,40,0.55)] backdrop-blur-sm">
            <p className="text-xs font-semibold">Available from</p>
            <p className="font-display text-lg">On agreement</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-4xl tracking-tight">What I work with</h2>
          <Link to="/stack" className="hidden text-sm text-ink/55 transition hover:text-ink sm:block">
            See the full toolkit →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.slice(0, 4).map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/60 bg-cream/55 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div
                className={`mb-4 grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${item.gradient}`}
              >
                <span className="font-display text-lg font-semibold text-cream">{item.icon}</span>
              </div>
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-8">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/60 bg-cream/55 backdrop-blur-sm lg:grid-cols-2">
          <img
            src={projectFurniture}
            alt="A client website design shown on a laptop screen"
            width={1024}
            height={640}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight">
              Around 20 clients, from hunting associations to local business platforms.
            </h2>
            <p className="mt-4 text-ink/65">
              Most of my work lives behind client logins and company sites. Here's a look at the
              kinds of projects I've delivered and the part I played in them.
            </p>
            <Link
              to="/projects"
              className="mt-7 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-xl transition hover:-translate-y-0.5"
            >
              Browse projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
