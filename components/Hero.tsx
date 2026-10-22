"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import type { SiteContent } from "@/data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero({ t }: { t: SiteContent["hero"] }) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-6 py-20">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft sm:text-xs sm:tracking-widest"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {t.availability}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-10 text-[13vw] font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          {t.nameLines[0]}
          <br />
          <span className="text-ink-faint">{t.nameLines[1]}</span>
          <span className="text-accent">.</span>
        </motion.h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div variants={item} className="max-w-xl">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
              {t.role}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft md:text-xl">
              {t.summary}
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-paper transition-colors duration-300 hover:bg-accent"
            >
              {t.ctaProjects}
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-ink/20 px-7 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t.ctaContact}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest text-ink-faint md:grid-cols-3"
        >
          <span>{t.role}</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {t.location}
          </span>
          <span className="hidden md:block">ES / EN</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
