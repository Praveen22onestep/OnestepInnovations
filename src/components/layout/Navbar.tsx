"use client";

import { useState, useEffect } from "react";
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
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                hasScrolled ? "glass" : "bg-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <Image
                                src="/logo.png"
                                alt="One Step Innovations"
                                width={50}
                                height={50}
                            />
                        </motion.div>
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
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                            >
                                <Link
                                    href={link.href}
                                    className="nav-link flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium py-2"
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <motion.div
                                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </motion.div>
                                    )}
                                </Link>

                                {/* Services Dropdown */}
                                {link.hasDropdown && (
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                                                className="absolute top-full left-0 mt-2 w-72 bg-card-bg/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-card-border shadow-2xl"
                                            >
                                                <div className="py-2">
                                                    {services.map((service, idx) => (
                                                        <motion.div
                                                            key={service.name}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.03 }}
                                                        >
                                                            <Link
                                                                href={service.href}
                                                                className="group block px-5 py-3 text-sm text-gray-300 hover:text-white transition-all duration-300 relative overflow-hidden"
                                                            >
                                                                <span className="relative z-10">{service.name}</span>
                                                                <motion.div 
                                                                    className="absolute inset-0 bg-gradient-to-r from-deep-amber/10 to-transparent"
                                                                    initial={{ x: "-100%" }}
                                                                    whileHover={{ x: 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                />
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div 
                        className="hidden md:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="/contact"
                            className="magnetic-btn inline-flex items-center px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-deep-amber transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-deep-amber/20"
                        >
                            Get Started
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-20 bg-void/98 backdrop-blur-xl md:hidden z-40"
                    >
                        <motion.nav className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-display font-bold text-gray-300 hover:text-deep-amber transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile Services Sub-items */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap justify-center gap-3 mt-4 px-8"
                            >
                                {services.map((service) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-sm text-gray-500 hover:text-neon-cyan transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="mt-8"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="inline-flex items-center px-8 py-4 bg-deep-amber text-black font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
