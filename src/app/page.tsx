import { HomePageContent, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("Home");

export default function HomePage() {
  return <HomePageContent />;
}
