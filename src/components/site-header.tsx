import { Link } from "@tanstack/react-router";

import { profile } from "@/lib/site-data";

const links = [
  { to: "/about", label: "About" },
  { to: "/stack", label: "Stack" },
  { to: "/projects", label: "Projects" },
] as const;

export function SiteHeader() {
  return (
    <header className="anim-fade anim-d1 relative z-20 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-7">
      <Link to="/" className="flex items-center gap-3">
        <div className="anim-float grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-amber to-rose shadow-warm">
          <span className="font-display text-lg font-semibold text-cream">{profile.initial}</span>
        </div>
        <div className="leading-tight">
          <p className="text-sm font-bold tracking-tight">{profile.shortName}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/50">C# · Umbraco</p>
        </div>
      </Link>

      <nav className="flex items-center gap-5 text-sm font-medium text-ink/70 sm:gap-8">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="transition hover:text-ink"
            activeProps={{ className: "text-ink font-semibold" }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="rounded-full bg-ink px-5 py-2.5 text-cream shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          Let's talk
        </Link>
      </nav>
    </header>
  );
}
