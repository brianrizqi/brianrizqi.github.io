"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, stats } from "@/data/portfolio";
import { Counter } from "../Counter";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const line = {
  hidden: { y: "108%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.15 + i * 0.11, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between pt-28 lg:pt-20"
    >
      <div className="shell w-full">
        {/* Top meta rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-line pb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted"
        >
          <span>01 — Index</span>
          <span className="hidden sm:block">Jember · Surabaya, ID</span>
          <span>{profile.tagline}</span>
        </motion.div>

        {/* Masthead */}
        <h1 className="display mt-10 text-[clamp(3.2rem,15.5vw,15rem)] uppercase">
          {["Software", "Engineer"].map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                className="block"
              >
                {word}
                {i === 1 && <span className="text-acc">.</span>}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>

      {/* Lower grid: portrait · statement · stats */}
      <div className="shell mt-14 w-full">
        <div className="grid gap-y-10 border-t border-line pt-8 md:grid-cols-12 md:gap-x-10">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="md:col-span-3"
          >
            <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden grayscale transition-all duration-700 hover:grayscale-0">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="220px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted">
              {profile.name}
            </p>
          </motion.div>

          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="md:col-span-5 md:rule-l md:pl-10"
          >
            <p className="max-w-md text-[19px] leading-[1.5]">
              Membangun produk digital yang{" "}
              <span className="underline decoration-acc decoration-2 underline-offset-4">
                scalable
              </span>
              , cepat, dan berdampak nyata di setiap lini bisnis.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {profile.role} · {profile.subRole}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollTo("works")} className="btn-solid">
                Lihat Karya
              </button>
              <button onClick={() => scrollTo("contact")} className="btn-outline">
                Kontak
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="md:col-span-4 md:rule-l md:pl-10"
          >
            <dl className="flex flex-col">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-baseline justify-between py-3 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    {s.label}
                  </dt>
                  <dd className="display text-[clamp(2rem,4vw,2.8rem)]">
                    <Counter to={s.value} />
                    <span className="text-acc">+</span>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* Bottom rule */}
        <div className="mt-8 flex items-center justify-between border-t border-line py-5 text-[11px] uppercase tracking-[0.2em] text-muted">
          <button
            onClick={() => scrollTo("about")}
            className="rule-link"
            aria-label="Scroll ke bawah"
          >
            ↓ Scroll
          </button>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
