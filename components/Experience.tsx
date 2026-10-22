import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/data/portfolio";

export default function Experience({ t }: { t: SiteContent["experience"] }) {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-16">
          {t.items.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <article className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-6 md:py-10">
                <p className="font-mono text-sm text-ink-faint md:col-span-3">
                  {job.period}
                </p>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold md:text-2xl">{job.role}</h3>
                  <p className="mt-1 font-mono text-sm uppercase tracking-wider text-accent">
                    {job.company}
                  </p>
                </div>
                <p className="leading-relaxed text-ink-soft md:col-span-5">
                  {job.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
