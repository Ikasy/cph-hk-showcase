import { Link } from "@tanstack/react-router";

import { profile } from "@/lib/site-data";
import cvAsset from "@/assets/cv.pdf.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto mt-8 max-w-6xl px-6 pb-12">
      <div className="flex flex-col gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl">{profile.shortName}</p>
          <p className="mt-1 text-sm text-ink/60">
            {profile.role} · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <a href={`mailto:${profile.email}`} className="text-ink/70 transition hover:text-ink">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/70 transition hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={cvAsset.url}
            download="Julie-Nielsen-CV.pdf"
            className="rounded-full border border-ink/15 bg-cream/50 px-5 py-2 text-ink backdrop-blur-sm transition hover:bg-cream/80"
          >
            Download résumé
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.shortName} · Aarhus, Denmark</p>
        <p>
          <Link to="/contact" className="transition hover:text-ink">
            Open to roles in Hong Kong
          </Link>
        </p>
      </div>
    </footer>
  );
}
