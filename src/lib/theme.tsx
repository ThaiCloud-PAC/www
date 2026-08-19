"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import type { ThemeChoice } from "./prefs";
import {
  getResolvedTheme,
  getThemeChoice,
  serverResolved,
  serverTheme,
  setThemeChoice,
  subscribe,
} from "./prefs-store";

type ThemeState = {
  /** What the user chose. "system" means "follow prefers-color-scheme". */
  choice: ThemeChoice;
  /** What is actually on screen right now. */
  resolved: "light" | "dark";
  setChoice: (c: ThemeChoice) => void;
  /** system → light → dark → system */
  cycle: () => void;
};

const ThemeContext = createContext<ThemeState | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The blocking script in <head> already put the right class on <html>; this
  // only mirrors that state into React so the toggle can show it.
  const choice = useSyncExternalStore(subscribe, getThemeChoice, serverTheme);
  const resolved = useSyncExternalStore(subscribe, getResolvedTheme, serverResolved);

  const cycle = useCallback(() => {
    setThemeChoice(choice === "system" ? "light" : choice === "light" ? "dark" : "system");
  }, [choice]);

  const value = useMemo<ThemeState>(
    () => ({ choice, resolved, setChoice: setThemeChoice, cycle }),
    [choice, resolved, cycle]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
