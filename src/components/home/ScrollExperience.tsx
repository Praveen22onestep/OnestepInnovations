"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const textSections = [
    {
        text: "Business is complex.",
        subtext: "But running it shouldn't be."
    },
    {
        text: "Inefficiency costs you growth.",
        subtext: "Manual tasks eat your time. Silos kill your momentum.",
    },
    {
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

    // Transform values for section visibility (3 sections now)
    const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.28, 0.38, 0.6, 0.68], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.63, 0.73, 1], [0, 1, 1]);

    // Pulsing light animation - starts small and expands
    const pulseScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1.5, 3]);
    const pulseOpacity = useTransform(scrollYProgress, [0, 0.2, 0.33], [0.3, 0.8, 0]);

    // Chaos animations for red dots
    const chaosRotate = useTransform(scrollYProgress, [0.3, 0.65], [0, 360]);
    const chaosScale = useTransform(scrollYProgress, [0.3, 0.45, 0.65], [0, 1, 0]);

    // Pre-computed particle positions to avoid hydration mismatch
    const particlePositions = useMemo(() => [
        { left: 15, top: 20, duration: 3.5, xMove: [-80, 60], yMove: [-50, 70] },
        { left: 75, top: 25, duration: 4.0, xMove: [70, -40], yMove: [-60, 50] },
        { left: 30, top: 70, duration: 3.2, xMove: [-50, 80], yMove: [40, -60] },
        { left: 65, top: 75, duration: 4.5, xMove: [60, -70], yMove: [50, -40] },
        { left: 45, top: 40, duration: 3.8, xMove: [-40, 50], yMove: [-30, 60] },
        { left: 55, top: 55, duration: 4.2, xMove: [50, -60], yMove: [60, -50] },
        { left: 25, top: 45, duration: 3.6, xMove: [-60, 40], yMove: [30, -40] },
        { left: 70, top: 50, duration: 4.0, xMove: [40, -50], yMove: [-40, 30] },
    ], []);

    // Logo formation
    const logoScale = useTransform(scrollYProgress, [0.65, 0.85], [0.8, 1]);
    const logoOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

    return (
        <div ref={containerRef} className="relative h-[300vh]">
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

                    {/* Expanding yellow dot */}
                    <motion.div
                        style={{ scale: pulseScale, opacity: pulseOpacity }}
                        className="w-32 h-32 rounded-full bg-deep-amber blur-2xl z-10"
                    />
                    {/* Center dot that pulses */}
                    <motion.div
                        animate={{ opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-4 h-4 rounded-full bg-deep-amber z-10"
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

                {/* Section 2: The Problem - Chaos */}
                <motion.div
                    style={{ opacity: opacity2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-void to-void" />
                    
                    {/* Chaotic floating red dots */}
                    <motion.div
                        style={{ rotate: chaosRotate, scale: chaosScale }}
                        className="relative w-96 h-96"
                    >
                        {particlePositions.map((particle, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    x: [0, particle.xMove[0], particle.xMove[1], 0],
                                    y: [0, particle.yMove[0], particle.yMove[1], 0],
                                    scale: [1, 1.5, 0.5, 1],
                                }}
                                transition={{
                                    duration: particle.duration,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute w-3 h-3 rounded-full bg-red-500"
                                style={{
                                    left: `${particle.left}%`,
                                    top: `${particle.top}%`,
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Stats overlay */}
                    <div className="absolute top-1/4 left-10 md:left-20">
                        <motion.div
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-red-500 font-mono text-sm"
                        >
                            -20% ROI
                        </motion.div>
                    </div>
                    <div className="absolute bottom-1/4 right-10 md:right-20">
                        <motion.div
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            className="text-red-500 font-mono text-sm"
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
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 px-2">
                        {textSections[1].text}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 px-4">
                        {textSections[1].subtext}
                    </p>
                </motion.div>

                {/* Section 3: The Future - Logo */}
                <motion.div
                    style={{ opacity: opacity3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20"
                >
                    <motion.div
                        style={{ scale: logoScale, opacity: logoOpacity }}
                        className="mb-6"
                    >
                        <Image
                            src="/logo.png"
                            alt="One Step Innovations"
                            width={160}
                            height={160}
                            priority
                        />
                    </motion.div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 px-4 max-w-4xl">
                        {textSections[2].text}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 px-4 max-w-2xl">
                        {textSections[2].subtext}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
