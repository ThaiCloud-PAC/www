/** Social / contact links shown in the hero rail, side menu and footer. Edit here only. */
export const SOCIALS = [
  { key: "facebook", label: "ThaiCloud on Facebook", href: "#", icon: "fab fa-facebook-f" }, // TODO: link pending
  { key: "instagram", label: "ThaiCloud on Instagram", href: "#", icon: "fab fa-instagram" }, // TODO: link pending
  { key: "linkedin", label: "ThaiCloud on LinkedIn", href: "https://www.linkedin.com/thaicloud", icon: "fab fa-linkedin-in" },
  { key: "email", label: "Email hello@thaicloud.com", href: "mailto:hello@thaicloud.com", icon: "fas fa-envelope" },
] as const;

export const external = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});
