"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { CN, GB, KR, TH } from "country-flag-icons/react/3x2";
import { useLang } from "@/i18n";
import { HTML_LANG, LANGS, type Lang } from "@/lib/prefs";
import { cn } from "@/lib/utils";

/** Each language by its own name, with the flag it's shown under. English
    takes the UK flag; Chinese is Simplified, so China's. SVG flags, not emoji:
    Windows has no flag emoji and would show the letters instead. */
const OPTIONS: Record<Lang, { name: string; Flag: typeof TH }> = {
  th: { name: "ภาษาไทย", Flag: TH },
  en: { name: "English", Flag: GB },
  ko: { name: "한국어", Flag: KR },
  zh: { name: "中文", Flag: CN },
};

/** Language dropdown: current flag and code, a menu of the rest. `up` opens it
    upwards, for the bottom of the mobile drawer. */
export default function LangMenu({ up = false, className }: { up?: boolean; className?: string }) {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();
  const { Flag } = OPTIONS[lang];

  useEffect(() => {
    if (!open) return;
    // land on the current language, like a native select
    items.current[LANGS.indexOf(lang)]?.focus();
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      trigger.current?.focus();
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
    // `lang` only changes by picking an item, which closes the menu
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const choose = (l: Lang) => {
    setLang(l);
    setOpen(false);
    trigger.current?.focus();
  };

  const onItemKey = (e: KeyboardEvent, i: number) => {
    const n = LANGS.length;
    const to = { ArrowDown: (i + 1) % n, ArrowUp: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
    if (to !== undefined) {
      e.preventDefault();
      items.current[to]?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={root} className={cn("relative", className)}>
      <button
        ref={trigger}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={`${t.a11y.language}: ${OPTIONS[lang].name}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="flex h-9 items-center gap-2 rounded-full border border-white/15 pr-2 pl-2.5 text-white/80 transition-colors hover:border-white/30 hover:text-white"
      >
        <Flag aria-hidden="true" className="h-3.5 w-[21px] shrink-0 rounded-[2px]" />
        <span className="font-mono text-[11px] font-medium uppercase">{lang}</span>
        <ChevronDown aria-hidden="true" className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            aria-label={t.a11y.language}
            initial={{ opacity: 0, y: up ? 6 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: up ? 6 : -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute z-10 min-w-44 rounded-2xl border border-white/10 bg-night-2/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl",
              up ? "bottom-full left-0 mb-2" : "top-full right-0 mt-2",
            )}
          >
            {LANGS.map((o, i) => {
              const { name, Flag: ItemFlag } = OPTIONS[o];
              const current = lang === o;
              return (
                <button
                  key={o}
                  ref={(el) => {
                    items.current[i] = el;
                  }}
                  type="button"
                  role="menuitemradio"
                  aria-checked={current}
                  lang={HTML_LANG[o]}
                  onClick={() => choose(o)}
                  onKeyDown={(e) => onItemKey(e, i)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors focus-visible:-outline-offset-2",
                    current ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                  )}
                >
                  <ItemFlag aria-hidden="true" className="h-4 w-6 shrink-0 rounded-[2px]" />
                  <span className="flex-1">{name}</span>
                  {current ? <Check aria-hidden="true" className="size-4 text-cyan" /> : null}
                </button>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
