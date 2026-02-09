"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const heroLine1 = "Innovation with purpose";
const heroLine2 = "Execution with precision";

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

    const pulseScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1.5, 3]);
    const pulseOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.9, 0]);

    return (
        <div ref={containerRef} className="relative h-[150vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-void" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/hero-bg-hq.png"
                        alt=""
                        fill
                        priority
                        className="object-cover opacity-40 saturate-[0.4]"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/50" />

                    {mounted && (
                        <motion.div
                            style={{ scale: pulseScale, opacity: pulseOpacity }}
                            className="w-24 h-24 rounded-full bg-deep-amber blur-3xl z-10 opacity-50"
                        />
                    )}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 px-2 uppercase tracking-wide">
                        {heroLine1}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4 uppercase tracking-wider">
                        {heroLine2}
                    </p>

                    <div className="absolute bottom-8 left-8 flex flex-col items-center gap-2 animate-bounce">
                        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
                        <ChevronDown className="w-5 h-5 text-deep-amber" />
                    </div>
                </div>
            </div>
        </div>
    );
}
