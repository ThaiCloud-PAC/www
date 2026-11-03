import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LocaleToggle } from "./LocaleToggle";
import { COMPANY } from "@/lib/company";

type Column = { title: string; items: { label: string; href: string }[] };

export function Footer() {
  const t = useTranslations("Footer");
  const cols = t.raw("columns") as Record<string, Column>;
  const colKeys = ["product", "solutions", "company"] as const;

  return (
    <footer className="bg-ink-950 pb-8 pt-20 text-white/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-[60px]">
          <div className="lg:col-span-4">
            <Logo variant="dark" />
            <p className="mt-[18px] max-w-[300px] text-[13.5px] leading-[1.6] text-white/55">
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
                      <li key={item.href + item.label}>
                        <Link
                          href={item.href}
                          className="text-[13.5px] text-white/70 transition hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                {t("contactTitle")}
              </h4>
              <ul className="space-y-2.5 text-[13.5px]">
                <li>
                  <a
                    href={COMPANY.lineHref}
                    className="text-white/70 transition hover:text-white"
                  >
                    LINE: {COMPANY.line}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-white/70 transition hover:text-white"
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li className="pt-1 text-[12px] leading-[1.6] text-white/45">
                  {COMPANY.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-[60px] flex flex-col items-start justify-between gap-3.5 border-t border-white/[0.08] pt-[22px] md:flex-row md:items-center">
          <span className="text-[12px] text-white/40">{t("legal")}</span>
          <div className="flex flex-wrap items-center gap-x-[22px] gap-y-2 text-[12px] text-white/55">
            <Link href="/privacy" className="transition hover:text-white">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
