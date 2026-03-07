import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("about");

export default function Page() {
  return <StandardPage pageKey="about" />;
}
