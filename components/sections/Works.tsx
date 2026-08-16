"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { works } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { Counter } from "../Counter";

export function Works() {
  const railRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  // Pointer-drag scrolling on the horizontal rail.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDown = (e: PointerEvent) => {
      // Ignore anything that isn't a primary mouse press (touch scrolls natively).
      if (e.pointerType === "touch") return;
      down = true;
      moved = false;
      startX = e.clientX;
      startScroll = rail.scrollLeft;
      setDragging(true);
    };

    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      rail.scrollLeft = startScroll - dx;
    };

    const onUp = () => {
      down = false;
      setDragging(false);
    };

    // Swallow the click that ends a drag so cards don't feel jumpy.
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    rail.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    rail.addEventListener("click", onClick, true);

    return () => {
      rail.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      rail.removeEventListener("click", onClick, true);
    };
  }, []);

  const scrollBy = useCallback((dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }, []);

  return (
    <section id="works" className="section-pad relative overflow-hidden">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Works</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-tight tracking-tight">
                Proyek yang{" "}
                <em className="grad-text not-italic">Sudah Dibuat.</em>
              </h2>
            </div>

            <div className="flex items-center gap-5">
              <span className="font-display text-[clamp(2.6rem,7vw,4.2rem)] font-bold leading-none grad-text">
                <Counter to={works.length} />
              </span>
              <div className="hidden gap-2 sm:flex">
                {([-1, 1] as const).map((dir) => (
                  <button
                    key={dir}
                    onClick={() => scrollBy(dir)}
                    aria-label={dir === 1 ? "Proyek berikutnya" : "Proyek sebelumnya"}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:border-acc hover:text-acc"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      style={{
                        transform: dir === -1 ? "rotate(180deg)" : undefined,
                      }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Rail — full-bleed, starts aligned with the shell */}
      <div
        ref={railRef}
        className={`no-scrollbar mask-fade-x mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
        style={{
          paddingInline: "max(1.25rem, calc((100vw - 1240px) / 2 + 1.5rem))",
        }}
      >
        {works.map((work, i) => (
          <motion.article
            key={work.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.65,
              delay: Math.min(i, 5) * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            data-cursor-hover
            className="glass card-hover group w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[320px]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-bg2">
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="320px"
                draggable={false}
                className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70" />
              <span className="absolute left-3.5 top-3.5 rounded-lg bg-black/45 px-2.5 py-1 font-display text-xs font-bold text-white backdrop-blur-md">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-display text-[15px] font-bold leading-snug transition-colors duration-300 group-hover:text-acc">
                {work.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {work.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="shell">
        <Reveal delay={120}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:text-left">
            ← Geser untuk melihat semua proyek →
          </p>
        </Reveal>
      </div>
    </section>
  );
}
