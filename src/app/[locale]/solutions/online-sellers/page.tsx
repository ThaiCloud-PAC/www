import { getTranslations, setRequestLocale } from "next-intl/server";
import { SolutionPage } from "@/components/SolutionPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SolutionsSellers.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function OnlineSellersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SolutionPage namespace="SolutionsSellers" />;
}
