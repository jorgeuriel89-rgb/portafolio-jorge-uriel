import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
