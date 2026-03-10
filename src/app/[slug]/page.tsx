import { notFound } from "next/navigation";
import { SimplePageContent, buildMetadata } from "@/components/site-shell";
import { simplePages } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(simplePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = simplePages[slug];

  if (!page) {
    return buildMetadata();
  }

  return buildMetadata(page.title);
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!simplePages[slug]) {
    notFound();
  }

  return <SimplePageContent slug={slug} />;
}
