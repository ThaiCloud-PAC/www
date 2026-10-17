import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { LocaleToggle } from "./LocaleToggle";

type Column = { title: string; items: string[] };

export function Footer() {
  const t = useTranslations("Footer");
  const cols = t.raw("columns") as Record<string, Column>;
  const colKeys = ["product", "solutions", "company", "resources"] as const;

  return (
    <footer className="bg-ink-950 pb-8 pt-20 text-white/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-[60px]">
          <div className="lg:col-span-4">
            <Logo variant="dark" />
            <p className="mt-[18px] max-w-[280px] text-[13.5px] leading-[1.6] text-white/55">
              {t("tagline")}
            </p>
            <div className="mt-6">
              <LocaleToggle tone="dark" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-7 sm:grid-cols-4 lg:col-span-8">
            {colKeys.map((k) => {
              const col = cols[k];
              return (
                <div key={k}>
                  <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                    {col.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-[13.5px] text-white/70 transition hover:text-white"
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

        <div className="mt-[60px] flex flex-col items-start justify-between gap-3.5 border-t border-white/[0.08] pt-[22px] md:flex-row md:items-center">
          <span className="text-[12px] text-white/40">{t("legal")}</span>
          <div className="flex flex-wrap items-center gap-x-[22px] gap-y-2 text-[12px] text-white/55">
            <a href="#" className="transition hover:text-white">
              {t("privacy")}
            </a>
            <a href="#" className="transition hover:text-white">
              {t("terms")}
            </a>
            <a href="#" className="transition hover:text-white">
              {t("pdpa")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
