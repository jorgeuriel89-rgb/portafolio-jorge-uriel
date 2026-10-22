import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LangAttribute from "@/components/LangAttribute";
import { content, defaultLang, languages, type Lang } from "@/data/portfolio";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = content[lang as Lang]?.metadata ?? content[defaultLang].metadata;
  return {
    title: t.title,
    description: t.description,
    alternates: {
      languages: { es: "/es", en: "/en" },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) {
    notFound();
  }
  return (
    <>
      <LangAttribute lang={lang} />
      {children}
    </>
  );
}
