"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import type { Theme } from "./prefs";
import { getTheme, serverTheme, setTheme, subscribe } from "./prefs-store";

type ThemeState = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  /** dark ⇄ light */
  toggle: () => void;
};

const ThemeContext = createContext<ThemeState | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The blocking script in <head> already put the right class on <html>; this
  // only mirrors that state into React so the toggle can show it.
  const theme = useSyncExternalStore(subscribe, getTheme, serverTheme);

  const toggle = useCallback(() => setTheme(theme === "dark" ? "light" : "dark"), [theme]);

  const value = useMemo<ThemeState>(() => ({ theme, setTheme, toggle }), [theme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
