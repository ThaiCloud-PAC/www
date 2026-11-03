import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";

export const dynamic = "force-static";

const PATHS = [
  "",
  "/packiko",
  "/solutions/online-sellers",
  "/solutions/3pl",
  "/customers",
  "/about",
  "/demo",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) => [
    {
      url: `${COMPANY.site}${path || "/"}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    },
    {
      url: `${COMPANY.site}/th${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    },
  ]);
}
