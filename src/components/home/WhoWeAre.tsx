"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Map the Process",
        text: "We audit your current workflow — on the line, in the warehouse, across the supply chain. No assumptions. We find exactly where the friction, cost, and error live.",
    },
    {
        number: "02",
        title: "Build What Fits",
        text: "We design and deploy AI that targets those specific gaps — voice agents, document extraction, vision systems, automation workflows — using open platforms you'll own and maintain.",
    },
    {
        number: "03",
        title: "Prove It in Weeks, Not Months",
        text: "We deliver a working solution on real data within weeks. You see measurable impact before any long-term commitment. If it doesn't move the needle, you'll know fast.",
    },
];

export default function WhoWeAre() {
    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-deep-amber text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Who Are We
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Your Process Is the Problem. We Start There.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Every AI project we take on starts the same way — not with technology, but with your process.
                        We walk your floor, map your workflow, and find where time, money, and accuracy are leaking.
                        Then we build the AI layer that plugs those gaps — fitted to how your operation actually runs,
                        not how a software vendor thinks it should.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative p-8 rounded-2xl bg-card-bg border border-card-border hover:border-neon-cyan/30 transition-colors group"
                        >
                            <span className="text-5xl font-display font-bold text-neon-cyan/20 group-hover:text-neon-cyan/40 transition-colors">
                                {step.number}
                            </span>
                            <h3 className="text-xl font-bold text-white mt-4 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-neon-cyan text-lg mb-6">
                        Ready to find out where AI actually fits in your operation?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan rounded-full hover:bg-neon-cyan/20 hover:border-neon-cyan/50 transition-all font-semibold"
                    >
                        Book a Process Review
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
