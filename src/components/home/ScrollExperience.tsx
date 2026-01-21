"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Cog,
    Brain,
    Cpu,
    TrendingUp,
    RefreshCw,
    GraduationCap,
    ArrowRight,
    ChevronDown
} from "lucide-react";

const services = [
    { name: "Business Process Improvement", icon: Cog, color: "#ffbf00" },
    { name: "AI Process Automation", icon: Brain, color: "#00f0ff" },
    { name: "AIOT Implementation", icon: Cpu, color: "#00f0ff" },
    { name: "Strategic Management", icon: TrendingUp, color: "#ffbf00" },
    { name: "Change Management", icon: RefreshCw, color: "#ffbf00" },
    { name: "Training and Development", icon: GraduationCap, color: "#00f0ff" },
];

const textSections = [
    {
        threshold: 0,
        text: "Business is complex.",
        subtext: "But running it shouldn't be."
    },
    {
        threshold: 0.2,
        text: "Inefficiency costs you growth.",
        subtext: "Manual tasks eat your time. Silos kill your momentum.",
        showStats: true
    },
    {
        threshold: 0.4,
        text: "We bring order through Innovation.",
        subtext: "Six pillars of transformation. One seamless journey.",
        showPillars: true
    },
    {
        threshold: 0.8,
        text: "Strategic. Automated. Connected.",
        subtext: "Your transformation starts with one step.",
        showCTA: true
    },
];

export default function ScrollExperience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Transform values for animations
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.18, 0.22, 0.35, 0.4], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.38, 0.42, 0.75, 0.8], [0, 1, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.78, 0.82, 1], [0, 1, 1]);

    // Light/particle animations
    const pulseScale = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1.5, 3]);
    const pulseOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [0.3, 0.8, 0]);

    // Chaos animations
    const chaosRotate = useTransform(scrollYProgress, [0.2, 0.4], [0, 360]);
    const chaosScale = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);

    // Pillars animations
    const pillarProgress = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

    // Logo formation
    const logoScale = useTransform(scrollYProgress, [0.8, 0.95], [0.5, 1]);
    const logoOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

    return (
        <div ref={containerRef} className="relative h-[500vh]">
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-void to-void" />

                {/* Section 1: The Hook - Pulsing Light */}
                <motion.div
                    style={{ opacity: opacity1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {/* Hero Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('/hero-bg.png')" }}
                    />
                    {/* Dark overlay for text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/50" />

                    <motion.div
                        style={{ scale: pulseScale, opacity: pulseOpacity }}
                        className="w-32 h-32 rounded-full bg-deep-amber blur-3xl z-10"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-4 h-4 rounded-full bg-deep-amber z-10"
                    />
                </motion.div>

                {/* Section 1 Text */}
                <motion.div
                    style={{ opacity: opacity1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4"
                    >
                        {textSections[0].text}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-xl text-gray-400"
                    >
                        {textSections[0].subtext}
                    </motion.p>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ delay: 1.5, y: { duration: 1.5, repeat: Infinity } }}
                        className="absolute bottom-8 left-8 flex flex-col items-center gap-2"
                    >
                        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
                        <ChevronDown className="w-5 h-5 text-deep-amber" />
                    </motion.div>
                </motion.div>

                {/* Section 2: The Chaos */}
                <motion.div
                    style={{ opacity: opacity2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {/* Chaotic particles animation */}
                    <motion.div
                        style={{ rotate: chaosRotate, scale: chaosScale }}
                        className="relative w-96 h-96"
                    >
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                                    y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                                    scale: [1, 1.5, 0.5, 1],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute w-3 h-3 rounded-full bg-chaos-red"
                                style={{
                                    left: `${50 + (Math.random() - 0.5) * 80}%`,
                                    top: `${50 + (Math.random() - 0.5) * 80}%`,
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Stats overlay */}
                    <div className="absolute top-1/4 left-10 md:left-20">
                        <motion.div
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-chaos-red font-mono text-sm"
                        >
                            -20% ROI
                        </motion.div>
                    </div>
                    <div className="absolute bottom-1/4 right-10 md:right-20">
                        <motion.div
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            className="text-chaos-red font-mono text-sm"
                        >
                            Time Lost
                        </motion.div>
                    </div>
                </motion.div>

                {/* Section 2 Text */}
                <motion.div
                    style={{ opacity: opacity2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
                        {textSections[1].text}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {textSections[1].subtext}
                    </p>
                </motion.div>

                {/* Section 3: The Solution - 6 Pillars */}
                <motion.div
                    style={{ opacity: opacity3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl px-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                style={{
                                    opacity: useTransform(
                                        pillarProgress,
                                        [index * 0.15, index * 0.15 + 0.1],
                                        [0, 1]
                                    ),
                                    y: useTransform(
                                        pillarProgress,
                                        [index * 0.15, index * 0.15 + 0.1],
                                        [50, 0]
                                    ),
                                }}
                                className="flex flex-col items-center p-4 rounded-xl bg-card-bg/50 border border-card-border"
                            >
                                <service.icon
                                    className="w-10 h-10 mb-2"
                                    style={{ color: service.color }}
                                />
                                <span className="text-xs md:text-sm text-center text-gray-300 font-medium">
                                    {service.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Section 3 Text */}
                <motion.div
                    style={{ opacity: opacity3 }}
                    className="absolute top-20 md:top-32 inset-x-0 text-center px-4 z-10"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
                        {textSections[2].text}
                    </h2>
                    <p className="text-lg text-gray-400">
                        {textSections[2].subtext}
                    </p>
                </motion.div>

                {/* Section 4: The Future - Logo Formation */}
                <motion.div
                    style={{ opacity: opacity4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                    <motion.div
                        style={{ scale: logoScale, opacity: logoOpacity }}
                        className="mb-8"
                    >
                        <Image
                            src="/logo.png"
                            alt="One Step Innovations"
                            width={200}
                            height={200}
                            className="glow-amber"
                        />
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
                        {textSections[3].text}
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        {textSections[3].subtext}
                    </p>

                    <a
                        href="https://outlook.office.com/bookwithme/user/25bbafd7aa564389bcda37e8b5b8e918@onestepinnovations.com.au/meetingtype/2CuJnw-1HkiM_lr5zCs25Q2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-deep-amber text-black font-semibold rounded-full text-lg hover:bg-white transition-all duration-300 hover:scale-105 glow-amber"
                    >
                        Book Your Consultation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
