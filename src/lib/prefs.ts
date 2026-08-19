/**
 * Client preferences shared by the theme (#14) and the language (#13): both are
 * read by ONE blocking script in <head> so the correct theme class and lang are
 * on <html> before the first paint. Nothing here may import React — the script
 * is inlined as a string.
 */
export const THEME_KEY = "theme";
export const LANG_KEY = "lang";

export type ThemeChoice = "light" | "dark" | "system";
export type Lang = "th" | "en";

export const DEFAULT_LANG: Lang = "th";

/** Runs before paint. Keep it small, dependency-free and failure-tolerant. */
export const PREFS_SCRIPT = `(function(){try{
var d=document.documentElement,s=window.localStorage;
var t=s.getItem(${JSON.stringify(THEME_KEY)});
var dark=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);
d.classList.toggle("dark",dark);
d.style.colorScheme=dark?"dark":"light";
var l=s.getItem(${JSON.stringify(LANG_KEY)});
if(l==="en"||l==="th"){d.lang=l;}
}catch(e){}})();`;
