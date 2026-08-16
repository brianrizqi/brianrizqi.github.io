"use client";

import { profile, techStack } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="shell">
        <Reveal>
          <p className="index-mark">02 — About</p>
        </Reveal>

        <div className="mt-12 grid gap-y-12 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-7">
            <Reveal delay={60}>
              <h2 className="display text-[clamp(2.3rem,6.5vw,5rem)]">
                I build digital
                <br />
                experiences that
                <br />
                actually matter<span className="text-acc">.</span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:rule-l md:pl-10">
            <Reveal delay={130}>
              <p className="text-[17px] leading-[1.65]">
                Software Engineer with{" "}
                <span className="underline decoration-acc decoration-2 underline-offset-4">
                  9+ years
                </span>{" "}
                of experience building web, mobile, and enterprise systems — from
                startups to multinational companies.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold uppercase tracking-[0.14em]">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link"
                >
                  LinkedIn ↗
                </a>
                <a href={`mailto:${profile.email}`} className="rule-link">
                  Email ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Tech stack as an index list, not pills */}
        <Reveal delay={120}>
          <div className="mt-16 border-t border-line pt-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted">
              Stack
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2.5">
              {techStack.map((tech, i) => (
                <li
                  key={tech}
                  className="flex items-baseline gap-2 text-[15px] transition-colors duration-300 hover:text-acc"
                >
                  <span className="text-[10px] tabular-nums text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
