import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import { profile } from "@/lib/site-data";
import cvAsset from "@/assets/cv.pdf.asset.json";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please use a valid email address").max(255),
  company: z.string().trim().max(120, "Company name is too long").optional(),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more — at least 10 characters")
    .max(2000, "Message is too long"),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Julie Nielsen · Hiring in Hong Kong" },
      {
        name: "description",
        content:
          "Send Julie Nielsen a message about C#, .NET or Umbraco roles in Hong Kong, or reach out by email, phone or LinkedIn.",
      },
      { property: "og:title", content: "Contact Julie Nielsen" },
      {
        property: "og:description",
        content: "Get in touch about C#, .NET and Umbraco roles in Hong Kong.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");

    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      message: parsed.data.message,
    });

    if (error) {
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("sent");
  }

  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="anim-fade anim-d1 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Let's build something
          </p>
          <h1 className="anim-fade anim-d2 mt-4 font-display text-5xl leading-tight tracking-tight">
            Ready to bring Danish craft to <span className="italic text-shimmer">Hong Kong</span>.
          </h1>
          <p className="anim-fade anim-d3 mt-6 text-lg leading-relaxed text-ink/70">
            Whether you're hiring for an Umbraco platform or a .NET team, I'd love to hear about it.
            I'm currently exploring full-time roles in Hong Kong.
          </p>

          <div className="anim-fade anim-d4 mt-8 space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between rounded-2xl border border-white/60 bg-cream/55 px-5 py-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="text-ink/50">Email</span>
              <span className="font-semibold">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-between rounded-2xl border border-white/60 bg-cream/55 px-5 py-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="text-ink/50">Phone</span>
              <span className="font-semibold">{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/60 bg-cream/55 px-5 py-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="text-ink/50">LinkedIn</span>
              <span className="font-semibold">/julielnielsen</span>
            </a>
            <a
              href={cvAsset.url}
              download="Julie-Nielsen-CV.pdf"
              className="flex items-center justify-between rounded-2xl border border-white/60 bg-cream/55 px-5 py-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="text-ink/50">Résumé</span>
              <span className="font-semibold">Download PDF</span>
            </a>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.025 75) 0%, oklch(0.94 0.045 60) 55%, oklch(0.92 0.05 35))",
          }}
        >
          <div className="anim-float pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/40" />
          <form onSubmit={handleSubmit} noValidate className="relative space-y-4">
            <h2 className="font-display text-3xl tracking-tight">Send me a message</h2>

            <Field label="Your name" name="name" error={errors["name"]}>
              <input
                id="name"
                name="name"
                type="text"
                maxLength={100}
                required
                className="w-full rounded-2xl border border-ink/10 bg-cream/70 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
              />
            </Field>

            <Field label="Email" name="email" error={errors["email"]}>
              <input
                id="email"
                name="email"
                type="email"
                maxLength={255}
                required
                className="w-full rounded-2xl border border-ink/10 bg-cream/70 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
              />
            </Field>

            <Field label="Company (optional)" name="company" error={errors["company"]}>
              <input
                id="company"
                name="company"
                type="text"
                maxLength={120}
                className="w-full rounded-2xl border border-ink/10 bg-cream/70 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
              />
            </Field>

            <Field label="Message" name="message" error={errors["message"]}>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={2000}
                required
                className="w-full resize-y rounded-2xl border border-ink/10 bg-cream/70 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
              />
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream shadow-xl transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <p aria-live="polite" className="min-h-5 text-sm">
              {status === "sent" && (
                <span className="font-semibold text-brand">
                  Thank you — your message is on its way. I'll reply to your email soon.
                </span>
              )}
              {status === "error" && (
                <span className="font-semibold text-destructive">
                  Something went wrong. Please try again or email {profile.email}.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink/70">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
