import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { Project, SiteContent } from "@/data/portfolio";

const spans = ["lg:col-span-12", "lg:col-span-7", "lg:col-span-5"];

function Card({
  project,
  index,
  viewLabel,
  className,
}: {
  project: Project;
  index: number;
  viewLabel: string;
  className?: string;
}) {
  const inner = (
    <>
      <div className="flex items-start justify-between">
        <span className="font-mono text-sm text-ink-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        {(project.url || project.links) && (
          <ArrowUpRight className="size-5 text-ink-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
        )}
      </div>
      <div className="mt-12 md:mt-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.subtitle}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
          {project.description}
        </p>
        {project.highlights && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm text-ink-soft"
              >
                <span className="mt-1 text-[10px] text-accent">◆</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-soft"
            >
              {tech}
            </li>
          ))}
        </ul>
        {(project.url || project.links) && (
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-ink-faint transition-colors hover:text-accent"
              >
                {viewLabel}
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
            {project.links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs tracking-wider text-ink-soft transition-colors hover:text-accent"
              >
                {link.label}
                <ArrowUpRight className="size-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const classes = `group flex flex-col justify-between rounded-2xl border border-line p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.3)] md:p-10 ${className ?? ""}`;

  return <article className={classes}>{inner}</article>;
}

export default function Projects({ t }: { t: SiteContent["projects"] }) {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {t.items.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08} className={spans[i % spans.length]}>
              <Card
                project={project}
                index={i}
                viewLabel={t.viewLabel}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
