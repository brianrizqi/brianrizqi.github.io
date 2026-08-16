"use client";

import { profile } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="shell">
        <Reveal>
          <p className="index-mark">08 — Contact</p>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="display mt-10 text-[clamp(2.6rem,10vw,8.5rem)] uppercase">
            Mari
            <br />
            berkolaborasi<span className="text-acc">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-y-10 border-t border-line pt-10 md:grid-cols-12 md:gap-x-10">
          <Reveal delay={110} className="md:col-span-5">
            <p className="max-w-md text-[17px] leading-[1.65]">
              Punya proyek menarik? Saya siap membantu mewujudkannya menjadi
              produk digital yang luar biasa.
            </p>
          </Reveal>

          <Reveal delay={170} className="md:col-span-7 md:rule-l md:pl-10">
            {/* Email as the primary, oversized call to action */}
            <a
              href={`mailto:${profile.email}`}
              className="display block break-all text-[clamp(1.5rem,4.5vw,3.2rem)] transition-colors duration-300 hover:text-acc"
            >
              {profile.email}
            </a>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold uppercase tracking-[0.14em]">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rule-link"
              >
                LinkedIn ↗
              </a>
              <a href={`mailto:${profile.email}`} className="rule-link">
                Kirim Email ↗
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
          <span>
            © {new Date().getFullYear()} {profile.shortName}
          </span>
          <span>Jember · Surabaya, ID</span>
        </div>
      </div>
    </section>
  );
}
