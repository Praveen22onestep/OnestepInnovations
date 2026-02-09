import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollExperience from "@/components/home/ScrollExperience";
import WhoWeAre from "@/components/home/WhoWeAre";
import ServicesGrid from "@/components/home/ServicesGrid";
import CaseStudies from "@/components/home/CaseStudies";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import AIAssistant from "@/components/home/AIAssistant";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What does OneStep Innovations actually do?", "acceptedAnswer": { "@type": "Answer", "text": "We help mid-market Australian businesses work smarter by improving their processes first, then applying the right technology to automate them. Our services span business process improvement, AI-powered automation, AIOT implementation, strategic project management, and change management." } },
    { "@type": "Question", "name": "Why do you focus on fixing processes before automating them?", "acceptedAnswer": { "@type": "Answer", "text": "Because automating a broken process just gives you a faster broken process. Research consistently shows that up to 70% of automation projects fail not because of bad technology, but because the underlying workflows were never optimised first." } },
    { "@type": "Question", "name": "What industries do you work with?", "acceptedAnswer": { "@type": "Answer", "text": "We specialise in working with mid-market companies across manufacturing, FMCG, supply chain and logistics, and infrastructure." } },
    { "@type": "Question", "name": "What makes OneStep different from other AI or automation consultancies?", "acceptedAnswer": { "@type": "Answer", "text": "Three things set us apart. First, we're process-first. Second, we're completely technology-agnostic with no vendor lock-in. Third, we're practical and honest — if AI isn't the right answer, we'll tell you." } },
    { "@type": "Question", "name": "Do you only work with large enterprises?", "acceptedAnswer": { "@type": "Answer", "text": "No. We're purpose-built for the mid-market — Australian and New Zealand businesses typically in the $5 million to $100 million revenue range." } },
    { "@type": "Question", "name": "How much does a typical engagement cost?", "acceptedAnswer": { "@type": "Answer", "text": "Most engagements for mid-market companies range from $15,000 for a focused process improvement sprint to $100,000+ for a comprehensive automation transformation programme. We always start with a free initial consultation." } },
    { "@type": "Question", "name": "How long does a project usually take?", "acceptedAnswer": { "@type": "Answer", "text": "A focused process improvement engagement might take four to eight weeks, while a broader automation implementation usually runs three to six months." } },
    { "@type": "Question", "name": "What kind of ROI can we expect?", "acceptedAnswer": { "@type": "Answer", "text": "Our clients typically see returns within three to six months of implementation. Common outcomes include 30–60% reduction in manual processing time and 20–40% improvement in operational efficiency." } },
    { "@type": "Question", "name": "Will we need to replace our existing software and systems?", "acceptedAnswer": { "@type": "Answer", "text": "Almost never. We're technology-agnostic, which means we work with what you already have — whether that's Microsoft 365, Xero, SAP, MYOB, or custom spreadsheets." } },
    { "@type": "Question", "name": "What if our team resists the changes?", "acceptedAnswer": { "@type": "Answer", "text": "Change resistance is natural, and it's something we plan for from day one. Our approach includes dedicated change management and training to bring your team along the journey." } },
    { "@type": "Question", "name": "What technologies and tools do you use for automation?", "acceptedAnswer": { "@type": "Answer", "text": "We select the best tools for each specific situation. Our toolkit includes workflow automation platforms, AI and machine learning tools, IoT platforms, and integration platforms." } },
    { "@type": "Question", "name": "What is AIOT and how can it help my business?", "acceptedAnswer": { "@type": "Answer", "text": "AIOT stands for Artificial Intelligence of Things — the combination of AI with IoT connected devices. It means using smart sensors to collect real-time operational data, then applying AI to make intelligent decisions automatically." } },
    { "@type": "Question", "name": "Can you help us with AI if we don't have clean data?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely — this is one of the most common situations we encounter. Part of our process improvement work involves understanding your data landscape, cleaning what you have, and building systems that capture better data going forward." } },
    { "@type": "Question", "name": "Do you provide ongoing support after the project is finished?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer monthly retainers for monitoring and maintenance, quarterly review sessions, on-demand support for troubleshooting, and training refreshers for new team members." } },
    { "@type": "Question", "name": "How do you ensure data security during automation projects?", "acceptedAnswer": { "@type": "Answer", "text": "Data security is built into every step. We follow Australian privacy legislation, design automations with the principle of least privilege, conduct security reviews, and ensure encrypted data transfers." } }
  ]
};

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Hero Scrollytelling Section */}
      <ScrollExperience />

      {/* Who We Are */}
      <WhoWeAre />

      {/* What We Do - Services Grid */}
      <ServicesGrid />

      {/* Real Results - Case Studies */}
      <CaseStudies />

      {/* FAQ Section */}
      <FAQSection />

      {/* Book Consultation CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* AI Assistant Chatbot */}
      <AIAssistant />
    </main>
  );
}
