"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  maxLife: number;
  maxA: number;
};

const COUNT = 46;
const LINK_DIST = 118;

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (init: boolean): Dot => ({
      x: Math.random() * w,
      y: init ? Math.random() * h : h + 6,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -(Math.random() * 0.3 + 0.09),
      r: Math.random() * 1.4 + 0.4,
      life: 0,
      maxLife: Math.random() * 560 + 220,
      maxA: Math.random() * 0.42 + 0.12,
    });

    resize();
    let dots: Dot[] = Array.from({ length: COUNT }, () => spawn(true));

    const alphaOf = (d: Dot) => {
      const p = d.life / d.maxLife;
      if (p < 0.2) return (p / 0.2) * d.maxA;
      if (p > 0.75) return ((1 - p) / 0.25) * d.maxA;
      return d.maxA;
    };

    let mx = -500;
    let my = -500;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };

    let raf = 0;
    const render = () => {
      const dark =
        document.documentElement.getAttribute("data-theme") === "dark";
      const rgb = dark ? "79,142,247" : "37,99,235";
      const scale = dark ? 1 : 0.62;

      ctx.clearRect(0, 0, w, h);

      // Soft glow that follows the pointer
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 230);
      grad.addColorStop(0, `rgba(${rgb},${dark ? 0.06 : 0.04})`);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        d.life++;
        if (d.life >= d.maxLife || d.y < -10) Object.assign(d, spawn(false));

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${alphaOf(d) * scale})`;
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist >= LINK_DIST) continue;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(${rgb},${(1 - dist / LINK_DIST) * 0.08 * scale})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
