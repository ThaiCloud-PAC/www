import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("platform");

export default function Page() {
  return <StandardPage pageKey="platform" />;
}
