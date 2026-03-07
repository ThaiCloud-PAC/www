import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("pricing");

export default function Page() {
  return <StandardPage pageKey="pricing" />;
}
