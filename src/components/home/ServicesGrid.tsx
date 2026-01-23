"use client";

import { motion } from "framer-motion";
import {
    Cog,
    Brain,
    Cpu,
    TrendingUp,
    RefreshCw,
    GraduationCap,
    ArrowUpRight
} from "lucide-react";

const services = [
    {
        name: "Business Process Improvement",
        description: "Streamline operations, eliminate bottlenecks, and optimize workflows for maximum efficiency and cost reduction.",
        icon: Cog,
        color: "deep-amber",
        gradient: "from-deep-amber/20 to-transparent",
    },
    {
        name: "AI Process Automation",
        description: "Leverage intelligent automation to handle repetitive tasks, reduce errors, and free your team for strategic work.",
        icon: Brain,
        color: "neon-cyan",
        gradient: "from-neon-cyan/20 to-transparent",
    },
    {
        name: "AIOT Implementation",
        description: "Connect your physical and digital worlds with smart IoT solutions powered by AI for real-time insights and control.",
        icon: Cpu,
        color: "neon-cyan",
        gradient: "from-neon-cyan/20 to-transparent",
    },
    {
        name: "Strategic Management",
        description: "Develop and execute winning strategies with data-driven insights that align your organization towards growth.",
        icon: TrendingUp,
        color: "deep-amber",
        gradient: "from-deep-amber/20 to-transparent",
    },
    {
        name: "Change Management",
        description: "Navigate organizational transformation smoothly with proven methodologies that ensure adoption and success.",
        icon: RefreshCw,
        color: "deep-amber",
        gradient: "from-deep-amber/20 to-transparent",
    },
    {
        name: "Training and Development",
        description: "Build capable teams with customized training programs that enhance skills and drive continuous improvement.",
        icon: GraduationCap,
        color: "neon-cyan",
        gradient: "from-neon-cyan/20 to-transparent",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ServicesGrid() {
    return (
        <section id="services" className="relative py-24 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Six Pillars of Transformation
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We combine technology and strategy to build organizations that are efficient,
                        intelligent, and ready for the future.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            variants={itemVariants}
                            className={`group relative p-6 rounded-2xl bg-card-bg border border-card-border overflow-hidden transition-all duration-300 hover:border-${service.color}/50 gradient-border cursor-pointer`}
                        >
                            {/* Gradient overlay on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <div
                                    className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <service.icon
                                        className={`w-7 h-7 text-${service.color}`}
                                    />
                                </div>

                                <h3 className="text-xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                                    {service.name}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative element */}
                            <div
                                className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-${service.color}/5 blur-2xl group-hover:bg-${service.color}/10 transition-all duration-500`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
