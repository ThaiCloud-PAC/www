import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("terms");

export default function Page() {
  return <StandardPage pageKey="terms" />;
}
