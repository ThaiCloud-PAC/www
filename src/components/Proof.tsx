import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/** The single evidenced customer result — one case, stated with its context. */
export function Proof() {
  const t = useTranslations("Proof");

  return (
    <section className="bg-bone py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 rounded-card border border-slate-100 bg-white p-8 shadow-[0_4px_30px_-12px_rgba(2,40,63,0.14)] md:grid-cols-2 md:p-12">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-700">
              {t("eyebrow")}
            </p>
            <p
              className="font-mono-num mt-4 font-bold leading-none text-ink-900"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              {t("metric")}
            </p>
            <p className="mt-2 text-[16px] font-semibold text-slate-600">
              {t("metricLabel")}
            </p>
          </div>
          <div>
            <h2 className="font-display text-[22px] leading-[1.3] text-slate-900">
              {t("title")}
            </h2>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-slate-600">
              {t("context")}
            </p>
            <Link
              href="/customers"
              className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-ink-800 transition hover:text-ink-900"
            >
              {t("cta")} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
