"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "sending" | "sent" | "error";

/** Demo-request form — posts to the worker's /api/contact (name, email, subject, message). */
export function DemoForm() {
  const t = useTranslations("Demo.form");
  const [status, setStatus] = useState<Status>("idle");

  const businessTypes = t.raw("businessTypes") as string[];
  const orderVolumes = t.raw("orderVolumes") as string[];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    const message = [
      `Company: ${data.get("company")}`,
      `Phone: ${data.get("phone")}`,
      `Business type: ${data.get("businessType")}`,
      `Orders/day: ${data.get("orderVolume")}`,
      "",
      `${data.get("problem") || "-"}`,
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: `Demo request — ${data.get("company")}`,
          message,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-card border border-teal-200 bg-teal-50 p-8 text-center">
        <p className="text-[16px] font-semibold leading-[1.6] text-teal-700">
          {t("success")}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14.5px] text-slate-900 outline-none transition focus:border-ink-600 focus:ring-2 focus:ring-ink-100";
  const labelCls = "mb-1.5 block text-[13px] font-semibold text-slate-700";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="demo-name">
            {t("name")}
          </label>
          <input id="demo-name" name="name" required maxLength={200} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="demo-company">
            {t("company")}
          </label>
          <input id="demo-company" name="company" required maxLength={200} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="demo-email">
            {t("email")}
          </label>
          <input id="demo-email" name="email" type="email" required maxLength={320} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="demo-phone">
            {t("phone")}
          </label>
          <input id="demo-phone" name="phone" required maxLength={50} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="demo-type">
            {t("businessType")}
          </label>
          <select id="demo-type" name="businessType" className={inputCls}>
            {businessTypes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="demo-volume">
            {t("orderVolume")}
          </label>
          <select id="demo-volume" name="orderVolume" className={inputCls}>
            {orderVolumes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="demo-problem">
          {t("problem")}
        </label>
        <textarea id="demo-problem" name="problem" rows={4} maxLength={4000} className={inputCls} />
      </div>
      {status === "error" && (
        <p className="rounded-xl bg-orange-50 px-4 py-3 text-[13.5px] leading-[1.6] text-orange-700">
          {t("error")}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-[15px] font-bold text-white transition hover:bg-orange-600 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
