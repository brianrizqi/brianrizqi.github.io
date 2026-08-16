"use client";

import { skills } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="shell">
        <Reveal>
          <p className="index-mark">05 — Skills</p>
        </Reveal>

        <div className="mt-10 grid gap-y-8 md:grid-cols-12 md:gap-x-10">
          <Reveal delay={60} className="md:col-span-7">
            <h2 className="display text-[clamp(2.3rem,6.5vw,5rem)]">
              Skills proven
              <br />
              in the field<span className="text-acc">.</span>
            </h2>
          </Reveal>
          <Reveal delay={130} className="md:col-span-5 md:rule-l md:pl-10">
            <p className="text-[17px] leading-[1.65] text-muted">
              Every skill here was sharpened on real projects over many years —
              not just studied in theory.
            </p>
          </Reveal>
        </div>

        {/* Two-column index of disciplines */}
        <div className="mt-16 grid border-t border-line md:grid-cols-2 md:gap-x-10">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={60 + i * 50}>
              <div className="group flex items-baseline justify-between border-b border-line py-6 transition-colors duration-300 hover:text-acc">
                <span className="flex items-baseline gap-5">
                  <span className="text-[11px] tabular-nums text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(1.1rem,2.6vw,1.5rem)] font-medium">
                    {skill.name}
                  </span>
                </span>
                <span className="translate-x-0 text-lg opacity-0 transition-all duration-500 ease-smooth group-hover:translate-x-0 group-hover:opacity-100">
                  ↗
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
