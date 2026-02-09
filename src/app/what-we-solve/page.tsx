"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatWeSolveCard from "@/components/WhatWeSolveCard";
import { caseStudies, industryFilters } from "@/data/caseStudies";

export default function WhatWeSolvePage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter((s) => s.industryTags.includes(activeFilter));

  return (
    <main className="relative">
      <Navbar />

      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-deep-amber text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Solve
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Industry-Specific AI{" "}
            <span className="text-neon-cyan">Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Industry-specific AI solutions for manufacturing, FMCG, and supply chain operations.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-void">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industryFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200 cursor-pointer ${
                  activeFilter === filter.value
                    ? "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30"
                    : "bg-card-bg text-gray-400 border-card-border hover:border-gray-500 hover:text-gray-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study, index) => (
              <WhatWeSolveCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-void">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s discuss how we can help you achieve similar results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-deep-amber text-black font-semibold rounded-full text-lg hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
