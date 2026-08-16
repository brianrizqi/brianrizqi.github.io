"use client";

import { services } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="shell">
        <Reveal>
          <p className="index-mark">06 — Services</p>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="display mt-10 text-[clamp(2.3rem,7vw,5.5rem)]">
            How I can help<span className="text-acc">.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid border-t border-line sm:grid-cols-2">
          {services.map((svc, i) => (
            <Reveal key={svc.num} delay={70 + i * 70}>
              <article
                className={`group h-full border-b border-line px-1 py-10 transition-colors duration-500 sm:px-8 ${
                  i % 2 === 0 ? "sm:rule-l sm:border-l-0" : "sm:rule-l"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="display text-[clamp(2.6rem,6vw,4.4rem)] text-faint transition-colors duration-500 group-hover:text-acc">
                    {svc.num}
                  </span>
                  <span className="text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    ↗
                  </span>
                </div>

                <h3 className="mt-6 text-[clamp(1.25rem,3vw,1.7rem)] font-medium leading-snug">
                  {svc.title}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                  {svc.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
