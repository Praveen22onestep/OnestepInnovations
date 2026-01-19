import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Target, Eye, Heart, Lightbulb, Users, Shield, Linkedin } from "lucide-react";

export const metadata = {
    title: "About Us | One Step Innovations",
    description: "Learn about One Step Innovations, our mission to empower businesses through AI and technology, and meet our founder Praveen Kumar Sudhakar.",
};

const coreValues = [
    {
        name: "Innovation First",
        description: "We push boundaries to deliver solutions that set new standards.",
        icon: Lightbulb,
    },
    {
        name: "Client Partnership",
        description: "Your success is our success. We work alongside you every step.",
        icon: Users,
    },
    {
        name: "Integrity Always",
        description: "Honest, transparent, and accountable in everything we do.",
        icon: Shield,
    },
    {
        name: "Excellence Driven",
        description: "We never settle for good enough when great is possible.",
        icon: Heart,
    },
];

export default function AboutPage() {
    return (
        <main className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Where Technology{" "}
                        <span className="text-deep-amber">Elevates Human Impact</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                        At One Step Innovations, we believe technology evolves to lift people higher.
                        Just as automation once eased the burden of physical work, AI now transforms
                        knowledge work—removing repetitive tasks so people can focus on creativity,
                        strategy, and human connection.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-4 bg-void">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Vision */}
                        <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
                            <div className="w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-neon-cyan" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Our Vision
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                AI + IoT that connects, predicts, and powers smarter business.
                                We envision a world where every enterprise operates at peak efficiency,
                                with AI handling the mundane so humans can focus on what truly matters.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
                            <div className="w-14 h-14 rounded-xl bg-deep-amber/10 flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-deep-amber" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Our Mission
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                To empower individuals and organisations to do more of the work that
                                truly inspires progress while AI handles the rest. We&apos;re not replacing
                                human intelligence—we&apos;re amplifying it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 px-4 bg-gradient-to-b from-void to-gray-950">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">
                            Leadership
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                            Meet Our Founder
                        </h2>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        {/* Founder Image */}
                        <div className="relative mb-8">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-deep-amber/30 glow-amber">
                                <Image
                                    src="/founder.jpg"
                                    alt="Praveen Kumar Sudhakar - Founder & CEO"
                                    width={192}
                                    height={192}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Name and Title */}
                        <h3 className="text-2xl font-display font-bold text-white mb-1">
                            Praveen Kumar Sudhakar
                        </h3>
                        <p className="text-deep-amber font-medium mb-2">
                            Founder & CEO, One Step Innovations Pty Ltd
                        </p>
                        <a
                            href="https://www.linkedin.com/in/praveen-kumar-sudhakar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors mb-8"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="text-sm">Connect on LinkedIn</span>
                        </a>

                        {/* Bio */}
                        <div className="max-w-2xl space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                Praveen is a transformation leader with a proven track record of delivering
                                100+ large-scale projects across manufacturing, logistics, and supply chain
                                for leading clients such as <span className="text-white">BlueScope, Woolworths,
                                    Coles, Aldi, 7-Eleven, and PepsiCo</span>.
                            </p>
                            <p>
                                After witnessing recurring challenges in operational efficiency — outdated
                                scheduling, manual workflows, and disconnected data — he founded One Step
                                Innovations to bridge the gap between AI, automation, and real-world industry needs.
                            </p>
                            <p className="text-deep-amber font-medium text-lg">
                                His mission: Empower every enterprise to operate smarter, safer, and faster
                                — one step at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-4 bg-void">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">
                            What Drives Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                            Our Core Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((value) => (
                            <div
                                key={value.name}
                                className="p-6 rounded-xl bg-card-bg border border-card-border hover:border-neon-cyan/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-neon-cyan/10 transition-colors">
                                    <value.icon className="w-6 h-6 text-neon-cyan" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {value.name}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
