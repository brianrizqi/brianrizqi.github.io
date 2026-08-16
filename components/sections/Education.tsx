"use client";

import { education } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { IconCap } from "../Icons";

export function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-tight tracking-tight">
            Perjalanan <em className="grad-text not-italic">Akademik.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {education.map((ed, i) => (
            <Reveal key={ed.badge} delay={90 + i * 90}>
              <article
                data-cursor-hover
                className={`glass card-hover group h-full rounded-3xl p-7 ${
                  ed.accent ? "ring-1 ring-acc/35" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                    {ed.year}
                  </span>
                  <IconCap className="h-5 w-5 shrink-0 text-muted transition-colors duration-300 group-hover:text-acc" />
                </div>

                <div
                  className={`mt-5 inline-block rounded-full px-3 py-1 text-[11px] font-bold ${
                    ed.accent
                      ? "bg-gradient-to-r from-acc to-acc2 text-white"
                      : "border border-line text-muted"
                  }`}
                >
                  {ed.badge}
                </div>

                <h3 className="mt-4 font-display text-xl font-bold leading-snug">
                  {ed.school}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{ed.major}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
