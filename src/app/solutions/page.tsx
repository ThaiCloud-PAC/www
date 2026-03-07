import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("solutions");

export default function Page() {
  return <StandardPage pageKey="solutions" />;
}
