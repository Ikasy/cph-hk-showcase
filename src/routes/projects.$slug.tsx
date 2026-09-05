import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { caseStudies, getCaseStudy } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case not found · Julie Nielsen" }, { name: "robots", content: "noindex" }],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} · Case study`;
    return {
      meta: [
        { title },
        { name: "description", content: study.summary.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: study.summary.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CaseNotFound,
  component: CaseStudyPage,
});

function CaseNotFound() {
  return (
    <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-4xl">That case doesn't exist</h1>
      <p className="mt-3 text-ink/65">It may have been renamed or is still under wraps.</p>
      <Link
        to="/projects"
        className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream"
      >
        Back to projects
      </Link>
    </div>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const others = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <article className="relative z-10 mx-auto max-w-5xl px-6 py-10">
      <Link to="/projects" className="anim-fade anim-d1 text-sm font-semibold text-ink/55 transition hover:text-ink">
        ← All projects
      </Link>

      <p className="anim-fade anim-d1 mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
        {study.tag}
      </p>
      <h1 className="anim-fade anim-d2 mt-4 max-w-3xl font-display text-5xl leading-tight tracking-tight">
        {study.title}
      </h1>
      <p className="anim-fade anim-d3 mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
        {study.summary}
      </p>
      {study.link ? (
        <a
          href={study.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="anim-fade anim-d3 mt-6 inline-flex rounded-full border border-ink/15 bg-cream/60 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-cream"
        >
          Visit {study.link.label} ↗
        </a>
      ) : null}

      <div className="anim-fade anim-d3 mt-10 aspect-[16/8] w-full overflow-hidden rounded-[2rem] border border-white/60 bg-mist shadow-warm-lg">
        <img
          src={study.image}
          alt={study.alt}
          width={1440}
          height={720}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_18rem]">
        <div className="space-y-10">
          {study.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-3xl tracking-tight">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-[1.02rem] leading-relaxed text-ink/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-[1.75rem] border border-white/60 bg-cream/55 p-7 backdrop-blur-sm">
            <h2 className="font-display text-2xl tracking-tight">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {study.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-amber to-rose" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-[1.5rem] border border-white/60 bg-cream/55 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">At a glance</p>
            <dl className="mt-4 space-y-3">
              {study.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-wide text-ink/45">{fact.label}</dt>
                  <dd className="text-sm font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[1.5rem] border border-white/60 bg-cream/55 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-ink/10 bg-mist/70 px-3 py-1 text-xs font-medium text-ink/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-ink p-6 text-cream">
            <p className="font-display text-xl">Curious about the code?</p>
            <p className="mt-2 text-sm text-cream/70">
              Happy to walk through decisions and samples in a conversation.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>
        </aside>
      </div>

      <div className="mt-16 border-t border-ink/10 pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Next case</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {others.map((other) => (
            <Link
              key={other.slug}
              to="/projects/$slug"
              params={{ slug: other.slug }}
              className="group rounded-[1.5rem] border border-white/60 bg-cream/55 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                {other.tag}
              </p>
              <h3 className="mt-2 font-display text-xl">{other.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-ink/60">{other.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
