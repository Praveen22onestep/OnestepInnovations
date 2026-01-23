"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
    },
    {
        threshold: 0.4,
        text: "We bring order through Innovation.",
        subtext: "Six pillars of transformation. One seamless journey.",
    },
    {
        threshold: 0.8,
        text: "Where technology meets human impact.",
        subtext: "Your transformation starts with one step.",
    },
];

export default function ScrollExperience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Transform values for section visibility
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.18, 0.22, 0.35, 0.4], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.38, 0.42, 0.75, 0.8], [0, 1, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.78, 0.82, 1], [0, 1, 1]);

    // Simplified animations
    const pulseOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [0.5, 0.8, 0]);

    // Pillars stagger - pre-computed transforms
    const pillarOpacities = useMemo(() => {
        return services.map((_, index) => ({
            inputRange: [0.4 + index * 0.05, 0.45 + index * 0.05],
            outputRange: [0, 1] as [number, number]
        }));
    }, []);

    // Logo formation
    const logoScale = useTransform(scrollYProgress, [0.8, 0.95], [0.8, 1]);
    const logoOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background */}
                <div className="absolute inset-0 bg-void" />

                {/* Section 1: The Hook */}
                <motion.div
                    style={{ opacity: opacity1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('/hero-bg.png')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/50" />

                    <motion.div
                        style={{ opacity: pulseOpacity }}
                        className="w-24 h-24 rounded-full bg-deep-amber/50"
                    />
                </motion.div>

                {/* Section 1 Text */}
                <motion.div
                    style={{ opacity: opacity1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 px-2">
                        {textSections[0].text}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 px-4">
                        {textSections[0].subtext}
                    </p>

                    <div className="absolute bottom-8 left-8 flex flex-col items-center gap-2 animate-bounce">
                        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
                        <ChevronDown className="w-5 h-5 text-deep-amber" />
                    </div>
                </motion.div>

                {/* Section 2: The Problem */}
                <motion.div
                    style={{ opacity: opacity2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-void to-void" />
                    
                    {/* Simple static indicators */}
                    <div className="absolute top-1/4 left-10 md:left-20 text-red-500/60 font-mono text-sm animate-pulse">
                        -20% ROI
                    </div>
                    <div className="absolute bottom-1/4 right-10 md:right-20 text-red-500/60 font-mono text-sm animate-pulse delay-500">
                        Time Lost
                    </div>
                </motion.div>

                {/* Section 2 Text */}
                <motion.div
                    style={{ opacity: opacity2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 px-2">
                        {textSections[1].text}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 px-4">
                        {textSections[1].subtext}
                    </p>
                </motion.div>

                {/* Section 3: The Solution - 6 Pillars */}
                <motion.div
                    style={{ opacity: opacity3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl px-2 sm:px-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                style={{
                                    opacity: useTransform(
                                        scrollYProgress,
                                        pillarOpacities[index].inputRange,
                                        pillarOpacities[index].outputRange
                                    ),
                                }}
                                className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-card-bg/50 border border-card-border"
                            >
                                <service.icon
                                    className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                                    style={{ color: service.color }}
                                />
                                <span className="text-[10px] sm:text-xs md:text-sm text-center text-gray-300 font-medium leading-tight">
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
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 px-2">
                        {textSections[2].text}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 px-4">
                        {textSections[2].subtext}
                    </p>
                </motion.div>

                {/* Section 4: The Future - Logo & CTA */}
                <motion.div
                    style={{ opacity: opacity4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20"
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
                            priority
                        />
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 px-2">
                        {textSections[3].text}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 mb-8 px-4">
                        {textSections[3].subtext}
                    </p>

                    <a
                        href="https://outlook.office.com/bookwithme/user/25bbafd7aa564389bcda37e8b5b8e918@onestepinnovations.com.au/meetingtype/2CuJnw-1HkiM_lr5zCs25Q2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-deep-amber text-black font-semibold rounded-full text-base sm:text-lg hover:bg-white transition-colors duration-200"
                    >
                        Book Your Consultation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
