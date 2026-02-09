"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqData = {
  approach: {
    label: "Our Approach",
    questions: [
      {
        q: "What does OneStep Innovations actually do?",
        a: "We help mid-market Australian businesses work smarter by improving their processes first, then applying the right technology to automate them. Our services span business process improvement, AI-powered automation, AIOT implementation, strategic project management, and change management. Unlike vendors who push software, we start by understanding how your business actually operates, fix what's broken, and only then introduce automation where it delivers real, measurable results.",
      },
      {
        q: "Why do you focus on fixing processes before automating them?",
        a: "Because automating a broken process just gives you a faster broken process. Research consistently shows that up to 70% of automation projects fail not because of bad technology, but because the underlying workflows were never optimised first. Our process-first approach means every dollar you invest in automation delivers genuine returns rather than creating expensive technical debt that requires rework later. We save you money by getting it right the first time.",
      },
      {
        q: "What industries do you work with?",
        a: "We specialise in working with mid-market companies across manufacturing, FMCG (fast-moving consumer goods), supply chain and logistics, and infrastructure. These industries share common challenges: manual processes that slow things down, data sitting in silos, and growing pressure to do more with less. Our team has deep operational experience in these sectors, so we understand the real-world constraints you face \u2014 not just the theory.",
      },
      {
        q: "What makes OneStep different from other AI or automation consultancies?",
        a: "Three things set us apart. First, we\u2019re process-first \u2014 we fix your workflows before touching any technology. Second, we\u2019re completely technology-agnostic with no vendor lock-in, meaning we recommend the tools that genuinely suit your business, not the ones that pay us a commission. Third, we\u2019re practical and honest. We don\u2019t overpromise or throw around buzzwords. If AI isn\u2019t the right answer for your situation, we\u2019ll tell you. Our goal is measurable improvement, not a flashy slide deck.",
      },
      {
        q: "Do you only work with large enterprises?",
        a: "No. We\u2019re purpose-built for the mid-market \u2014 Australian and New Zealand businesses typically in the $5 million to $100 million revenue range. These companies are often too large for off-the-shelf solutions but don\u2019t need the complexity (or cost) of enterprise-grade consulting firms. You get direct access to senior consultants who understand your scale, not a team of junior analysts learning on your dime.",
      },
    ],
  },
  practical: {
    label: "Cost, Timeline & ROI",
    questions: [
      {
        q: "How much does a typical engagement cost?",
        a: "Every business is different, so we scope each project individually. That said, most of our engagements for mid-market companies range from $15,000 for a focused process improvement sprint to $100,000+ for a comprehensive automation transformation programme. We always start with a free initial consultation to understand your needs and provide a clear, transparent quote before any commitment. There are no hidden fees, and we can structure payments around project milestones so you see value before you pay.",
      },
      {
        q: "How long does a project usually take?",
        a: "A focused process improvement engagement might take four to eight weeks, while a broader automation implementation usually runs three to six months. We break every project into clear phases with defined milestones, so you can track progress and see results incrementally rather than waiting months for a big reveal.",
      },
      {
        q: "What kind of ROI can we expect?",
        a: "Our clients typically see returns within three to six months of implementation. Common outcomes include 30\u201360% reduction in manual processing time, 20\u201340% improvement in operational efficiency, significant reduction in error rates, and faster decision-making through better data visibility. During our initial consultation, we\u2019ll work with you to identify the highest-impact opportunities and provide realistic ROI projections based on your actual operations \u2014 not industry averages.",
      },
      {
        q: "Will we need to replace our existing software and systems?",
        a: "Almost never. We\u2019re technology-agnostic, which means we work with what you already have. Whether you\u2019re using Microsoft 365, Xero, SAP, MYOB, custom spreadsheets, or a combination of everything, we build automations that integrate with your current tools. Our goal is to make your existing investments work harder, not to rip and replace them with something unfamiliar that your team has to relearn from scratch.",
      },
      {
        q: "What if our team resists the changes?",
        a: "Change resistance is natural, and it\u2019s something we plan for from day one. Our approach includes dedicated change management and training to bring your team along the journey. We\u2019ve found that when people see how automation removes their most frustrating, repetitive tasks rather than replacing their jobs, they become the strongest advocates for the change. We also provide hands-on training and documentation so your team feels confident and capable with the new processes.",
      },
    ],
  },
  technical: {
    label: "Technology & Support",
    questions: [
      {
        q: "What technologies and tools do you use for automation?",
        a: "We select the best tools for each specific situation rather than forcing a single platform. Our toolkit includes workflow automation platforms like n8n, Make.com, Zapier, and Microsoft Power Automate; AI and machine learning tools including OpenAI, custom AI models, and computer vision systems; IoT platforms for connected devices and real-time monitoring; and integration platforms to connect your existing business systems. The right choice depends on your technical environment, budget, and what you\u2019re trying to achieve.",
      },
      {
        q: "What is AIOT and how can it help my business?",
        a: "AIOT stands for Artificial Intelligence of Things \u2014 it\u2019s the combination of AI with IoT (Internet of Things) connected devices. In practical terms, this means using smart sensors and devices to collect real-time data from your operations, then applying AI to analyse that data and make intelligent decisions automatically. For example, in manufacturing this could mean predicting equipment failures before they happen, or in supply chain it could mean automatically adjusting inventory levels based on real-time demand signals. It turns your physical operations into a data-driven, self-optimising system.",
      },
      {
        q: "Can you help us with AI if we don\u2019t have clean data?",
        a: "Absolutely \u2014 in fact, this is one of the most common situations we encounter. Most mid-market businesses don\u2019t have perfectly structured data warehouses, and that\u2019s perfectly normal. Part of our process improvement work involves understanding your data landscape, cleaning and organising what you have, and building systems that capture better data going forward. We take a pragmatic approach: start with what\u2019s available, deliver quick wins, and progressively improve your data maturity over time rather than waiting for perfect data that never arrives.",
      },
      {
        q: "Do you provide ongoing support after the project is finished?",
        a: "Yes. We offer flexible ongoing support arrangements because we know that the real value of automation compounds over time with continuous optimisation. Options include monthly retainer support for monitoring, maintenance, and minor enhancements; quarterly review sessions to identify new automation opportunities as your business evolves; on-demand support for troubleshooting or adjustments; and training refreshers for new team members. We want to be a long-term partner in your growth, not a one-off project vendor.",
      },
      {
        q: "How do you ensure data security during automation projects?",
        a: "Data security is built into every step of our process. We follow Australian privacy legislation and industry best practices for data handling. All automations are designed with the principle of least privilege, meaning systems only access the data they genuinely need. We conduct security reviews as part of our implementation process, ensure encrypted data transfer between systems, and provide documentation of all data flows so your IT team has full visibility. If you operate in a regulated industry, we\u2019ll work within your specific compliance requirements.",
      },
    ],
  },
};

type Category = keyof typeof faqData;

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("approach");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setOpenIndex(null);
  };

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-void via-gray-950 to-void">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with us. Can&apos;t find
            what you&apos;re looking for? Let&apos;s have a conversation.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {(Object.keys(faqData) as Category[]).map((key) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 cursor-pointer ${
                activeCategory === key
                  ? "bg-deep-amber border-deep-amber text-black"
                  : "bg-transparent border-white/10 text-gray-400 hover:border-deep-amber/50 hover:text-white"
              }`}
            >
              {faqData[key].label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-3"
          >
            {faqData[activeCategory].questions.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-neon-cyan/30 bg-white/[0.03] shadow-[0_0_20px_rgba(0,240,255,0.05)]"
                      : "border-white/5 bg-white/[0.02] hover:border-white/10"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <span
                      className={`text-base font-semibold transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-neon-cyan rotate-45"
                          : "bg-white/5"
                      }`}
                    >
                      <Plus
                        className={`w-4 h-4 transition-colors duration-300 ${
                          isOpen ? "text-black" : "text-neon-cyan"
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="text-gray-400 text-[15px] leading-relaxed border-l-2 border-neon-cyan/40 pl-4">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
