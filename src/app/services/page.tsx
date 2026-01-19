import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Cog,
    Brain,
    Cpu,
    TrendingUp,
    RefreshCw,
    GraduationCap,
    ArrowRight,
    CheckCircle
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Services | One Step Innovations",
    description: "Explore our six pillars of business transformation: Business Process Improvement, AI Process Automation, AIOT Implementation, Strategic Management, Change Management, and Training & Development.",
};

const services = [
    {
        name: "Business Process Improvement",
        tagline: "Eliminate waste. Maximize output.",
        icon: Cog,
        color: "deep-amber",
        description: "We analyze your current workflows to identify bottlenecks, redundancies, and inefficiencies. Our data-driven approach helps you streamline operations, reduce costs, and improve throughput.",
        benefits: [
            "Reduce operational costs by up to 30%",
            "Improve process cycle times",
            "Eliminate manual bottlenecks",
            "Standardize best practices across teams"
        ]
    },
    {
        name: "AI Process Automation",
        tagline: "Let AI handle the mundane.",
        icon: Brain,
        color: "neon-cyan",
        description: "Deploy intelligent automation to handle repetitive tasks, data processing, and decision support. Free your team to focus on strategic work that drives real business value.",
        benefits: [
            "Automate up to 80% of repetitive tasks",
            "Reduce human error rates significantly",
            "24/7 operation without fatigue",
            "Scale operations without scaling headcount"
        ]
    },
    {
        name: "AIOT Implementation",
        tagline: "Connect. Monitor. Optimize.",
        icon: Cpu,
        color: "neon-cyan",
        description: "Bridge your physical and digital worlds with AI-powered IoT solutions. Gain real-time visibility into operations, predict maintenance needs, and optimize resource utilization.",
        benefits: [
            "Real-time operational visibility",
            "Predictive maintenance capabilities",
            "Optimize energy and resource usage",
            "Data-driven operational decisions"
        ]
    },
    {
        name: "Strategic Management",
        tagline: "Plan smarter. Execute faster.",
        icon: TrendingUp,
        color: "deep-amber",
        description: "Develop winning strategies backed by data and market insights. We help you set clear objectives, align your organization, and execute with precision to achieve sustainable growth.",
        benefits: [
            "Data-driven strategic planning",
            "Clear OKRs and KPIs alignment",
            "Competitive advantage positioning",
            "Measurable business outcomes"
        ]
    },
    {
        name: "Change Management",
        tagline: "Transform with confidence.",
        icon: RefreshCw,
        color: "deep-amber",
        description: "Navigate organizational transformation smoothly. Our proven methodologies ensure stakeholder buy-in, minimize resistance, and accelerate adoption of new processes and technologies.",
        benefits: [
            "Reduce transformation resistance",
            "Accelerate adoption rates",
            "Maintain productivity during change",
            "Build change-ready culture"
        ]
    },
    {
        name: "Training and Development",
        tagline: "Upskill. Empower. Excel.",
        icon: GraduationCap,
        color: "neon-cyan",
        description: "Build capable teams with customized training programs. From technical skills to leadership development, we equip your workforce with the capabilities needed to thrive.",
        benefits: [
            "Customized learning pathways",
            "Hands-on practical training",
            "Measurable skill improvements",
            "Continuous development culture"
        ]
    },
];

export default function ServicesPage() {
    return (
        <main className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Six Pillars of{" "}
                        <span className="text-deep-amber">Transformation</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We combine technology and strategy to build organizations that are efficient,
                        intelligent, and ready for the future.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 px-4 bg-void">
                <div className="max-w-6xl mx-auto space-y-16">
                    {services.map((service, index) => (
                        <div
                            key={service.name}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content */}
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 flex items-center justify-center mb-6`}>
                                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white mb-2">
                                    {service.name}
                                </h2>
                                <p className={`text-${service.color} font-medium mb-4`}>
                                    {service.tagline}
                                </p>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-3">
                                            <CheckCircle className={`w-5 h-5 text-${service.color} flex-shrink-0 mt-0.5`} />
                                            <span className="text-gray-300 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual Card */}
                            <div className={`p-8 rounded-2xl bg-card-bg border border-card-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className={`aspect-video rounded-xl bg-gradient-to-br from-${service.color}/20 to-transparent flex items-center justify-center`}>
                                    <service.icon className={`w-24 h-24 text-${service.color}/50`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-gradient-to-b from-void to-gray-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                        Ready to Transform Your Operations?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Let&apos;s discuss which services are right for your business.
                    </p>
                    <a
                        href="https://outlook.office.com/bookwithme/user/25bbafd7aa564389bcda37e8b5b8e918@onestepinnovations.com.au/meetingtype/2CuJnw-1HkiM_lr5zCs25Q2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-deep-amber text-black font-semibold rounded-full text-lg hover:bg-white transition-all duration-300 hover:scale-105"
                    >
                        Book Your Consultation
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
