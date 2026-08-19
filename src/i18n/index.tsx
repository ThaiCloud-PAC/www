"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { nb } from "@/lib/th";
import { getLang, serverLang, setLang, subscribe } from "@/lib/prefs-store";
import type { Lang } from "@/lib/prefs";
import { th, type Dictionary } from "./th";
import { en } from "./en";

/** Word-joiner pass over every Thai string, once at module load. */
function deepNb<T>(value: T): T {
  if (typeof value === "string") return nb(value) as unknown as T;
  if (Array.isArray(value)) return value.map(deepNb) as unknown as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, deepNb(v)])) as unknown as T;
  }
  return value;
}

const DICTS: Record<Lang, Dictionary> = { th: deepNb(th), en };

type LangState = { lang: Lang; setLang: (l: Lang) => void; t: Dictionary };
const LangContext = createContext<LangState | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getLang, serverLang);
  const value = useMemo<LangState>(() => ({ lang, setLang, t: DICTS[lang] }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}

/** The active dictionary. */
export function useT(): Dictionary {
  return useLang().t;
}
