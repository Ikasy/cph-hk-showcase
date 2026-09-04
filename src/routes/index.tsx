import { createFileRoute, Link } from "@tanstack/react-router";

import portrait from "@/assets/portrait.jpg";
import projectFurniture from "@/assets/project-furniture.jpg";
import projectBanking from "@/assets/project-banking.jpg";
import projectEditorial from "@/assets/project-editorial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julie Nielsen · C# & Umbraco Developer" },
      { name: "description", content: "Danish C# and Umbraco developer portfolio. Building calm, considered content platforms — open to roles in Hong Kong." },
      { property: "og:title", content: "Julie Nielsen · C# & Umbraco Developer" },
      { property: "og:description", content: "Danish C# and Umbraco developer portfolio. Building calm, considered content platforms — open to roles in Hong Kong." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-ink">
      {/* Ambient sunset glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 ambient-glow" />

      <Header />

      <main>
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="anim-fade anim-d1 relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
      <Link to="/" className="flex items-center gap-3">
        <div className="anim-float grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-amber to-rose shadow-warm">
          <span className="font-display text-lg font-semibold text-cream">J</span>
        </div>
        <div className="leading-tight">
          <p className="text-sm font-bold tracking-tight">Julie Nielsen</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/50">C# · Umbraco</p>
        </div>
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
        <a href="#about" className="transition hover:text-ink">About</a>
        <a href="#stack" className="transition hover:text-ink">Stack</a>
        <a href="#projects" className="transition hover:text-ink">Projects</a>
        <a
          href="#contact"
          className="rounded-full bg-ink px-5 py-2.5 text-cream shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-8 pt-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <div className="anim-fade anim-d1 mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 glass px-4 py-2 shadow-[0_8px_24px_-14px_rgba(217,136,90,0.4)]">
          <span className="size-2 animate-pulse rounded-full bg-rose" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/70">
            Open to relocation · Copenhagen → Hong Kong
          </span>
        </div>

        <h1 className="anim-fade anim-d2 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          I build calm, <span className="italic text-shimmer">considered</span> content platforms.
        </h1>

        <p className="anim-fade anim-d3 mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          A Danish .NET engineer with eight years deep in Umbraco and C#. I turn complex content into fast, elegant experiences — and I'm ready to bring that craft to Hong Kong's global teams.
        </p>

        <div className="anim-fade anim-d4 mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/15 bg-cream/40 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition hover:bg-cream/70"
          >
            Get in touch
          </a>
        </div>

        <div className="anim-fade anim-d4 mt-10 flex gap-8 border-t border-ink/10 pt-6">
          <div>
            <p className="font-display text-3xl">8+</p>
            <p className="text-xs uppercase tracking-wider text-ink/50">Years .NET</p>
          </div>
          <div>
            <p className="font-display text-3xl">40+</p>
            <p className="text-xs uppercase tracking-wider text-ink/50">Sites shipped</p>
          </div>
          <div>
            <p className="font-display text-3xl">HK</p>
            <p className="text-xs uppercase tracking-wider text-ink/50">Destination</p>
          </div>
        </div>
      </div>

      {/* Portrait */}
      <div className="anim-fade anim-d3 relative hidden lg:block">
        <div className="anim-float absolute -left-6 -top-6 size-24 rounded-3xl bg-gradient-to-br from-amber/50 to-rose/50 backdrop-blur-sm" />
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-mist shadow-warm-lg">
          <img
            src={portrait}
            alt="Julie Nielsen, a Danish C# and Umbraco developer, smiling in warm natural light"
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="anim-float2 absolute -bottom-5 -right-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-3 backdrop-blur-sm shadow-[0_20px_40px_-24px_rgba(58,43,40,0.55)]">
          <p className="text-xs font-semibold">Based in</p>
          <p className="font-display text-lg">Copenhagen, DK</p>
        </div>
      </div>
    </section>
  );
}

function StackSection() {
  const stack = [
    {
      icon: "C#",
      title: "C# / .NET 8",
      description: "Type-safe backends, clean domain models and performant APIs that scale.",
      gradient: "from-brand to-rose",
    },
    {
      icon: "U",
      title: "Umbraco 13",
      description: "Blocks, Examine, and headless setups that editors actually love using.",
      gradient: "from-amber to-brand",
    },
    {
      icon: "TS",
      title: "React + TypeScript",
      description: "Accessible front-ends and rich CMS interfaces built with React and TypeScript.",
      gradient: "from-rose to-brand",
    },
    {
      icon: "☁",
      title: "Azure + CI/CD",
      description: "Containerised deploys, managed SQL, and pipelines that ship with confidence.",
      gradient: "from-amber to-rose",
    },
  ];

  return (
    <section id="stack" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-4xl tracking-tight">The toolkit</h2>
        <p className="hidden text-sm text-ink/50 sm:block">Daily drivers, refined by craft</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((item) => (
          <div
            key={item.title}
            className="group rounded-3xl border border-white/60 bg-cream/55 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
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
  );
}

function ProjectsSection() {
  const projects = [
    {
      image: projectFurniture,
      alt: "Nordic furniture retail website shown on a laptop screen",
      tag: "Retail · Umbraco 13",
      title: "Fjord & Co.",
      description: "A headless commerce platform with 2,000+ product blocks and a 1.2s first paint.",
    },
    {
      image: projectBanking,
      alt: "Modern banking dashboard interface with clean cards",
      tag: "Fintech · .NET 8",
      title: "Harbour Bank",
      description: "A customer portal handling 40k daily sessions with real-time account insights.",
    },
    {
      image: projectEditorial,
      alt: "Editorial news magazine website with large typography",
      tag: "Media · Blocks",
      title: "Meridian Press",
      description: "A multi-language editorial CMS powering four languages from a single source.",
    },
  ];

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-4xl tracking-tight">Selected work</h2>
        <p className="hidden text-sm text-ink/50 sm:block">A few platforms I'm proud of</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
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
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{project.tag}</p>
              <h3 className="mt-2 font-display text-2xl">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-8">
      <div
        className="relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center sm:px-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.025 75) 0%, oklch(0.94 0.045 60) 55%, oklch(0.92 0.05 35))",
        }}
      >
        <div className="anim-float pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/40" />
        <div className="anim-float2 pointer-events-none absolute -bottom-20 -left-16 size-72 rounded-full bg-rose/35" />

        <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-ink/60">Let's build something</p>
        <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Ready to bring Danish craft to Hong Kong.
        </h2>
        <p className="relative mx-auto mt-5 max-w-lg text-ink/70">
          Whether you're hiring for a Umbraco platform or a .NET core team, I'd love to hear about it. Currently exploring full-time roles in Hong Kong.
        </p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:julie@nielsendev.dk"
            className="rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            julie@nielsendev.dk
          </a>
          <a
            href="https://linkedin.com/in/julienielsendev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/20 bg-cream/50 px-8 py-4 text-sm font-semibold text-ink backdrop-blur-sm transition hover:bg-cream/80"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 px-2 text-xs text-ink/50 sm:flex-row">
        <p>© 2024 Julie Nielsen · Copenhagen</p>
        <p>Made with C#, coffee & a view of Øresund</p>
      </footer>
    </section>
  );
}
