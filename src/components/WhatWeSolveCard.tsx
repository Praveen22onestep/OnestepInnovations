"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

interface WhatWeSolveCardProps {
  study: CaseStudy;
  index: number;
}

export default function WhatWeSolveCard({ study, index }: WhatWeSolveCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleTags = study.painPointTags.slice(0, 4);
  const remainingCount = study.painPointTags.length - 4;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative rounded-2xl bg-card-bg border border-card-border overflow-hidden hover:border-neon-cyan/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      >
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-5">
            <span className="px-3 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
              {study.industryLabel}
            </span>
            <study.icon className="w-5 h-5 text-gray-500" />
          </div>

          <div className="mb-4">
            <span className="text-3xl md:text-4xl font-display font-bold text-neon-cyan leading-none">
              {study.heroStat}
            </span>
            <p className="text-sm text-gray-500 mt-1">{study.statContext}</p>
          </div>

          <h3 className="text-lg font-display font-bold text-white mb-4 leading-snug">
            {study.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10"
              >
                {tag}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-500 border border-white/10">
                +{remainingCount}
              </span>
            )}
          </div>

          <button
            onClick={() => setIsExpanded(true)}
            className="mt-auto inline-flex items-center gap-1 text-sm text-neon-cyan hover:text-white transition-colors cursor-pointer"
          >
            Explore <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={() => setIsExpanded(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[520px] md:w-[600px] bg-card-bg border-l border-card-border z-50 overflow-y-auto"
            >
              <div className="p-6 md:p-8">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="px-3 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                    {study.industryLabel}
                  </span>
                  {study.technology.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-display font-bold text-neon-cyan leading-none">
                    {study.heroStat}
                  </span>
                  <p className="text-sm text-gray-500 mt-2">{study.statContext}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 leading-snug">
                  {study.title}
                </h2>

                <div className="w-full h-px bg-card-border mb-8" />

                <div className="space-y-8">
                  <div>
                    <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
                      The Problem
                    </h4>
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {study.theProblem}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
                      Why This Matters
                    </h4>
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {study.whyItMatters}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
                      Our Approach
                    </h4>
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {study.ourApproach}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
                      What This Could Unlock
                    </h4>
                    <ul className="space-y-2">
                      {study.whatThisCouldUnlock.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <span className="text-neon-cyan mt-1.5 text-xs">&#9679;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="w-full h-px bg-card-border my-8" />

                <div className="p-5 rounded-xl bg-neon-cyan/5 border border-neon-cyan/20 mb-6">
                  <p className="text-neon-cyan font-medium mb-3">{study.ctaText}</p>
                  <Link
                    href={study.ctaLink}
                    className="inline-flex items-center gap-2 text-sm text-white hover:text-neon-cyan transition-colors"
                  >
                    Book a consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <button
                  onClick={() => setIsExpanded(false)}
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to all
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
