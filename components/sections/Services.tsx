"use client";

import { services } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { IconArrowRight } from "../Icons";

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-tight tracking-tight">
            Apa yang bisa saya{" "}
            <em className="grad-text not-italic">Bantu.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((svc, i) => (
            <Reveal key={svc.num} delay={90 + i * 80}>
              <article
                data-cursor-hover
                className="glass card-hover group relative h-full overflow-hidden rounded-3xl p-8"
              >
                {/* Oversized ghost number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-7 font-display text-[7rem] font-bold leading-none text-txt opacity-[0.045] transition-all duration-700 ease-smooth group-hover:opacity-[0.09]"
                >
                  {svc.num}
                </span>

                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-acc/10 text-2xl transition-transform duration-500 ease-smooth group-hover:scale-110">
                    {svc.icon}
                  </span>

                  <h3 className="mt-6 font-display text-xl font-bold leading-snug">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {svc.desc}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-acc opacity-0 transition-all duration-500 ease-smooth group-hover:opacity-100">
                    Diskusikan
                    <IconArrowRight className="h-4 w-4" />
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
