import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/data/portfolio";

export default function Stack({ t }: { t: SiteContent["stack"] }) {
  const allItems = t.groups.flatMap((g) => g.items);
  const marquee = [...allItems, ...allItems];

  return (
    <section id="stack" className="border-t border-line">
      <div className="overflow-hidden border-b border-line py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {marquee.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.2em] text-ink-faint"
            >
              {item}
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {t.groups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                {group.label}
              </h3>
              <ul className="mt-5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-3.5 text-lg font-medium transition-colors hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
