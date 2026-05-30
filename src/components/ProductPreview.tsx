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
    { name: t("shopee"), value: 38, color: "var(--color-orange-400)" },
    { name: t("lazada"), value: 27, color: "var(--color-cyan-500)" },
    { name: t("tiktok"), value: 21, color: "var(--color-teal-500)" },
    { name: t("web"), value: 14, color: "var(--color-ink-900)" },
  ];

  const feedLinesRaw = t.raw("feedLines") as string[];

  // Synthetic bar chart heights
  const bars = [42, 58, 35, 71, 64, 88, 54, 76, 92, 68, 80, 95];

  return (
    <section className="relative -mt-32 pb-24 md:-mt-48 md:pb-32">
      <div className="relative mx-auto max-w-6xl px-3">
        {/* cyan underglow blob */}
        <div
          className="pointer-events-none absolute -z-10 h-[120px] blur-[40px]"
          style={{
            left: "4%",
            right: "4%",
            bottom: "-40px",
            background:
              "radial-gradient(ellipse at center, rgba(96,199,211,0.5), transparent 70%)",
          }}
          aria-hidden
        />

        {/* product frame */}
        <div
          className="relative overflow-hidden rounded-[14px] bg-white"
          style={{
            boxShadow:
              "0 30px 80px -20px rgba(2,40,63,0.7), 0 0 0 1px rgba(255,255,255,0.1)",
          }}
        >
          {/* window chrome */}
          <div className="flex items-center gap-[7px] border-b border-ink-100 bg-ink-50 px-4 py-[11px]">
            <span
              className="h-[11px] w-[11px] rounded-full"
              style={{ background: "#ff5f57" }}
            />
            <span
              className="h-[11px] w-[11px] rounded-full"
              style={{ background: "#febc2e" }}
            />
            <span
              className="h-[11px] w-[11px] rounded-full"
              style={{ background: "#28c840" }}
            />
            <span className="ml-3.5 font-mono-num text-[11px] text-slate-300">
              app.thaicloud.com / dashboard
            </span>
          </div>

          <div className="grid grid-cols-[56px_1fr] min-h-[360px]">
            {/* sidebar */}
            <aside className="flex flex-col items-center gap-3 border-r border-ink-100 bg-ink-50 py-3.5">
              {["▤", "◫", "▣", "◧", "◪"].map((g, i) => (
                <div
                  key={i}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-[16px] ${
                    i === 0
                      ? "bg-cyan-100 text-slate-900"
                      : "text-slate-300 hover:text-slate-700"
                  }`}
                >
                  {g}
                </div>
              ))}
            </aside>

            {/* main */}
            <div className="px-5 py-4 md:px-6">
              {/* tabs */}
              <div className="mb-4 flex items-center gap-1.5 border-b border-ink-100">
                {tabs.map((label, i) => (
                  <button
                    key={label}
                    className={`relative px-3.5 py-2 text-[12.5px] font-medium transition ${
                      i === 0 ? "text-slate-900" : "text-slate-400 hover:text-slate-700"
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

              {/* metrics */}
              <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-[10px] border border-ink-100 bg-white p-3"
                  >
                    <div className="text-[10px] uppercase tracking-[0.1em] text-slate-500">
                      {m.label}
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-mono-num text-[22px] font-semibold text-slate-900">
                        {m.value}
                      </span>
                      <span className="font-mono-num text-[10px] text-teal-600">
                        {m.delta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* bottom row */}
              <div className="mt-3.5 grid grid-cols-12 gap-2.5">
                {/* bar chart */}
                <div className="col-span-12 rounded-[10px] border border-ink-100 bg-white p-3.5 md:col-span-7">
                  <div className="mb-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Orders / hour · last 12h
                  </div>
                  <div className="flex h-[90px] items-end gap-1">
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-[3px]"
                        style={{
                          height: `${h}%`,
                          background:
                            i === bars.length - 1
                              ? "linear-gradient(to top, var(--color-cyan-500), var(--color-cyan-300))"
                              : i % 4 === 1
                              ? "rgba(96,199,211,0.35)"
                              : "var(--color-cyan-100)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* channel split */}
                <div className="col-span-12 rounded-[10px] border border-ink-100 bg-white p-3.5 md:col-span-5">
                  <div className="mb-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {t("channels")}
                  </div>
                  <div className="space-y-[7px]">
                    {channels.map((c) => (
                      <div key={c.name}>
                        <div className="mb-[3px] flex items-center justify-between text-[11px]">
                          <span className="text-slate-700">{c.name}</span>
                          <span className="font-mono-num text-slate-500">
                            {c.value}%
                          </span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-ink-100">
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
                <div className="col-span-12 rounded-[10px] border border-ink-100 bg-white p-3.5">
                  <div className="mb-2 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    <span className="relative inline-flex h-[7px] w-[7px]">
                      <span className="absolute inset-0 animate-pulse-amber rounded-full bg-amber-500" />
                      <span className="relative inline-block h-[7px] w-[7px] rounded-full bg-amber-500" />
                    </span>
                    {t("feedTitle")}
                  </div>
                  <ul className="space-y-1.5">
                    {feedLinesRaw.map((line, i) => (
                      <li
                        key={i}
                        className="font-mono-num flex items-baseline gap-3 text-[11px] text-slate-700"
                      >
                        <span className="text-slate-300">
                          {String(14 - i).padStart(2, "0")}:
                          {String(43 - i * 11).padStart(2, "0")}
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
