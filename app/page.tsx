import Link from "next/link";
import { defaultLang, languages } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <meta httpEquiv="refresh" content={`0; url=/${defaultLang}`} />
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
        Jorge Uriel Gorgonio
      </p>
      <div className="flex gap-4">
        {languages.map((lang) => (
          <Link
            key={lang}
            href={`/${lang}`}
            className="rounded-full border border-line px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            {lang === "es" ? "Español" : "English"}
          </Link>
        ))}
      </div>
    </main>
  );
}
