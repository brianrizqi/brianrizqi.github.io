"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { works } from "@/data/portfolio";
import { Reveal } from "../Reveal";

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
    railRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  }, []);

  return (
    <section id="works" className="section-pad overflow-hidden">
      <div className="shell">
        <Reveal>
          <p className="index-mark">07 — Works</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={60}>
            <h2 className="display text-[clamp(2.3rem,7vw,5.5rem)]">
              Proyek yang
              <br />
              sudah dibuat<span className="text-acc">.</span>
            </h2>
          </Reveal>

          <Reveal delay={130}>
            <div className="flex items-end gap-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                {works.length} Proyek
              </span>
              <div className="hidden gap-0 sm:flex">
                {([-1, 1] as const).map((dir) => (
                  <button
                    key={dir}
                    onClick={() => scrollBy(dir)}
                    aria-label={
                      dir === 1 ? "Proyek berikutnya" : "Proyek sebelumnya"
                    }
                    className="grid h-12 w-12 place-items-center border border-line text-txt transition-colors duration-300 hover:bg-ink hover:text-bg"
                  >
                    {dir === 1 ? "→" : "←"}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed rail, first card aligned to the shell */}
      <div
        ref={railRef}
        className={`no-scrollbar mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
        style={{
          paddingInline: "max(1.25rem, calc((100vw - 1340px) / 2 + 4rem))",
        }}
      >
        {works.map((work, i) => (
          <motion.article
            key={work.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: Math.min(i, 5) * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group w-[290px] shrink-0 snap-start sm:w-[360px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-line bg-bg2">
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="360px"
                draggable={false}
                className="object-cover grayscale transition-all duration-700 ease-smooth group-hover:scale-[1.04] group-hover:grayscale-0"
              />
            </div>

            <div className="mt-4 flex items-baseline gap-4 border-t border-line pt-3">
              <span className="text-[11px] tabular-nums text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[15px] font-medium leading-snug transition-colors duration-300 group-hover:text-acc">
                  {work.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {work.desc}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="shell">
        <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
          ← Geser untuk melihat semua proyek →
        </p>
      </div>
    </section>
  );
}
