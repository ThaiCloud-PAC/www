"use client";

import { useT } from "@/i18n";
import { Marquee } from "@/components/ui/marquee";

/** A band of what runs on the floor, between the story and the rest of the page. */
export default function Ticker() {
  const t = useT();
  return (
    <div className="relative border-y border-white/8 bg-night-2 py-5">
      <Marquee pauseOnHover className="[--duration:46s] [--gap:2.5rem] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {t.ticker.map((item, i) => (
          <span key={item} className="flex items-center gap-10 font-mono text-sm tracking-wide whitespace-nowrap text-white/70">
            {item}
            <span aria-hidden="true" className="size-1.5 rounded-full" style={{ background: ["#f37521", "#5ec9d3", "#48bfaa"][i % 3] }} />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
