import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("customers");

export default function Page() {
  return <StandardPage pageKey="customers" />;
}
