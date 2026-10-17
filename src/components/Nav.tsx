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
    <header className="absolute inset-x-0 top-0 z-30 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" aria-label="ThaiCloud">
          <Logo variant="dark" />
        </a>

        <nav className="hidden items-center gap-[30px] lg:flex">
          {links.map((l) => (
            <a
              key={l.key}
              href={`#${l.key}`}
              className="text-[14px] text-white/78 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleToggle tone="dark" />
          <a
            href="#login"
            className="hidden items-center rounded-full bg-white/[0.08] px-4 py-2 text-[14px] font-semibold text-white/85 backdrop-blur transition hover:bg-white/[0.14] md:inline-flex"
          >
            {t("signIn")}
          </a>
          <a
            href="#trial"
            className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-[18px] py-2.5 text-[14px] font-semibold text-white transition hover:bg-orange-600"
          >
            {t("tryFree")}
          </a>
        </div>
      </div>
    </header>
  );
}
