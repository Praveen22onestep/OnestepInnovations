"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const BOOKING_URL = "https://outlook.office.com/bookwithme/user/25bbafd7aa564389bcda37e8b5b8e918@onestepinnovations.com.au/meetingtype/2CuJnw-1HkiM_lr5zCs25Q2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-void border-t border-card-border">
            {/* Top section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logo.png"
                                alt="One Step Innovations"
                                width={50}
                                height={50}
                            />
                            <div>
                                <span className="text-xl font-display font-bold text-deep-amber">
                                    One Step Innovations
                                </span>
                                <p className="text-xs text-gray-500 tracking-widest uppercase">
                                    Empower Every Step
                                </p>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
                            Transform business chaos into streamlined efficiency through Technology and Strategy.
                            We are your Growth Engine for business transformation.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/company/onestep-innovations/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:bg-white/10 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            {[
                                "Business Process Improvement",
                                "AI Process Automation",
                                "AIOT Implementation",
                                "Strategic Management",
                                "Change Management",
                                "Training and Development",
                            ].map((service) => (
                                <li key={service}>
                                    <Link
                                        href="/services"
                                        className="text-gray-400 text-sm hover:text-white transition-colors"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:Praveensudhakar@onestepinnovations.com.au"
                                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-neon-cyan" />
                                    Praveensudhakar@onestepinnovations.com.au
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+61476289975"
                                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-neon-cyan" />
                                    +61 476 289 975
                                </a>
                            </li>
                            <li>
                                <span className="flex items-start gap-3 text-gray-400 text-sm">
                                    <MapPin className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                                    Australia
                                </span>
                            </li>
                            <li className="pt-4">
                                <a
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-deep-amber text-black text-sm font-semibold rounded-full hover:bg-white transition-colors"
                                >
                                    Book Consultation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="border-t border-card-border">
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} One Step Innovations Pty Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/privacy"
                            className="text-gray-500 text-sm hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-gray-500 text-sm hover:text-white transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
