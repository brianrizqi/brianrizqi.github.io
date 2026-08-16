"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "./Icons";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("br-theme", next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Ganti ke mode ${theme === "dark" ? "terang" : "gelap"}`}
      className={`grid h-10 w-10 place-items-center rounded-full border border-line text-txt transition-all duration-300 hover:border-acc hover:text-acc ${className}`}
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && theme === "dark" ? (
        <IconSun className="h-[18px] w-[18px]" />
      ) : (
        <IconMoon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
