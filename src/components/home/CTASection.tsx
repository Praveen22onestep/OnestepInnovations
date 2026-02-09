"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-deep-amber text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Ready to Start?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        30 Minutes In. 4 Hours Back.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        You share your challenges and we&apos;ll share a Safe AI tip that saves 4 hours a week for you. No obligation. Open to it?
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <a
                        href="https://outlook.office.com/bookwithme/user/25bbafd7aa564389bcda37e8b5b8e918@onestepinnovations.com.au/meetingtype/2CuJnw-1HkiM_lr5zCs25Q2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            e.preventDefault();
                            const bookingUrl = "https://outlook.office.com/bookwithme/user/25bbafd7aa564389bcda37e8b5b8e918@onestepinnovations.com.au/meetingtype/2CuJnw-1HkiM_lr5zCs25Q2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile";
                            if (typeof window !== 'undefined' && (window as { gtag_report_conversion?: (url: string) => boolean }).gtag_report_conversion) {
                                (window as { gtag_report_conversion: (url: string) => boolean }).gtag_report_conversion(bookingUrl);
                            } else {
                                window.open(bookingUrl, '_blank');
                            }
                        }}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-deep-amber text-black font-semibold rounded-full text-lg hover:bg-white transition-colors duration-200"
                    >
                        Book Your Consultation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
