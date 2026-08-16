"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = "a,button,[data-cursor-hover]";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Pointer-based cursor makes no sense on touch devices.
    if (window.matchMedia("(pointer:coarse)").matches) return;
    setEnabled(true);

    let mx = -200;
    let my = -200;
    let rx = -200;
    let ry = -200;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const el = (e.target as HTMLElement | null)?.closest?.(HOVER_SELECTOR);
      setHovering(Boolean(el));
    };

    const tick = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-acc"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border border-acc transition-[width,height,opacity] duration-300 ease-smooth"
        style={{
          width: hovering ? 46 : 28,
          height: hovering ? 46 : 28,
          opacity: hovering ? 0.9 : 0.42,
        }}
      />
    </div>
  );
}
