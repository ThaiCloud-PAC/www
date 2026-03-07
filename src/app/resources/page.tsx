import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("resources");

export default function Page() {
  return <StandardPage pageKey="resources" />;
}
