"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useT } from "@/i18n";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#home", key: "home" },
  { href: "#problems", key: "problems" },
  { href: "#solution", key: "solution" },
  { href: "#products", key: "products" },
  { href: "#faq", key: "faq" },
  { href: "#contact-sec", key: "contact" },
] as const;

/** The logo artwork is dark ink on transparent, so on a dark background it sits
    on a white chip — the same treatment the footer uses. */
function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex rounded-lg dark:bg-white dark:px-2 dark:py-1 ${className}`}
    >
      <Image
        src="/brand/packiko-logo.png"
        alt="Packiko by ThaiCloud"
        width={1200}
        height={620}
        priority
        className="h-10 w-auto"
      />
    </span>
  );
}

export default function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);

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
      <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
          <Link href="/" aria-label="ThaiCloud" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                {t.nav[l.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.a11y.openMenu}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-full border border-line text-ink lg:hidden"
            >
              <Menu className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex w-[82%] max-w-sm flex-col gap-8 bg-surface p-6 shadow-2xl"
              data-reveal
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t.a11y.closeMenu}
                  className="grid size-9 place-items-center rounded-full border border-line text-ink"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-lg font-semibold text-ink transition-colors hover:bg-surface-2 hover:text-brand"
                  >
                    {t.nav[l.key]}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex items-center gap-3 border-t border-line pt-6">
                <LangToggle />
                <ThemeToggle />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
