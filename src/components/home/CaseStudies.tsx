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
        color: "deep-amber" as const,
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
        color: "neon-cyan" as const,
    },
];

function GlassPreviewCard({
    study,
    onClick,
    side,
}: {
    study: typeof caseStudies[0];
    onClick: () => void;
    side: "left" | "right";
}) {
    return (
        <button
            onClick={onClick}
            className={`hidden lg:flex flex-col items-start gap-2 w-48 xl:w-56 p-5 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.03] group
                backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.3)]
                ${side === "left" ? "text-left" : "text-right"}
            `}
            aria-label={`Go to ${study.title}`}
        >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-sm ${study.color === "deep-amber" ? "bg-deep-amber/15" : "bg-neon-cyan/15"} ${side === "right" ? "self-end" : ""}`}>
                <study.icon className={`w-4 h-4 ${study.color === "deep-amber" ? "text-deep-amber/70" : "text-neon-cyan/70"}`} />
            </div>
            <div className={`${side === "right" ? "self-end" : ""}`}>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                    {study.industry.split(" / ")[0]}
                </p>
                <p className="text-sm font-display font-semibold text-white/50 group-hover:text-white/70 transition-colors mt-0.5 leading-snug">
                    {study.title}
                </p>
            </div>
            <div className={`flex items-center gap-1 text-[11px] font-medium ${study.color === "deep-amber" ? "text-deep-amber/40 group-hover:text-deep-amber/70" : "text-neon-cyan/40 group-hover:text-neon-cyan/70"} transition-colors ${side === "right" ? "self-end flex-row-reverse" : ""}`}>
                {side === "left" && <ChevronLeft className="w-3 h-3" />}
                <span>View</span>
                {side === "right" && <ChevronRight className="w-3 h-3" />}
            </div>
        </button>
    );
}

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 200 : -200,
        opacity: 0,
        scale: 0.95,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 200 : -200,
        opacity: 0,
        scale: 0.95,
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

    const goTo = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const study = caseStudies[currentIndex];
    const prevIndex = currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === caseStudies.length - 1 ? 0 : currentIndex + 1;
    const prevStudy = caseStudies[prevIndex];
    const nextStudy = caseStudies[nextIndex];

    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-void via-gray-950 to-void overflow-hidden">
            <div className="max-w-7xl mx-auto">
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

                <div className="relative flex items-stretch justify-center gap-6">
                    <div className="flex items-center self-center">
                        <GlassPreviewCard
                            study={prevStudy}
                            onClick={() => paginate(-1)}
                            side="left"
                        />
                    </div>

                    <div className="flex-1 max-w-3xl min-w-0">
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
                                    className="relative rounded-2xl bg-card-bg border border-card-border overflow-hidden"
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
                    </div>

                    <div className="flex items-center self-center">
                        <GlassPreviewCard
                            study={nextStudy}
                            onClick={() => paginate(1)}
                            side="right"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 mt-8">
                    <button
                        onClick={() => paginate(-1)}
                        className="lg:hidden w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-deep-amber/50 hover:bg-deep-amber/10 transition-all duration-300 cursor-pointer"
                        aria-label="Previous case study"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                        {caseStudies.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goTo(index)}
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
                        className="lg:hidden w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-deep-amber/50 hover:bg-deep-amber/10 transition-all duration-300 cursor-pointer"
                        aria-label="Next case study"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
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
