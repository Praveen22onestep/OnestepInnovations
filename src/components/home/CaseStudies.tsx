"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Building2, FileStack } from "lucide-react";

const caseStudies = [
    {
        id: 1,
        title: "24\u00d77 Enterprise Voice AI",
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

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
    }),
};

export default function CaseStudies() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            const next = prev + newDirection;
            if (next < 0) return caseStudies.length - 1;
            if (next >= caseStudies.length) return 0;
            return next;
        });
    };

    const study = caseStudies[currentIndex];

    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
            <div className="max-w-4xl mx-auto">
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

                <div className="relative">
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={study.id}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="group relative rounded-2xl bg-card-bg border border-card-border overflow-hidden"
                            >
                                <div className={`p-6 md:p-8 border-b border-card-border ${study.color === "deep-amber" ? "bg-gradient-to-r from-deep-amber/10 to-transparent" : "bg-gradient-to-r from-neon-cyan/10 to-transparent"}`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${study.color === "deep-amber" ? "bg-deep-amber/20" : "bg-neon-cyan/20"}`}>
                                            <study.icon className={`w-6 h-6 ${study.color === "deep-amber" ? "text-deep-amber" : "text-neon-cyan"}`} />
                                        </div>
                                        <div>
                                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                                {study.industry}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-1">
                                                {study.title}
                                            </h3>
                                            <p className={`text-sm font-medium ${study.color === "deep-amber" ? "text-deep-amber" : "text-neon-cyan"}`}>
                                                {study.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 space-y-6">
                                    <div>
                                        <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                                            The Challenge
                                        </h4>
                                        <p className="text-gray-300">
                                            {study.challenge}
                                        </p>
                                    </div>

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

                                    <div className={`p-4 rounded-xl ${study.color === "deep-amber" ? "bg-deep-amber/5 border border-deep-amber/20" : "bg-neon-cyan/5 border border-neon-cyan/20"}`}>
                                        <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                                            The Outcome
                                        </h4>
                                        <p className={`font-medium ${study.color === "deep-amber" ? "text-deep-amber" : "text-neon-cyan"}`}>
                                            {study.outcome}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={() => paginate(-1)}
                            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-deep-amber/50 hover:bg-deep-amber/10 transition-all duration-300 cursor-pointer"
                            aria-label="Previous case study"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-2">
                            {caseStudies.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                        index === currentIndex
                                            ? "w-8 bg-deep-amber"
                                            : "w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                                    aria-label={`Go to case study ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => paginate(1)}
                            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-deep-amber/50 hover:bg-deep-amber/10 transition-all duration-300 cursor-pointer"
                            aria-label="Next case study"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
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
                        View all projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
