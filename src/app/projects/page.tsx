import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudies from "@/components/home/CaseStudies";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Projects | One Step Innovations",
    description: "Explore our success stories and case studies. See how One Step Innovations has helped organizations transform their operations.",
};

export default function ProjectsPage() {
    return (
        <main className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-deep-amber text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Our Work
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Transformations That{" "}
                        <span className="text-neon-cyan">Deliver Results</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Every project is a partnership. We work closely with our clients to understand
                        their unique challenges and deliver solutions that create lasting impact.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <CaseStudies />

            {/* CTA Section */}
            <section className="py-24 px-4 bg-void">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                        Ready to Start Your Transformation?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Let&apos;s discuss how we can help you achieve similar results.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-deep-amber text-black font-semibold rounded-full text-lg hover:bg-white transition-all duration-300 hover:scale-105"
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
