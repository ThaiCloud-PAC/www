"use client";

import { useT } from "@/i18n";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";
import PlatformMap from "./PlatformMap";

/** One brain, every connection: from the channels a shop sells on, through
    the OMS and Packiko Core, to the carriers and the customer's door. */
export default function Platform() {
  const t = useT();
  const p = t.platform;

  return (
    <section id="platform" className="relative overflow-hidden bg-night-2 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <SectionHeading eyebrow={p.eyebrow} heading={p.heading} lead={p.lead} />
        <Reveal y={0} className="mt-12 sm:mt-16">
          <PlatformMap />
        </Reveal>
      </div>
    </section>
  );
}
