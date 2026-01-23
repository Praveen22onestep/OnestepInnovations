"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(false);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
                throw new Error('Failed to send');
            }
            
            setIsSubmitted(true);
        } catch (error) {
            console.error('Failed to send enquiry:', error);
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Let&apos;s Build Something{" "}
                        <span className="text-deep-amber">Extraordinary</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Ready to transform your business? We&apos;re here to help. Reach out and
                        let&apos;s start a conversation about your goals.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 px-4 bg-void">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-display font-bold text-white mb-8">
                            Contact Information
                        </h2>

                        <div className="space-y-6 mb-12">
                            <a
                                href="mailto:Praveensudhakar@onestepinnovations.com.au"
                                className="flex items-center gap-4 p-4 rounded-xl bg-card-bg border border-card-border hover:border-neon-cyan/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6 text-neon-cyan" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <p className="text-white font-medium">Praveensudhakar@onestepinnovations.com.au</p>
                                </div>
                            </a>

                            <a
                                href="tel:+61476289975"
                                className="flex items-center gap-4 p-4 rounded-xl bg-card-bg border border-card-border hover:border-neon-cyan/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6 text-neon-cyan" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <p className="text-white font-medium">+61 476 289 975</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-card-bg border border-card-border">
                                <div className="w-12 h-12 rounded-xl bg-deep-amber/10 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-deep-amber" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Location</p>
                                    <p className="text-white font-medium">Australia</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-deep-amber/10 to-neon-cyan/10 border border-card-border">
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Book a Consultation
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Schedule a free 30-minute discovery call to discuss your business
                                challenges and how we can help.
                            </p>
                            <a
                                href="https://outlook.office.com/bookwithme/user/25bbafd7aa564389bcda37e8b5b8e918@onestepinnovations.com.au/meetingtype/2CuJnw-1HkiM_lr5zCs25Q2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-deep-amber text-black text-sm font-semibold rounded-full hover:bg-white transition-colors"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
                        {submitError ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
                                    <Mail className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-4">
                                    Something went wrong
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Please try again or email us directly at Praveensudhakar@onestepinnovations.com.au
                                </p>
                                <button
                                    onClick={() => setSubmitError(false)}
                                    className="px-6 py-3 bg-deep-amber text-black font-semibold rounded-xl hover:bg-white transition-colors"
                                >
                                    Try Again
                                </button>
                            </div>
                        ) : isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-4">
                                    Message Sent!
                                </h3>
                                <p className="text-gray-400">
                                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-display font-bold text-white mb-6">
                                    Send us a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-void border border-card-border text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-void border border-card-border text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                                            Company (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-void border border-card-border text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-void border border-card-border text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us about your project or challenge..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-deep-amber text-black font-semibold rounded-xl hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
