"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const textSections = [
    {
        text: "Business is complex.",
        subtext: "But running it shouldn't be."
    },
    {
        text: "Inefficiency costs you growth.",
        subtext: "Manual tasks eat your time. Silos kill your momentum.",
    },
];

export default function ScrollExperience() {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    // Transform values for section visibility (2 sections now)
    const opacity1 = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.45, 0.55, 1], [0, 1, 1]);

    // Yellow dot grows as you scroll
    const pulseScale = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.3, 1.5, 3]);
    const pulseOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [0.5, 0.9, 0]);

    // Chaos animations for red dots
    const chaosRotate = useTransform(scrollYProgress, [0.5, 1], [0, 360]);
    const chaosScale = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 0.8]);

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

    return (
        <div ref={containerRef} className="relative h-[200vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background */}
                <div className="absolute inset-0 bg-void" />

                {/* Section 1: The Hook */}
                <motion.div
                    style={mounted ? { opacity: opacity1 } : { opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Image
                        src="/hero-bg.png"
                        alt=""
                        fill
                        priority
                        className="object-cover opacity-40"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/50" />

                    {/* Expanding yellow dot on scroll */}
                    {mounted && (
                        <motion.div
                            style={{ scale: pulseScale, opacity: pulseOpacity }}
                            className="w-32 h-32 rounded-full bg-deep-amber blur-2xl z-10"
                        />
                    )}
                    {/* Center dot */}
                    <motion.div
                        className="absolute w-4 h-4 rounded-full bg-deep-amber z-10"
                    />
                </motion.div>

                {/* Section 1 Text */}
                <motion.div
                    style={mounted ? { opacity: opacity1 } : { opacity: 1 }}
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
                    style={mounted ? { opacity: opacity2 } : { opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-void via-gray-950 to-void" />
                    
                    {/* Chaotic floating red dots */}
                    {mounted && (
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
                    )}

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
                    style={mounted ? { opacity: opacity2 } : { opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 px-2">
                        {textSections[1].text}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 px-4">
                        {textSections[1].subtext}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
