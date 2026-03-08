import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("privacy");

export default function Page() {
  return <StandardPage pageKey="privacy" />;
}
