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
    openGraph: {
      type: "website",
      siteName: "Jorge Uriel Gorgonio",
      title: t.title,
      description: t.description,
      url: `/${lang}`,
      locale: lang === "es" ? "es_MX" : "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 627,
          alt: "Jorge Uriel Gorgonio Cobaxin — Full Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
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
