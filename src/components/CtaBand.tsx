import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { COMPANY } from "@/lib/company";

type CtaBandProps = {
  title: string;
  subtitle?: string;
};

/** Closing CTA band — demo link plus the direct phone/email channels. */
export function CtaBand({ title, subtitle }: CtaBandProps) {
  const t = useTranslations("FooterCTA");

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(110% 120% at 50% 110%, var(--color-ink-900) 0%, var(--color-ink-950) 70%)",
        padding: "90px 0",
      }}
    >
      <div
        className="pointer-events-none absolute h-[300px] w-[640px] -translate-x-1/2 blur-[60px]"
        style={{
          left: "50%",
          bottom: "-140px",
          background:
            "radial-gradient(ellipse, rgba(243,117,33,0.3), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative z-[2] mx-auto max-w-4xl px-6 text-center">
        <h2
          className="font-display leading-[1.12] tracking-[-0.02em]"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-[1.65] text-white/72">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-[15px] font-bold text-white transition hover:-translate-y-px hover:bg-orange-600"
            style={{ boxShadow: "0 8px 24px -8px rgba(243,117,33,0.6)" }}
          >
            {t("ctaPrimary")} →
          </Link>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] text-white/70">
          <span>{t("orContact")}</span>
          <a
            href={COMPANY.phoneHref}
            className="font-mono-num font-semibold text-white transition hover:text-amber-400"
          >
            {t("callLabel")} {COMPANY.phoneDisplay}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-semibold text-white transition hover:text-amber-400"
          >
            {COMPANY.email}
          </a>
        </div>
      </div>
    </section>
  );
}
