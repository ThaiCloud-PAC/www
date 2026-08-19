"use client";

import { DEFAULT_LANG, LANG_KEY, THEME_KEY, type Lang, type ThemeChoice } from "./prefs";

/**
 * One tiny store behind both preferences, read through `useSyncExternalStore`.
 * localStorage and `prefers-color-scheme` are external systems, so this keeps
 * the components free of state-syncing effects.
 */
type Listener = () => void;

const listeners = new Set<Listener>();
const emit = () => listeners.forEach((l) => l());

let wired = false;
function wire() {
  if (wired) return;
  wired = true;
  window.addEventListener("storage", emit);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    // An explicit choice always wins; otherwise follow the OS live.
    if (!window.localStorage.getItem(THEME_KEY)) applyTheme("system");
    emit();
  });
}

export function subscribe(listener: Listener) {
  wire();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function applyTheme(choice: ThemeChoice) {
  const dark = choice === "dark" || (choice === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
}

export const getThemeChoice = (): ThemeChoice => {
  const v = window.localStorage.getItem(THEME_KEY);
  return v === "dark" || v === "light" ? v : "system";
};

export const getResolvedTheme = (): "light" | "dark" =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export function setThemeChoice(choice: ThemeChoice) {
  if (choice === "system") window.localStorage.removeItem(THEME_KEY);
  else window.localStorage.setItem(THEME_KEY, choice);
  applyTheme(choice);
  emit();
}

export const getLang = (): Lang => {
  const v = window.localStorage.getItem(LANG_KEY);
  return v === "en" || v === "th" ? v : DEFAULT_LANG;
};

export function setLang(lang: Lang) {
  window.localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  emit();
}

/** Server render (and the first hydration pass) uses the documented defaults. */
export const serverTheme = (): ThemeChoice => "system";
export const serverResolved = (): "light" | "dark" => "light";
export const serverLang = (): Lang => DEFAULT_LANG;
