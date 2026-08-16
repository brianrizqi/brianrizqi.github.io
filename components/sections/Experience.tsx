"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            <span className="grad-text">5+</span> TAHUN
            <br className="sm:hidden" /> PENGALAMAN
            <em className="grad-text not-italic">.</em>
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            24 Proyek &nbsp;·&nbsp; 15 Klien &nbsp;·&nbsp; 3 Kota
          </p>
        </Reveal>

        <div className="relative mt-16 pl-8 sm:pl-0">
          {/* Spine: left on mobile, centered from sm up */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-transparent via-line2 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          {/* Negative margin pulls alternating cards up so the spine reads as one flow */}
          <div className="flex flex-col gap-8 sm:gap-0 sm:[&>*:not(:first-child)]:-mt-6">
            {experience.map((item, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={`${item.title}-${item.year}`}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.7,
                    delay: (i % 2) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative sm:w-1/2 ${
                    right ? "sm:ml-auto sm:pl-10" : "sm:mr-auto sm:pr-10"
                  }`}
                >
                  {/* Node — sits on the spine and links to the card with a hairline */}
                  <span
                    aria-hidden
                    className={`absolute top-7 hidden h-px w-10 bg-line2 sm:block ${
                      right ? "left-0" : "right-0"
                    }`}
                  />
                  <span
                    className={`absolute top-[22px] z-10 h-3.5 w-3.5 rounded-full border-2 border-bg bg-gradient-to-br from-acc to-acc2 -left-[27px] sm:left-auto ${
                      right ? "sm:-left-[7px]" : "sm:-right-[7px]"
                    }`}
                  />

                  <article
                    data-cursor-hover
                    className="glass card-hover rounded-2xl p-5"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-acc">
                        {item.year}
                      </span>
                      {item.tag && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            item.tag === "Now"
                              ? "bg-emerald-500/15 text-emerald-500"
                              : "bg-acc/15 text-acc"
                          }`}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">{item.org}</p>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
