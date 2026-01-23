import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | One Step Innovations",
    description: "Privacy Policy for One Step Innovations. Learn how we protect your data and personal information in compliance with Australian Privacy Act.",
};

export default function PrivacyPage() {
    return (
        <main className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Privacy Policy
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

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">1. Introduction</h2>
                    <p className="text-gray-400 leading-relaxed">
                        One Step Innovations Pty Ltd (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong className="text-white">onestepinnovations.com.au</strong> and use our services.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        We comply with the <strong className="text-white">Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles (APPs). Please read this policy carefully. If you do not agree with our policies and practices, please do not use our website or services.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">2. Information We Collect</h2>
                    
                    <h3 className="text-xl font-semibold text-deep-amber mt-6 mb-3">2.1 Personal Information You Provide</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, company name, job title, and mailing address</li>
                        <li><strong className="text-white">Communication Data:</strong> Any messages, inquiries, or feedback you send us through our contact form, email, or phone</li>
                        <li><strong className="text-white">Business Information:</strong> Details about your business, industry, and service requirements</li>
                        <li><strong className="text-white">Payment Information:</strong> Billing address, payment method details (processed securely through third-party providers)</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-deep-amber mt-6 mb-3">2.2 Automatically Collected Information</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li><strong className="text-white">Website Usage Data:</strong> Pages visited, time spent on pages, links clicked, referral source</li>
                        <li><strong className="text-white">Device Information:</strong> IP address, browser type, operating system, device type</li>
                        <li><strong className="text-white">Cookies & Tracking:</strong> We use cookies and similar technologies to improve your experience</li>
                        <li><strong className="text-white">Analytics:</strong> Google Analytics to understand user behavior and website performance</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">3. How We Use Your Information</h2>
                    <p className="text-gray-400 leading-relaxed">We use collected information for the following purposes:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>To respond to your inquiries and provide customer support</li>
                        <li>To deliver, maintain, and improve our services</li>
                        <li>To send service updates, newsletters, and promotional materials (with your consent)</li>
                        <li>To process payments and transactions</li>
                        <li>To comply with legal obligations and prevent fraud</li>
                        <li>To analyze website usage and optimize user experience</li>
                        <li>To contact you about changes to our policies or services</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">4. How We Protect Your Information</h2>
                    <p className="text-gray-400 leading-relaxed">We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li>SSL/TLS encryption for all data transmitted over the internet</li>
                        <li>Secure servers with firewalls and intrusion detection systems</li>
                        <li>Limited access to personal information by authorized personnel only</li>
                        <li>Regular security audits and updates</li>
                        <li>Compliance with Australian Privacy Principles</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-4">
                        <strong className="text-white">Note:</strong> While we strive to protect your information, no security system is impenetrable. We cannot guarantee absolute security of your data transmitted over the internet.
                    </p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">5. Sharing Your Information</h2>
                    <p className="text-gray-400 leading-relaxed">We do NOT sell, trade, or rent your personal information to third parties. We may share your information only in these circumstances:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist with website hosting, email delivery, analytics, and payment processing (under confidentiality agreements)</li>
                        <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or government authority</li>
                        <li><strong className="text-white">Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                        <li><strong className="text-white">With Your Consent:</strong> When you explicitly authorize us to share information</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">6. Cookies & Tracking Technologies</h2>
                    <p className="text-gray-400 leading-relaxed">Our website uses cookies to enhance your experience. You can control cookie settings in your browser preferences. Disabling cookies may affect website functionality.</p>
                    <ul className="text-gray-400 space-y-2">
                        <li><strong className="text-white">Essential Cookies:</strong> Required for website operation</li>
                        <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how you use our website (Google Analytics)</li>
                        <li><strong className="text-white">Marketing Cookies:</strong> Used to display relevant advertisements</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">7. Your Rights & Choices</h2>
                    <p className="text-gray-400 leading-relaxed">Under the Privacy Act 1988 (Cth), you have the right to:</p>
                    <ul className="text-gray-400 space-y-2">
                        <li><strong className="text-white">Access Your Data:</strong> Request access to personal information we hold about you</li>
                        <li><strong className="text-white">Correct Your Data:</strong> Request correction of inaccurate or outdated information</li>
                        <li><strong className="text-white">Delete Your Data:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                        <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing emails and communications</li>
                        <li><strong className="text-white">Privacy Complaint:</strong> Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
                    </ul>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">8. Contact Us</h2>
                    <p className="text-gray-400 leading-relaxed">If you have questions about this Privacy Policy, wish to access or correct your information, or have privacy concerns, please contact us:</p>
                    <div className="p-4 rounded-xl bg-card-bg border border-card-border mt-4">
                        <p className="text-white font-semibold">One Step Innovations Pty Ltd</p>
                        <p className="text-gray-400">Lake Heights, New South Wales, Australia</p>
                        <p className="text-gray-400">Email: <a href="mailto:info@onestepinnovations.com.au" className="text-neon-cyan hover:underline">info@onestepinnovations.com.au</a></p>
                    </div>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">9. Changes to This Privacy Policy</h2>
                    <p className="text-gray-400 leading-relaxed">We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of significant changes via email or by updating the &quot;Last Updated&quot; date on this page. Your continued use of our website constitutes acceptance of the updated policy.</p>

                    <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">10. Office of the Australian Information Commissioner (OAIC)</h2>
                    <p className="text-gray-400 leading-relaxed">If you have concerns about our handling of your personal information and cannot resolve the issue with us, you may lodge a complaint with the OAIC:</p>
                    <div className="p-4 rounded-xl bg-card-bg border border-card-border mt-4">
                        <p className="text-white font-semibold">OAIC Contact Information</p>
                        <p className="text-gray-400">Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">www.oaic.gov.au</a></p>
                        <p className="text-gray-400">Phone: 1300 363 992</p>
                        <p className="text-gray-400">Email: <a href="mailto:enquiries@oaic.gov.au" className="text-neon-cyan hover:underline">enquiries@oaic.gov.au</a></p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-card-border">
                        <p className="text-gray-500 text-center">
                            &copy; 2026 One Step Innovations Pty Ltd. All rights reserved.
                        </p>
                        <p className="text-center mt-4">
                            <Link href="/" className="text-neon-cyan hover:underline mx-2">Home</Link> | 
                            <Link href="/terms" className="text-neon-cyan hover:underline mx-2">Terms & Conditions</Link> | 
                            <Link href="/contact" className="text-neon-cyan hover:underline mx-2">Contact</Link>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
