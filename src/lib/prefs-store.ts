"use client";

import { DEFAULT_LANG, DEFAULT_THEME, LANG_KEY, THEME_KEY, type Lang, type Theme } from "./prefs";

/**
 * One tiny store behind both preferences, read through `useSyncExternalStore`.
 * localStorage is an external system, so this keeps the components free of
 * state-syncing effects.
 */
type Listener = () => void;

const listeners = new Set<Listener>();
const emit = () => listeners.forEach((l) => l());

let wired = false;
function wire() {
  if (wired) return;
  wired = true;
  window.addEventListener("storage", emit); // keep other tabs in step
}

export function subscribe(listener: Listener) {
  wire();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export const getTheme = (): Theme => (window.localStorage.getItem(THEME_KEY) === "light" ? "light" : DEFAULT_THEME);

export function setTheme(theme: Theme) {
  window.localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
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
export const serverTheme = (): Theme => DEFAULT_THEME;
export const serverLang = (): Lang => DEFAULT_LANG;
