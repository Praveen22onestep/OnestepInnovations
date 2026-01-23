import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Terms & Conditions | One Step Innovations",
    description: "Terms & Conditions for One Step Innovations. Review our service terms, liability limitations, and usage policies for AI and IoT consulting services.",
};

export default function TermsPage() {
    return (
        <main className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        One Step Innovations | AI Automation & IoT Solutions
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-4 bg-void">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="p-4 rounded-xl bg-neon-cyan/10 border-l-4 border-neon-cyan mb-8">
                        <p className="text-gray-300 m-0"><strong>Last Updated:</strong> January 2026</p>
                    </div>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-400 leading-relaxed">
                        By accessing and using the website <strong className="text-white">onestepinnovations.com.au</strong> and engaging with One Step Innovations Pty Ltd (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must discontinue use of our website and services immediately.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">2. Services Description</h2>
                    <p className="text-gray-400 leading-relaxed">One Step Innovations provides consulting and implementation services in the following areas:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>AI Process Automation</li>
                        <li>Internet of Things (IoT) Solutions</li>
                        <li>Strategic Management Consulting</li>
                        <li>Technology Implementation & Support</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-4">
                        Service delivery, timelines, and outcomes are subject to individual project agreements and are detailed in separate contracts or proposals provided by the Company.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">3. Use License</h2>
                    <p className="text-gray-400 leading-relaxed">Permission is granted to temporarily download one copy of the materials (information or software) on onestepinnovations.com.au for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>Modify or copy the materials</li>
                        <li>Use the materials for any commercial purpose or for any public display</li>
                        <li>Attempt to decompile or reverse engineer any software on the website</li>
                        <li>Remove any copyright or other proprietary notations from the materials</li>
                        <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                        <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">4. Disclaimer of Warranties</h2>
                    <p className="text-gray-400 leading-relaxed">
                        The materials on onestepinnovations.com.au are provided on an &quot;as is&quot; basis without warranties of any kind, either express or implied. The Company disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
                    </p>
                    <p className="text-gray-400 leading-relaxed mt-4">The Company does not warrant that:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>The website will be uninterrupted or error-free</li>
                        <li>Defects will be corrected</li>
                        <li>The website is free of viruses or harmful components</li>
                        <li>Information on the website is accurate or complete</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
                    <p className="text-gray-400 leading-relaxed">In no event shall One Step Innovations Pty Ltd, its directors, employees, or agents be liable to you or any third party for any damages arising from your use of or inability to use the website or services, including but not limited to:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>Direct damages</li>
                        <li>Indirect damages</li>
                        <li>Incidental damages</li>
                        <li>Special damages</li>
                        <li>Consequential damages</li>
                        <li>Punitive damages</li>
                        <li>Loss of profits or revenue</li>
                        <li>Loss of business opportunity</li>
                        <li>Data loss</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-4">
                        This applies even if the Company has been advised of the possibility of such damages. Some jurisdictions do not allow limitation of liability, so this limitation may not apply to you.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">6. Indemnification</h2>
                    <p className="text-gray-400 leading-relaxed">You agree to indemnify, defend, and hold harmless One Step Innovations Pty Ltd and its directors, employees, and agents from and against any and all claims, damages, losses, liabilities, and expenses (including reasonable attorney&apos;s fees) arising from or related to:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>Your use of the website or services</li>
                        <li>Any violation of these Terms & Conditions</li>
                        <li>Your infringement of any intellectual property rights</li>
                        <li>Any harmful content you submit or transmit</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">7. Intellectual Property Rights</h2>
                    <p className="text-gray-400 leading-relaxed">
                        All content on the website, including but not limited to text, graphics, logos, images, software, and designs, is the property of One Step Innovations Pty Ltd or its content suppliers and is protected by international copyright laws.
                    </p>
                    <p className="text-gray-400 leading-relaxed mt-4">
                        You may not reproduce, distribute, transmit, modify, or create derivative works of any content without explicit written permission from the Company.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">8. Third-Party Links</h2>
                    <p className="text-gray-400 leading-relaxed">Our website may contain links to third-party websites and resources. The Company is not responsible for:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>The availability or accuracy of third-party sites</li>
                        <li>The content, products, or services offered on third-party sites</li>
                        <li>Your use of or reliance on third-party sites</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-4">
                        Your use of third-party sites is subject to their terms and conditions. We recommend reviewing their privacy and terms policies before use.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">9. User-Generated Content</h2>
                    <p className="text-gray-400 leading-relaxed">
                        If you submit comments, feedback, or other content to our website, you grant the Company a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute such content without compensation or attribution.
                    </p>
                    <p className="text-gray-400 leading-relaxed mt-4">You warrant that any content you submit:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>Does not infringe any intellectual property rights</li>
                        <li>Does not contain defamatory, offensive, or harmful material</li>
                        <li>Does not violate any laws</li>
                        <li>Is original or you have rights to submit it</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">10. Limitation of Service</h2>
                    <p className="text-gray-400 leading-relaxed">We reserve the right to:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>Modify or discontinue services with or without notice</li>
                        <li>Restrict access to certain features or content</li>
                        <li>Remove content that violates these Terms & Conditions</li>
                        <li>Suspend or terminate your access to the website</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">11. Payment Terms (If Applicable)</h2>
                    <p className="text-gray-400 leading-relaxed">For services requiring payment:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>Payment terms are specified in individual project agreements or invoices</li>
                        <li>Late payments may incur additional fees or interest as per Australian Consumer Law</li>
                        <li>The Company reserves the right to suspend services for non-payment</li>
                        <li>All prices are in Australian dollars (AUD) unless otherwise specified</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">12. Governing Law</h2>
                    <p className="text-gray-400 leading-relaxed">
                        These Terms & Conditions are governed by and construed in accordance with the laws of New South Wales, Australia, and you irrevocably submit to the exclusive jurisdiction of the courts of New South Wales.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">13. Dispute Resolution</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Before pursuing legal action, we encourage resolution through good faith negotiation. If disputes cannot be resolved informally, either party may pursue resolution through the Australian legal system.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">14. Severability</h2>
                    <p className="text-gray-400 leading-relaxed">
                        If any provision of these Terms & Conditions is deemed invalid or unenforceable, the remaining provisions shall continue in full force and effect to the maximum extent permitted by law.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">15. Entire Agreement</h2>
                    <p className="text-gray-400 leading-relaxed">
                        These Terms & Conditions, along with our Privacy Policy, constitute the entire agreement between you and One Step Innovations Pty Ltd regarding your use of the website and services, and supersede all prior agreements or understandings.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">16. Changes to Terms</h2>
                    <p className="text-gray-400 leading-relaxed">
                        The Company reserves the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the updated terms. We recommend reviewing these Terms & Conditions periodically for changes.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">17. Contact Us</h2>
                    <p className="text-gray-400 leading-relaxed">If you have questions about these Terms & Conditions, please contact us:</p>
                    <div className="p-4 rounded-xl bg-card-bg border border-card-border mt-4">
                        <p className="text-white font-semibold">One Step Innovations Pty Ltd</p>
                        <p className="text-gray-400">Lake Heights, New South Wales, Australia</p>
                        <p className="text-gray-400">Email: <a href="mailto:info@onestepinnovations.com.au" className="text-neon-cyan hover:underline">info@onestepinnovations.com.au</a></p>
                    </div>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">18. Acknowledgment</h2>
                    <p className="text-gray-400 leading-relaxed">
                        By using onestepinnovations.com.au, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy.
                    </p>

                    <div className="mt-12 pt-8 border-t border-card-border">
                        <p className="text-gray-500 text-center">
                            &copy; 2026 One Step Innovations Pty Ltd. All rights reserved.
                        </p>
                        <p className="text-center mt-4">
                            <Link href="/" className="text-neon-cyan hover:underline mx-2">Home</Link> | 
                            <Link href="/privacy" className="text-neon-cyan hover:underline mx-2">Privacy Policy</Link> | 
                            <Link href="/contact" className="text-neon-cyan hover:underline mx-2">Contact</Link>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
