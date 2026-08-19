/** Social / contact links shown in the footer. Edit here only.
 *
 *  Entries whose href is still "#" are NOT rendered — the site must not ship
 *  dead links (#12 item 7). Add the real URL here and give the key a glyph in
 *  `SocialIcon.tsx` to bring one back. */
type Social = { key: string; label: string; href: string; glyph: "linkedin" | "mail" | null };

const ALL: Social[] = [
  { key: "facebook", label: "ThaiCloud on Facebook", href: "#", glyph: null }, // TODO: link pending
  { key: "instagram", label: "ThaiCloud on Instagram", href: "#", glyph: null }, // TODO: link pending
  { key: "linkedin", label: "ThaiCloud on LinkedIn", href: "https://www.linkedin.com/thaicloud", glyph: "linkedin" },
  { key: "email", label: "Email hello@thaicloud.com", href: "mailto:hello@thaicloud.com", glyph: "mail" },
];

export const SOCIALS = ALL.filter((s) => s.href !== "#" && s.glyph !== null);

export const external = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});
