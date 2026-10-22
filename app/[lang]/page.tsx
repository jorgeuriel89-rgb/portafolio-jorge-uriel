import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { content, defaultLang, languages, type Lang } from "@/data/portfolio";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = (languages.includes(lang as Lang) ? lang : defaultLang) as Lang;
  const t = content[l];

  return (
    <>
      <Header lang={l} nav={t.header.nav} />
      <main>
        <Hero t={t.hero} />
        <Experience t={t.experience} />
        <Projects t={t.projects} />
        <Stack t={t.stack} />
        <Education t={t.education} />
      </main>
      <Footer t={t.footer} socials={t.socials} />
    </>
  );
}
