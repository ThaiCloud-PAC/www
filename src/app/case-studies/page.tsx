import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("caseStudies");

export default function Page() {
  return <StandardPage pageKey="caseStudies" />;
}
