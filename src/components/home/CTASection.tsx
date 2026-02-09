"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-void to-gray-900/20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                        30 Minutes In. 4 Hours Back.
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        You share your challenges and we&apos;ll share a Safe AI tip that saves 4 hours a week for you. No obligation. Open to it?
                    </p>
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
