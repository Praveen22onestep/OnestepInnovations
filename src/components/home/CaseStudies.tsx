"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
                        Real Results. Real Impact.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how organizations are transforming challenges into competitive advantages.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative rounded-2xl bg-card-bg border border-card-border hover:border-neon-cyan/30 transition-colors p-6"
                        >
                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                {study.industry_label}
                            </span>

                            <div className="mt-4 mb-3">
                                <span className="text-3xl md:text-4xl font-bold text-neon-cyan">
                                    {study.hero_stat}
                                </span>
                                <p className="text-gray-500 text-sm mt-1">
                                    {study.stat_context}
                                </p>
                            </div>

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

                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-1 text-neon-cyan text-sm font-medium hover:underline"
                            >
                                Explore
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/projects"
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
