import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${COMPANY.site}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
