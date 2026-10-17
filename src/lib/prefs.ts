/**
 * Language preference, read by ONE blocking script in <head> so `lang` is right
 * before the first paint. Nothing here may import React — the script is inlined
 * as a string.
 *
 * The site is dark-only since the 2026-10 story remake, so there is no theme
 * preference any more.
 */
export const LANG_KEY = "lang";

export const LANGS = ["th", "en", "ko", "zh"] as const;
export type Lang = (typeof LANGS)[number];

/** What goes on <html lang>. Chinese is Simplified, and saying so picks the
 *  right Han glyphs and system font. */
export const HTML_LANG: Record<Lang, string> = { th: "th", en: "en", ko: "ko", zh: "zh-Hans" };

/** What the static HTML is rendered in. */
export const DEFAULT_LANG: Lang = "th";

export const isLang = (v: unknown): v is Lang => (LANGS as readonly unknown[]).includes(v);

/** First visit with nothing stored: Thai, Korean and Chinese browsers get their
 *  own language, everyone else English, so visitors from abroad don't land on a
 *  page they can't read. */
export function detectLang(navigatorLang: string | undefined): Lang {
  const l = navigatorLang?.toLowerCase() ?? "";
  return l.startsWith("th") ? "th" : l.startsWith("ko") ? "ko" : l.startsWith("zh") ? "zh" : "en";
}

/** Runs before paint. Keep it small, dependency-free and failure-tolerant.
 *  Mirrors `detectLang` and `HTML_LANG` — keep them in step. */
export const PREFS_SCRIPT = `(function(){try{
var d=document.documentElement,l=window.localStorage.getItem(${JSON.stringify(LANG_KEY)}),h=${JSON.stringify(HTML_LANG)};
if(!Object.prototype.hasOwnProperty.call(h,l)){var n=(navigator.language||"").toLowerCase().slice(0,2);l=n==="th"||n==="ko"||n==="zh"?n:"en";}
d.lang=h[l];
}catch(e){}})();`;
