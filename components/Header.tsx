import Link from "next/link";
import type { Lang, NavItem } from "@/data/portfolio";

export default function Header({ lang, nav }: { lang: Lang; nav: NavItem[] }) {
  const otherLang = lang === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href={`/${lang}`}
          className="font-mono text-sm font-semibold uppercase tracking-[0.2em] transition-colors hover:text-accent"
        >
          J. Gorgonio
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href={`/${otherLang}`}
          className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
        >
          {otherLang}
        </Link>
      </div>
    </header>
  );
}
