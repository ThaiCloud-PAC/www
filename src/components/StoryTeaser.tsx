import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function StoryTeaser() {
  const t = useTranslations("StoryTeaser");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="overflow-hidden rounded-card p-9 text-white md:p-14"
          style={{
            background:
              "radial-gradient(130% 140% at 15% 0%, var(--color-ink-800) 0%, var(--color-ink-950) 70%)",
          }}
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
            {t("eyebrow")}
          </p>
          <span className="mt-4 inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.06] px-3.5 py-1.5 text-[12px] text-white/75">
            {t("tag")}
          </span>
          <h2
            className="font-display mt-4 max-w-[680px] leading-[1.15] tracking-[-0.02em]"
            style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}
          >
            {t("title")}
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] leading-[1.7] text-white/72">
            {t("description")}
          </p>
          <Link
            href="/customers"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14.5px] font-bold text-ink-950 transition hover:-translate-y-px hover:bg-ink-50"
          >
            {t("cta")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
