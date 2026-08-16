"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, sections } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const IDS = sections.map((s) => s.toLowerCase());

export function Navigation() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  // Scroll-spy: the section closest to filling the viewport wins.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = IDS.indexOf(visible.target.id);
        if (idx !== -1) setActive(idx);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-15% 0px -15% 0px" }
    );

    IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goTo = (i: number) => {
    document.getElementById(IDS[i])?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-acc"
      />

      {/* ---------- Desktop: numbered index rail ---------- */}
      <nav className="fixed left-0 top-0 z-50 hidden h-screen w-[210px] flex-col justify-between border-r border-line bg-bg px-8 py-10 lg:flex">
        <button
          onClick={() => goTo(0)}
          aria-label="Ke beranda"
          className="w-11 transition-opacity duration-300 hover:opacity-70"
        >
          <Image
            src={profile.logo}
            alt="Brian Rizqi"
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />
        </button>

        <ul className="flex flex-col gap-0.5">
          {sections.map((label, i) => {
            const isActive = active === i;
            return (
              <li key={label}>
                <button
                  onClick={() => goTo(i)}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex w-full items-baseline gap-3 py-1.5 text-left"
                >
                  <span
                    className={`text-[10px] tabular-nums transition-colors duration-300 ${
                      isActive ? "text-acc" : "text-faint"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[13px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                      isActive
                        ? "text-txt"
                        : "text-muted group-hover:text-txt"
                    }`}
                  >
                    {label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-rule"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="ml-auto h-px w-6 self-center bg-acc"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="rule-link text-[11px] uppercase tracking-[0.16em] text-muted"
          >
            Email
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* ---------- Mobile header ---------- */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-line bg-bg/90 px-5 py-3.5 backdrop-blur-md lg:hidden">
        <button
          onClick={() => goTo(0)}
          aria-label="Ke beranda"
          className="transition-opacity duration-300 hover:opacity-70"
        >
          <Image
            src={profile.logo}
            alt="Brian Rizqi"
            width={34}
            height={34}
            priority
            className="h-[34px] w-[34px] object-contain"
          />
        </button>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Buka menu"
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center border border-line"
          >
            <span className="flex flex-col gap-[5px]">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-[17px] bg-txt"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }
                }
                className="block h-[1.5px] w-[17px] bg-txt"
              />
            </span>
          </button>
        </div>
      </header>

      {/* ---------- Mobile drawer ---------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[55] flex flex-col justify-center bg-bg px-6 lg:hidden"
          >
            {sections.map((label, i) => (
              <motion.button
                key={label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 + i * 0.045, duration: 0.45 }}
                onClick={() => goTo(i)}
                className="flex items-baseline gap-5 border-b border-line py-4 text-left"
              >
                <span
                  className={`text-[11px] tabular-nums ${
                    active === i ? "text-acc" : "text-faint"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-[clamp(1.6rem,7vw,2.4rem)] uppercase">
                  {label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
