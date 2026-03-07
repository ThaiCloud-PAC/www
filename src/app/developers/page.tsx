import { StandardPage, buildMetadata } from "@/components/site-shell";

export const metadata = buildMetadata("developers");

export default function Page() {
  return <StandardPage pageKey="developers" />;
}
