import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { LocaleToggle } from "./LocaleToggle";

type Column = { title: string; items: string[] };

export function Footer() {
  const t = useTranslations("Footer");
  const cols = t.raw("columns") as Record<string, Column>;
  const colKeys = ["product", "solutions", "company", "resources"] as const;

  return (
    <footer className="bg-ink-950 pt-20 pb-10 text-bone">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="dark" />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-bone/55">
              {t("tagline")}
            </p>
            <div className="mt-6">
              <LocaleToggle tone="dark" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {colKeys.map((k) => {
              const col = cols[k];
              return (
                <div key={k}>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-bone/35">
                    {col.title}
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-[13.5px] text-bone/70 transition hover:text-bone"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-6 md:flex-row md:items-center">
          <span className="text-[12px] text-bone/40">{t("legal")}</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-bone/55">
            <a href="#" className="transition hover:text-bone">
              {t("privacy")}
            </a>
            <a href="#" className="transition hover:text-bone">
              {t("terms")}
            </a>
            <a href="#" className="transition hover:text-bone">
              {t("pdpa")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
