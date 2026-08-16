"use client";

import { skills } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Skills</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.1] tracking-tight">
              Keahlian yang
              <br />
              <em className="grad-text not-italic">Teruji Nyata.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
              Setiap skill diasah langsung dalam proyek-proyek nyata selama
              bertahun-tahun, bukan sekadar teori.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={80 + i * 55}>
              <div
                data-cursor-hover
                className="glass card-hover group flex h-full items-center gap-3.5 rounded-2xl p-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-acc/10 text-xl transition-transform duration-500 ease-smooth group-hover:scale-110">
                  {skill.icon}
                </span>
                <span className="text-sm font-semibold leading-snug">
                  {skill.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
