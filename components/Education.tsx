import { BadgeCheck, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/data/portfolio";

export default function Education({ t }: { t: SiteContent["education"] }) {
  return (
    <section id="education" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <Reveal>
            <h3 className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <GraduationCap className="size-4" />
              {t.eduLabel}
            </h3>
            <ul className="mt-6 space-y-8">
              {t.items.map((edu) => (
                <li key={edu.degree}>
                  <p className="font-mono text-sm text-ink-faint">{edu.period}</p>
                  <h4 className="mt-1.5 text-xl font-semibold">{edu.degree}</h4>
                  <p className="font-mono text-sm uppercase tracking-wider text-ink-soft">
                    {edu.institution}
                  </p>
                  <p className="mt-2 leading-relaxed text-ink-soft">{edu.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <BadgeCheck className="size-4" />
              {t.certLabel}
            </h3>
            <ul className="mt-6">
              {t.certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="border-b border-line py-4 transition-colors hover:text-accent"
                >
                  <p className="font-medium">{cert.name}</p>
                  <p className="mt-0.5 font-mono text-sm text-ink-faint">
                    {cert.issuer}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
