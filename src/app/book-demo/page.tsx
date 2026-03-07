import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("bookDemo");

export default function Page() {
  return <StandardPage pageKey="bookDemo" />;
}
