"use client";

import { DEFAULT_LANG, HTML_LANG, LANG_KEY, detectLang, isLang, type Lang } from "./prefs";

/**
 * Tiny store behind the language preference, read through
 * `useSyncExternalStore`. localStorage is an external system, so this keeps the
 * components free of state-syncing effects.
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

export const getLang = (): Lang => {
  try {
    const v = window.localStorage.getItem(LANG_KEY);
    if (isLang(v)) return v;
  } catch {
    // storage blocked — fall through to the browser language
  }
  return detectLang(navigator.language);
};

export function setLang(lang: Lang) {
  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch {
    // storage blocked — the choice lasts for this page only
  }
  document.documentElement.lang = HTML_LANG[lang];
  emit();
}

/** Server render (and the first hydration pass) uses the documented default. */
export const serverLang = (): Lang => DEFAULT_LANG;
