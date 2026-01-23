"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
    { name: "Business Process Improvement", href: "/services" },
    { name: "AI Process Automation", href: "/services" },
    { name: "AIOT Implementation", href: "/services" },
    { name: "Strategic Management", href: "/services" },
    { name: "Change Management", href: "/services" },
    { name: "Training and Development", href: "/services" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/logo-new.png"
                            alt="One Step Innovations"
                            width={50}
                            height={50}
                            className="transition-transform duration-300 group-hover:scale-105 rounded-full"
                        />
                        <div className="hidden sm:block">
                            <span className="text-lg font-display font-semibold text-deep-amber tracking-tight">
                                One Step Innovations
                            </span>
                            <p className="text-xs text-gray-400 tracking-widest uppercase">
                                Empower Every Step
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </Link>

                                {/* Services Dropdown */}
                                {link.hasDropdown && (
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-64 glass rounded-xl overflow-hidden"
                                            >
                                                <div className="py-2">
                                                    {services.map((service, index) => (
                                                        <motion.div
                                                            key={service.name}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.05 }}
                                                        >
                                                            <Link
                                                                href={service.href}
                                                                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                                                            >
                                                                {service.name}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-deep-amber hover:text-black transition-all duration-300 hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 top-20 bg-black/95 backdrop-blur-lg md:hidden z-40"
                    >
                        <motion.nav className="flex flex-col items-start justify-start h-full pt-8 px-6 overflow-y-auto">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="w-full"
                                >
                                    {link.hasDropdown ? (
                                        <div className="w-full">
                                            <button
                                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                                className="flex items-center justify-between w-full py-4 text-2xl font-display font-semibold text-gray-300 hover:text-deep-amber transition-colors border-b border-gray-800"
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    className={`w-6 h-6 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {isMobileServicesOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="py-2 pl-4 space-y-1">
                                                            {services.map((service, sIndex) => (
                                                                <motion.div
                                                                    key={service.name}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: sIndex * 0.05 }}
                                                                >
                                                                    <Link
                                                                        href={service.href}
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                        className="block py-3 text-base text-gray-400 hover:text-neon-cyan transition-colors border-l-2 border-gray-700 pl-4 hover:border-neon-cyan"
                                                                    >
                                                                        {service.name}
                                                                    </Link>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block py-4 text-2xl font-display font-semibold text-gray-300 hover:text-deep-amber transition-colors border-b border-gray-800 w-full"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8 w-full"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="inline-flex items-center justify-center w-full px-8 py-3 bg-deep-amber text-black font-semibold rounded-full hover:bg-white transition-colors"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
