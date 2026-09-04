import { createFileRoute, Link } from "@tanstack/react-router";

import { profile, experience, education, languages } from "@/lib/site-data";
import cvAsset from "@/assets/cv.pdf.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Julie Nielsen · Danish Developer Moving to Hong Kong" },
      {
        name: "description",
        content:
          "Julie Nielsen's background: multimedia design in Aarhus, full-stack development at Diviso ApS, and a move toward Hong Kong.",
      },
      { property: "og:title", content: "About Julie Nielsen" },
      {
        property: "og:description",
        content:
          "Multimedia design in Aarhus, full-stack C# development at Diviso ApS, and a move toward Hong Kong.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl px-6 py-10">
      <p className="anim-fade anim-d1 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
        About me
      </p>
      <h1 className="anim-fade anim-d2 mt-4 font-display text-5xl leading-tight tracking-tight">
        A designer who learned to love <span className="italic text-shimmer">C#</span>.
      </h1>
      <p className="anim-fade anim-d3 mt-6 text-lg leading-relaxed text-ink/70">{profile.summary}</p>
      <p className="anim-fade anim-d3 mt-4 leading-relaxed text-ink/65">
        I started out in multimedia design — UX, visual communication, front-end — and found my
        footing on the backend during my internship at Diviso ApS. Much of my C# and SQL knowledge
        is self-taught through real client work, and I keep building on it through courses and
        professional training. English and Danish are both native to me, which is a large part of
        why an international city like {profile.target} feels like the natural next step.
      </p>

      <div className="anim-fade anim-d4 mt-8 flex flex-wrap gap-4">
        <a
          href={cvAsset.url}
          download="Julie-Nielsen-CV.pdf"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-xl transition hover:-translate-y-0.5"
        >
          Download résumé (PDF)
        </a>
        <Link
          to="/contact"
          className="rounded-full border border-ink/15 bg-cream/40 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition hover:bg-cream/70"
        >
          Get in touch
        </Link>
      </div>

      <h2 className="mt-16 font-display text-3xl tracking-tight">Experience</h2>
      <div className="mt-6 space-y-4">
        {experience.map((job) => (
          <article
            key={`${job.role}-${job.period}`}
            className="rounded-3xl border border-white/60 bg-cream/55 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl">{job.role}</h3>
              <p className="text-sm text-ink/50">{job.period}</p>
            </div>
            <p className="mt-1 text-sm font-semibold text-brand">
              {job.company} · {job.type}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{job.description}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-14 font-display text-3xl tracking-tight">Education</h2>
      <div className="mt-6 space-y-4">
        {education.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/60 bg-cream/55 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="text-sm text-ink/50">{item.period}</p>
            </div>
            <p className="mt-1 text-sm font-semibold text-brand">{item.school}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.description}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-14 font-display text-3xl tracking-tight">Languages</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {languages.map((lang) => (
          <span
            key={lang.name}
            className="rounded-full border border-ink/10 bg-cream/60 px-5 py-2.5 text-sm font-medium backdrop-blur-sm"
          >
            {lang.name} — <span className="text-ink/55">{lang.level}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
