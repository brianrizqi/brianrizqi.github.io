"use client";

import { education } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="shell">
        <Reveal>
          <p className="index-mark">03 — Education</p>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="display mt-10 text-[clamp(2.3rem,7vw,5.5rem)]">
            Academic journey<span className="text-acc">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 border-b border-line">
          {education.map((ed, i) => (
            <Reveal key={ed.badge} delay={80 + i * 70}>
              <article className="row-item group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 px-2 py-7 md:gap-x-8">
                <span className="col-span-2 text-[11px] tabular-nums text-muted transition-colors duration-300 group-hover:text-bg md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="display col-span-10 text-[clamp(1.4rem,3.4vw,2.4rem)] md:col-span-5">
                  {ed.school}
                </h3>

                <p className="col-span-6 col-start-3 text-sm text-muted transition-colors duration-300 group-hover:text-bg md:col-span-3 md:col-start-auto">
                  {ed.major}
                </p>

                <div className="col-span-4 flex flex-col items-end gap-1 md:col-span-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                    {ed.badge}
                  </span>
                  <span className="text-[11px] tabular-nums text-muted transition-colors duration-300 group-hover:text-bg">
                    {ed.year}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
