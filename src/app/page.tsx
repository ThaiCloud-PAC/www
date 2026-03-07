import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return <StandardPage pageKey="home" />;
}
