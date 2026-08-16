"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, sections } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import {
  IconBriefcase,
  IconCap,
  IconChat,
  IconGrid,
  IconHome,
  IconPulse,
  IconStar,
  IconUser,
} from "./Icons";

const ICONS = [
  IconHome,
  IconUser,
  IconCap,
  IconBriefcase,
  IconPulse,
  IconStar,
  IconGrid,
  IconChat,
];

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
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-acc to-acc2"
      />

      {/* ---------- Desktop rail ---------- */}
      <nav className="fixed left-0 top-0 z-50 hidden h-screen w-[84px] flex-col items-center justify-between border-r border-line bg-bg2/60 py-8 backdrop-blur-xl lg:flex">
        <button onClick={() => goTo(0)} aria-label="Ke beranda">
          <Image
            src={profile.logo}
            alt="Logo Brian Rizqi"
            width={38}
            height={38}
            className="rounded-lg object-contain"
          />
        </button>

        <div className="flex flex-col gap-2">
          {sections.map((label, i) => {
            const Icon = ICONS[i];
            const isActive = active === i;
            return (
              <button
                key={label}
                onClick={() => goTo(i)}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                className="group relative grid h-11 w-11 place-items-center rounded-xl transition-colors duration-300"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-acc to-acc2"
                  />
                )}
                <Icon
                  className={`relative z-10 h-[19px] w-[19px] transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-muted group-hover:text-acc"
                  }`}
                />
                <span className="pointer-events-none absolute left-[58px] z-20 whitespace-nowrap rounded-lg border border-line bg-bg2 px-3 py-1.5 text-xs font-semibold opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        <ThemeToggle />
      </nav>

      {/* ---------- Mobile header ---------- */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-line bg-bg2/80 px-5 py-3 backdrop-blur-xl lg:hidden">
        <button onClick={() => goTo(0)} aria-label="Ke beranda">
          <Image
            src={profile.logo}
            alt="Logo Brian Rizqi"
            width={34}
            height={34}
            className="rounded-lg object-contain"
          />
        </button>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Buka menu"
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-full border border-line"
          >
            <span className="flex flex-col gap-[5px]">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-[18px] rounded bg-txt"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }
                }
                className="block h-[2px] w-[18px] rounded bg-txt"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center gap-1 bg-bg/95 backdrop-blur-2xl lg:hidden"
          >
            {sections.map((label, i) => (
              <motion.button
                key={label}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.5 }}
                onClick={() => goTo(i)}
                className={`font-display text-3xl transition-colors duration-300 ${
                  active === i ? "grad-text" : "text-txt hover:text-acc"
                }`}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
