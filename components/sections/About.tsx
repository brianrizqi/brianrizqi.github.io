"use client";

import { profile, stats, techStack } from "@/data/portfolio";
import { Counter } from "../Counter";
import { Reveal } from "../Reveal";
import { IconGithub, IconLinkedin, IconMail } from "../Icons";

const links = [
  { href: profile.github, Icon: IconGithub, label: "GitHub" },
  { href: profile.linkedin, Icon: IconLinkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, Icon: IconMail, label: "Email" },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">About Me</p>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.1] tracking-tight">
              Saya membangun
              <br />
              <em className="grad-text not-italic">pengalaman digital</em>
              <br />
              yang bermakna.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
              Software Engineer dengan pengalaman{" "}
              <strong className="font-semibold text-txt">5+ tahun</strong>{" "}
              mengembangkan aplikasi web, mobile, dan sistem enterprise — dari
              startup hingga perusahaan multinasional.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-acc hover:text-acc"
                >
                  <Icon className="h-[14px] w-[14px]" />
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal direction="right" delay={60}>
            <div className="glass grid grid-cols-3 rounded-3xl p-7">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center ${
                    i < stats.length - 1 ? "border-r border-line" : ""
                  }`}
                >
                  <div className="font-display text-[clamp(1.9rem,4vw,2.7rem)] font-bold grad-text">
                    <Counter to={s.value} />
                    <span>+</span>
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={160}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-acc hover:text-acc"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
