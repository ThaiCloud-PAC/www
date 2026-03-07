import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("technology");

export default function Page() {
  return <StandardPage pageKey="technology" />;
}
