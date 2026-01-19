import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollExperience from "@/components/home/ScrollExperience";
import ServicesGrid from "@/components/home/ServicesGrid";
import CaseStudies from "@/components/home/CaseStudies";
import AIAssistant from "@/components/home/AIAssistant";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero Scrollytelling Section */}
      <ScrollExperience />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Case Studies */}
      <CaseStudies />

      {/* Footer */}
      <Footer />

      {/* AI Assistant Chatbot */}
      <AIAssistant />
    </main>
  );
}
