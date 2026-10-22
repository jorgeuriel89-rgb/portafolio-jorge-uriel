import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteName, type SiteContent } from "@/data/portfolio";

export default function Footer({
  t,
  socials,
}: {
  t: SiteContent["footer"];
  socials: SiteContent["socials"];
}) {
  return (
    <footer id="contact" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {t.heading}
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-paper/60">{t.sub}</p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex h-14 items-center gap-3 rounded-full bg-accent px-8 text-base font-medium text-paper transition-transform duration-300 hover:scale-[1.03]"
            >
              <Mail className="size-5" />
              {t.emailLabel}
            </a>
            <div className="flex items-center gap-6">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center gap-1.5 font-mono text-sm uppercase tracking-widest text-paper/70 transition-colors hover:text-accent"
              >
                GitHub
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center gap-1.5 font-mono text-sm uppercase tracking-widest text-paper/70 transition-colors hover:text-accent"
              >
                LinkedIn
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 font-mono text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {siteName}
          </span>
          <span>{t.rights}</span>
        </div>
      </div>
    </footer>
  );
}
