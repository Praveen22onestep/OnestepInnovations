"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatWeSolveCard from "@/components/WhatWeSolveCard";
import { caseStudies } from "@/data/caseStudies";

const featuredStudies = caseStudies.filter((s) => s.featured);

export default function CaseStudies() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-deep-amber text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Solve
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Real Problems. Real Solutions.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-specific AI solutions for manufacturing, FMCG, and supply chain operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStudies.map((study, index) => (
            <WhatWeSolveCard key={study.id} study={study} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/what-we-solve"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            Explore all solutions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
