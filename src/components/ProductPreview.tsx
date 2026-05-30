import { useTranslations } from "next-intl";

export function ProductPreview() {
  const t = useTranslations("Preview");

  const tabs = [t("tabOrders"), t("tabPick"), t("tabInbound"), t("tabAnalytics")];

  const metrics = [
    { label: t("metricOrdersToday"), value: "12,847", delta: "+18%" },
    { label: t("metricSLA"), value: "98.4%", delta: "+1.2%" },
    { label: t("metricPickRate"), value: "143", delta: "+22%" },
    { label: t("metricAccuracy"), value: "99.7%", delta: "+0.4%" },
  ];

  const channels = [
    { name: t("shopee"), value: 38, color: "#FF6B47" },
    { name: t("lazada"), value: 27, color: "#22D3EE" },
    { name: t("tiktok"), value: 21, color: "#A5B4FC" },
    { name: t("web"), value: 14, color: "#FCD34D" },
  ];

  const feedLinesRaw = t.raw("feedLines") as string[];

  // Synthetic bar chart values
  const bars = [42, 58, 35, 71, 64, 88, 54, 76, 92, 68, 80, 95];

  return (
    <section className="relative -mt-12 bg-ink-950 pb-24 md:-mt-20 md:pb-32">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* glow */}
        <div
          className="pointer-events-none absolute inset-x-10 top-10 -z-0 h-40 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,211,238,0.35), transparent 70%)",
          }}
          aria-hidden
        />

        {/* Frame */}
        <div className="animate-float relative overflow-hidden rounded-2xl border border-bone/10 bg-ink-900 shadow-2xl shadow-cyan-500/10 [animation-duration:8s]">
          {/* window chrome */}
          <div className="flex items-center gap-1.5 border-b border-bone/10 bg-ink-950/50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-coral-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 font-mono-num text-[11px] text-bone/40">
              app.thaicloud.com / dashboard
            </span>
          </div>

          <div className="grid grid-cols-12 gap-0">
            {/* sidebar */}
            <aside className="col-span-1 hidden border-r border-bone/10 bg-ink-950/40 p-3 sm:block">
              <div className="flex flex-col items-center gap-3">
                {["▤", "◫", "▣", "◧", "◪", "◩"].map((g, i) => (
                  <div
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg font-mono-num text-[15px] ${
                      i === 0
                        ? "bg-cyan-500/15 text-cyan-300"
                        : "text-bone/30 hover:text-bone/60"
                    }`}
                  >
                    {g}
                  </div>
                ))}
              </div>
            </aside>

            {/* main */}
            <div className="col-span-12 p-5 sm:col-span-11 md:p-6">
              {/* tabs */}
              <div className="mb-5 flex items-center gap-1 border-b border-bone/10">
                {tabs.map((label, i) => (
                  <button
                    key={label}
                    className={`relative px-3 py-2 text-[12px] font-medium transition ${
                      i === 0 ? "text-bone" : "text-bone/40 hover:text-bone/70"
                    }`}
                    aria-pressed={i === 0}
                  >
                    {label}
                    {i === 0 && (
                      <span className="absolute inset-x-2 -bottom-px h-[2px] bg-cyan-500" />
                    )}
                  </button>
                ))}
              </div>

              {/* metric cards */}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-bone/10 bg-ink-950/50 p-3"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-bone/40">
                      {m.label}
                    </div>
                    <div className="mt-1.5 flex items-baseline gap-1.5">
                      <span className="font-display font-mono-num text-[22px] font-semibold text-bone">
                        {m.value}
                      </span>
                      <span className="font-mono-num text-[10px] text-cyan-300">
                        {m.delta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* bottom row: bar chart + channel split + feed */}
              <div className="mt-4 grid grid-cols-12 gap-3">
                {/* bar chart */}
                <div className="col-span-12 rounded-lg border border-bone/10 bg-ink-950/50 p-4 md:col-span-7">
                  <div className="mb-3 flex items-baseline justify-between">
                    <div className="text-[11px] uppercase tracking-wider text-bone/40">
                      Orders / hour
                    </div>
                    <div className="font-mono-num text-[10px] text-bone/30">
                      last 12h
                    </div>
                  </div>
                  <div className="flex h-32 items-end gap-1.5">
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background:
                            i === bars.length - 1
                              ? "linear-gradient(to top, #22D3EE, rgba(34,211,238,0.4))"
                              : i % 4 === 0
                              ? "rgba(34,211,238,0.55)"
                              : "rgba(255,255,255,0.12)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* channel split */}
                <div className="col-span-12 rounded-lg border border-bone/10 bg-ink-950/50 p-4 md:col-span-5">
                  <div className="mb-3 text-[11px] uppercase tracking-wider text-bone/40">
                    {t("channels")}
                  </div>
                  <div className="space-y-2">
                    {channels.map((c) => (
                      <div key={c.name} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-bone/70">{c.name}</span>
                          <span className="font-mono-num text-bone/50">
                            {c.value}%
                          </span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-bone/5">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${c.value * 2.4}%`,
                              background: c.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* live feed */}
                <div className="col-span-12 rounded-lg border border-bone/10 bg-ink-950/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-pulse-dot rounded-full bg-cyan-500" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-bone/40">
                      {t("feedTitle")}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {feedLinesRaw.map((line, i) => (
                      <li
                        key={i}
                        className="flex items-baseline gap-3 font-mono-num text-[11px] text-bone/70"
                      >
                        <span className="text-bone/30">
                          {String(14 - i).padStart(2, "0")}:{String(43 - i * 11).padStart(2, "0")}
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
