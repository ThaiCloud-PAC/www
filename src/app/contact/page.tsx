import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("contact");

export default function Page() {
  return <StandardPage pageKey="contact" />;
}
