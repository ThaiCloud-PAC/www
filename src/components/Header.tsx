"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useT } from "@/i18n";
import { cn } from "@/lib/utils";
import LangMenu from "./LangMenu";

const LINKS = [
  { href: "#speed", key: "speed" },
  { href: "#intelligence", key: "intelligence" },
  { href: "#network", key: "network" },
  { href: "#products", key: "products" },
  { href: "#faq", key: "faq" },
] as const;

/** The Packiko cloud mark with the name set in type (the PNG wordmark is navy
    and disappears on the dark page). */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image src="/brand/packiko-mark.png" alt="" width={544} height={340} priority className="h-7 w-auto" />
      <span className="font-(family-name:--font-kanit) text-[19px] font-semibold tracking-tight text-white">Packiko</span>
    </span>
  );
}

export default function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Out of the way while reading down the page, back the moment you scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // small deltas add up until they pass the threshold, so trackpad jitter
      // doesn't flicker the bar
      if (Math.abs(y - lastY) < 6) return;
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-300 ease-out focus-within:translate-y-0 has-[[aria-expanded=true]]:translate-y-0 motion-reduce:transition-none sm:px-5",
          // past the bar's height, so its drop shadow goes with it
          hidden && !open && "-translate-y-[140%]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 rounded-full border px-3 pl-4 transition-all duration-500 sm:px-4 sm:pl-5",
            // phones: a solid bar; a blur over the 3D story is redone every frame
            scrolled
              ? "border-white/10 bg-night/90 shadow-2xl shadow-black/40 lg:bg-night/70 lg:backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a href="#home" aria-label="Packiko by ThaiCloud" className="shrink-0">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {t.nav[l.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LangMenu />
            <a
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-night transition hover:bg-white/90 sm:inline-flex"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.a11y.openMenu}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-full border border-white/15 text-white lg:hidden"
            >
              <Menu className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-60 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden="true" />
            <motion.div
              data-reveal
              className="absolute inset-y-0 right-0 flex w-[84%] max-w-sm flex-col gap-8 border-l border-white/10 bg-night-2 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Wordmark />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t.a11y.closeMenu}
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {[...LINKS, { href: "#contact", key: "contact" as const }].map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 rounded-2xl px-3 py-3 text-lg text-white/90 transition-colors hover:bg-white/5"
                  >
                    <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                    {t.nav[l.key]}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-6">
                <LangMenu up />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
