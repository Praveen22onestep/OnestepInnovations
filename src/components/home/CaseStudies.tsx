"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, FileStack } from "lucide-react";

const caseStudies = [
    {
        id: 1,
        title: "24×7 Enterprise Voice AI",
        subtitle: "Transforming Field Operations Support",
        industry: "Heavy Equipment & Operations",
        challenge: "Round-the-clock expert guidance for distributed field teams",
        outcome: "Measurable reduction in response times and incident documentation automation",
        painPoints: ["Extended fault diagnosis time", "Inconsistent procedure adherence", "Manual documentation", "Safety compliance gaps"],
        icon: Building2,
        color: "deep-amber",
    },
    {
        id: 2,
        title: "Intelligent File Sync",
        subtitle: "Enterprise Data Management Without the Chaos",
        industry: "Enterprise Software / Information Management",
        challenge: "Managing file synchronization across distributed teams with consistency and compliance",
        outcome: "Reduced storage costs, eliminated version conflicts, accelerated team collaboration",
        painPoints: ["Multiple file versions", "Redundant storage", "Wasted search time", "Compliance risks", "Team friction"],
        icon: FileStack,
        color: "neon-cyan",
    },
];

export default function CaseStudies() {
    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-deep-amber text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Real Results. Real Impact.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how we&apos;ve helped organizations transform challenges into competitive advantages.
                    </p>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative rounded-2xl bg-card-bg border border-card-border overflow-hidden"
                        >
                            {/* Header */}
                            <div className={`p-6 border-b border-card-border bg-gradient-to-r from-${study.color}/10 to-transparent`}>
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-${study.color}/20 flex items-center justify-center flex-shrink-0`}>
                                        <study.icon className={`w-6 h-6 text-${study.color}`} />
                                    </div>
                                    <div>
                                        <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                            {study.industry}
                                        </span>
                                        <h3 className="text-xl font-display font-bold text-white mt-1">
                                            {study.title}
                                        </h3>
                                        <p className={`text-${study.color} text-sm font-medium`}>
                                            {study.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6">
                                {/* Challenge */}
                                <div>
                                    <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                                        The Challenge
                                    </h4>
                                    <p className="text-gray-300">
                                        {study.challenge}
                                    </p>
                                </div>

                                {/* Pain Points */}
                                <div>
                                    <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
                                        Key Pain Points Addressed
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {study.painPoints.map((point) => (
                                            <span
                                                key={point}
                                                className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10"
                                            >
                                                {point}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Outcome */}
                                <div className={`p-4 rounded-xl bg-${study.color}/5 border border-${study.color}/20`}>
                                    <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                                        The Outcome
                                    </h4>
                                    <p className={`text-${study.color} font-medium`}>
                                        {study.outcome}
                                    </p>
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
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
                        View all projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
