"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { caseStudies, filterTabs, type CaseStudy } from "@/data/caseStudies";

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

    const filteredStudies =
        activeFilter === "all"
            ? caseStudies
            : caseStudies.filter((s) => s.industry_tags.includes(activeFilter));

    const renderParagraphs = (text: string) =>
        text.split("\n\n").map((p, i) => (
            <p key={i} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                {p}
            </p>
        ));

    return (
        <main className="relative bg-void min-h-screen">
            <Navbar />

            <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-deep-amber text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Projects
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Industry-specific{" "}
                        <span className="text-neon-cyan">AI solutions</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Industry-specific AI solutions for manufacturing, FMCG, and supply
                        chain operations.
                    </p>
                </div>
            </section>

            <section className="px-4 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-3 mb-12 justify-center">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveFilter(tab.value)}
                                className={`px-5 py-2 text-sm font-medium rounded-full border transition-colors ${
                                    activeFilter === tab.value
                                        ? "bg-neon-cyan/10 border-neon-cyan/50 text-neon-cyan"
                                        : "border-card-border text-gray-400 hover:border-gray-500 hover:text-white"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className="rounded-2xl bg-card-bg border border-card-border hover:border-neon-cyan/30 transition-colors p-6 flex flex-col"
                            >
                                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">
                                    {study.industry_label}
                                </span>

                                <p className="text-3xl md:text-4xl font-bold text-neon-cyan">
                                    {study.hero_stat}
                                </p>
                                <p className="text-gray-500 text-sm mt-1 mb-4">
                                    {study.stat_context}
                                </p>

                                <h3 className="text-lg font-bold text-white mb-4">
                                    {study.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {study.pain_point_tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {study.pain_point_tags.length > 4 && (
                                        <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10">
                                            +{study.pain_point_tags.length - 4}
                                        </span>
                                    )}
                                </div>

                                <button
                                    onClick={() => setSelectedStudy(study)}
                                    className="mt-auto text-neon-cyan text-sm font-medium hover:underline cursor-pointer"
                                >
                                    Explore →
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedStudy && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedStudy(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full max-w-3xl bg-card-bg rounded-2xl border border-card-border max-h-[90vh] overflow-y-auto p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedStudy(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10 uppercase tracking-wider font-semibold">
                                    {selectedStudy.industry_label}
                                </span>
                                {selectedStudy.technology.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-4xl md:text-5xl font-bold text-neon-cyan">
                                {selectedStudy.hero_stat}
                            </p>
                            <p className="text-gray-500 text-sm mt-1 mb-4">
                                {selectedStudy.stat_context}
                            </p>

                            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                                {selectedStudy.title}
                            </h2>

                            <hr className="border-card-border mb-8" />

                            <div className="mb-8">
                                <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
                                    THE PROBLEM
                                </h3>
                                {renderParagraphs(selectedStudy.the_problem)}
                            </div>

                            <div className="mb-8">
                                <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
                                    WHY THIS MATTERS
                                </h3>
                                {renderParagraphs(selectedStudy.why_it_matters)}
                            </div>

                            <div className="mb-8">
                                <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
                                    OUR APPROACH
                                </h3>
                                {renderParagraphs(selectedStudy.our_approach)}
                            </div>

                            <div className="mb-8">
                                <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
                                    WHAT THIS COULD UNLOCK
                                </h3>
                                <ul className="space-y-2">
                                    {selectedStudy.what_this_could_unlock.map((item, i) => (
                                        <li
                                            key={i}
                                            className="text-gray-300 leading-relaxed flex items-start gap-2"
                                        >
                                            <span className="text-neon-cyan mt-1.5 text-xs">●</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 rounded-xl bg-neon-cyan/5 border border-neon-cyan/20 text-center mb-8">
                                <p className="text-gray-300 mb-4">
                                    {selectedStudy.cta_text}
                                </p>
                                <Link
                                    href={selectedStudy.cta_link}
                                    className="inline-flex items-center px-6 py-3 bg-neon-cyan text-black font-semibold rounded-full hover:bg-white transition-colors"
                                >
                                    Get in Touch
                                </Link>
                            </div>

                            <button
                                onClick={() => setSelectedStudy(null)}
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                ← Back to all
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
