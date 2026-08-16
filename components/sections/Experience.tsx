"use client";

import { experience } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="shell">
        <Reveal>
          <p className="index-mark">04 — Experience</p>
        </Reveal>

        <div className="mt-10 grid gap-y-6 md:grid-cols-12 md:items-end md:gap-x-10">
          <Reveal delay={60} className="md:col-span-8">
            <h2 className="display text-[clamp(2.3rem,7vw,5.5rem)] uppercase">
              9+ Years
              <br />
              Of Experience<span className="text-acc">.</span>
            </h2>
          </Reveal>
          <Reveal delay={130} className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
              24 Projects · 15 Clients · 3 Cities
            </p>
          </Reveal>
        </div>

        {/* Column headers */}
        <Reveal delay={160}>
          <div className="mt-16 hidden grid-cols-12 gap-x-8 border-b border-line pb-3 text-[10px] uppercase tracking-[0.2em] text-muted md:grid">
            <span className="col-span-1">No</span>
            <span className="col-span-5">Role</span>
            <span className="col-span-4">Organisation</span>
            <span className="col-span-2 text-right">Year</span>
          </div>
        </Reveal>

        <div className="border-b border-line">
          {experience.map((item, i) => (
            <Reveal key={`${item.title}-${item.year}`} delay={60 + i * 45}>
              <article className="row-item group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 px-2 py-6 md:gap-x-8 md:py-5">
                <span className="col-span-2 text-[11px] tabular-nums text-muted transition-colors duration-300 group-hover:text-bg md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="col-span-10 text-[clamp(1.05rem,2.2vw,1.35rem)] font-medium md:col-span-5">
                  {item.title}
                  {item.tag === "Now" && (
                    <span className="ml-2.5 align-middle text-[10px] font-semibold uppercase tracking-[0.16em] text-acc">
                      ● Now
                    </span>
                  )}
                  {item.tag === "BNSP" && (
                    <span className="ml-2.5 align-middle text-[10px] font-semibold uppercase tracking-[0.16em] text-muted transition-colors duration-300 group-hover:text-bg">
                      BNSP
                    </span>
                  )}
                </h3>

                <p className="col-span-7 col-start-3 text-sm text-muted transition-colors duration-300 group-hover:text-bg md:col-span-4 md:col-start-auto">
                  {item.org}
                </p>

                <span className="col-span-3 text-right text-[11px] tabular-nums text-muted transition-colors duration-300 group-hover:text-bg md:col-span-2">
                  {item.year}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
