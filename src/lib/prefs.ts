/**
 * Client preferences shared by the theme (#14) and the language (#13): both are
 * read by ONE blocking script in <head> so the correct theme class and lang are
 * on <html> before the first paint. Nothing here may import React — the script
 * is inlined as a string.
 */
export const THEME_KEY = "theme";
export const LANG_KEY = "lang";

export type Theme = "light" | "dark";
export type Lang = "th" | "en";

export const DEFAULT_LANG: Lang = "th";

/** The site is dark by default, whatever the device is set to. There is no
    "follow the system" mode — only an explicit light/dark choice. */
export const DEFAULT_THEME: Theme = "dark";

/** Runs before paint. Keep it small, dependency-free and failure-tolerant. */
export const PREFS_SCRIPT = `(function(){try{
var d=document.documentElement,s=window.localStorage;
var light=s.getItem(${JSON.stringify(THEME_KEY)})==="light";
d.classList.toggle("dark",!light);
d.style.colorScheme=light?"light":"dark";
var l=s.getItem(${JSON.stringify(LANG_KEY)});
if(l==="en"||l==="th"){d.lang=l;}
}catch(e){}})();`;
