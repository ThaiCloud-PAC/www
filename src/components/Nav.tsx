import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { LocaleToggle } from "./LocaleToggle";

export function Nav() {
  const t = useTranslations("Nav");
  const links = [
    { key: "product", label: t("product") },
    { key: "solutions", label: t("solutions") },
    { key: "pricing", label: t("pricing") },
    { key: "customers", label: t("customers") },
    { key: "docs", label: t("docs") },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo variant="light" />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.key}
              href={`#${l.key}`}
              className="text-[14px] text-ink-700 transition hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleToggle tone="light" />
          <a
            href="#login"
            className="hidden text-[14px] text-ink-700 transition hover:text-ink-900 md:inline"
          >
            {t("signIn")}
          </a>
          <a
            href="#trial"
            className="inline-flex items-center rounded-full bg-ink-900 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-ink-800"
          >
            {t("tryFree")}
          </a>
        </div>
      </div>
    </header>
  );
}
