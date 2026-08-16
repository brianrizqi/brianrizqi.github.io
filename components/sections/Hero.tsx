"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, stats } from "@/data/portfolio";
import { Counter } from "../Counter";
import { ParticleField } from "../ParticleField";
import {
  IconArrowRight,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconWhatsapp,
} from "../Icons";

const socials = [
  { href: profile.github, Icon: IconGithub, label: "GitHub" },
  { href: profile.linkedin, Icon: IconLinkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, Icon: IconMail, label: "Email" },
  { href: profile.whatsapp, Icon: IconWhatsapp, label: "WhatsApp" },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 lg:pt-0"
    >
      <ParticleField />

      {/* Ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-acc/20 blur-[130px] animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-acc2/20 blur-[130px] animate-float"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="shell relative z-10 grid items-center gap-14 py-16 lg:grid-cols-[380px_1fr] lg:gap-20">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, x: -46, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass card-hover mx-auto w-full max-w-[380px] rounded-[28px] p-7 text-center"
        >
          <div className="relative mx-auto mb-5 h-[150px] w-[150px]">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-acc to-acc2 opacity-70 blur-[3px]" />
            <Image
              src={profile.photo}
              alt={profile.name}
              width={150}
              height={150}
              priority
              className="relative h-full w-full rounded-full object-cover"
            />
          </div>

          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold tracking-wide text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseDot" />
            Available
          </div>

          <h2 className="font-display text-[21px] font-semibold leading-snug text-balance">
            {profile.name}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {profile.role}
            <br />
            {profile.subRole}
          </p>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-line2 to-transparent" />

          <div className="grid grid-cols-3 gap-2">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold grad-text">
                  <Counter to={s.value} />
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2.5">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-1 hover:border-acc hover:text-acc"
              >
                <Icon className="h-[15px] w-[15px]" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-acc animate-pulseDot" />
            {profile.tagline}
          </motion.p>

          <h1 className="font-display text-[clamp(2.7rem,8.5vw,6.2rem)] font-bold leading-[0.95] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              SOFTWARE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="block italic grad-text"
            >
              ENGINEER.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-7 max-w-lg text-[17px] leading-relaxed text-muted text-balance lg:mx-0"
          >
            Membangun produk digital yang{" "}
            <strong className="font-semibold text-txt">scalable</strong>, cepat,
            dan berdampak nyata di setiap lini bisnis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62 }}
            className="mt-9 flex flex-wrap justify-center gap-3.5 lg:justify-start"
          >
            <button onClick={() => scrollTo("works")} className="btn-primary">
              Lihat Karya
              <IconArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-ghost">
              Hubungi Saya
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll ke bawah"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted transition-colors hover:text-acc lg:flex"
      >
        Scroll
        <span className="relative h-9 w-[22px] rounded-full border border-line2">
          <motion.span
            animate={{ y: [5, 15, 5], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-acc"
          />
        </span>
      </motion.button>
    </section>
  );
}
