"use client";

import { profile } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { IconWhatsapp } from "../Icons";

const socials = [
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: profile.instagram, label: "Instagram" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden border-t border-line"
    >
      {/* Ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acc/12 blur-[150px]"
      />

      <div className="shell relative text-center">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[1.05] tracking-tight text-balance">
            Mari berkolaborasi{" "}
            <em className="grad-text not-italic">bersama.</em>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted text-balance">
            Punya proyek menarik? Saya siap membantu mewujudkannya menjadi produk
            digital yang luar biasa.
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <IconWhatsapp className="h-[17px] w-[17px]" />
              WhatsApp
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              Email
            </a>
          </div>
        </Reveal>

        <Reveal delay={290}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-semibold text-muted">
            {socials.map((s, i) => (
              <span key={s.label} className="flex items-center gap-5">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-line2" />}
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-acc"
                >
                  {s.label}
                </a>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={360}>
          <p className="mt-14 text-xs text-muted">
            © {new Date().getFullYear()} {profile.shortName}. All rights
            reserved.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
