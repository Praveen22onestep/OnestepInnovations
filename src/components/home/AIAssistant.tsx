"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
    id: string;
    role: "assistant" | "user";
    content: string;
}

interface UserData {
    name: string;
    email: string;
    industry: string;
}

type ConversationStep = "greeting" | "get_name" | "get_email" | "get_industry" | "analyzing" | "complete";

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState<ConversationStep>("greeting");
    const [userData, setUserData] = useState<UserData>({ name: "", email: "", industry: "" });
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Initial greeting
            setTimeout(() => {
                addAssistantMessage(
                    "👋 Hi there! I'm the One Step Innovations AI Assistant.\n\nI can help you discover operational challenges in your industry that can be solved with AI automation.\n\nTo get started, what's your name?"
                );
                setStep("get_name");
            }, 500);
        }
    }, [isOpen]);

    const addAssistantMessage = (content: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            role: "assistant",
            content,
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const addUserMessage = (content: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content,
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const analyzeIndustry = async (industry: string) => {
        setIsLoading(true);
        setStep("analyzing");

        // Simulated AI analysis (in production, this would call an API)
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const challenges = generateChallenges(industry);

        let responseText = `Thanks ${userData.name}! Here are 5 operational challenges in **${industry}** that can be automated with AI:\n\n`;

        challenges.forEach((challenge, index) => {
            responseText += `**${index + 1}. ${challenge.title}**\n`;
            responseText += `📋 *${challenge.description}*\n`;
            responseText += `🤖 **AI Solution:** ${challenge.solution}\n`;
            responseText += `📈 **Impact:** ${challenge.impact}\n\n`;
        });

        responseText += `---\n\n🚀 Want to explore how we can automate these for your business?\n\n**Book a free consultation** with our team at Praveensudhakar@onestepinnovations.com.au or call +61 476 289 975.`;

        // Send email notification via API
        try {
            const challengesText = challenges.map((c, i) =>
                `${i + 1}. ${c.title}\n   Description: ${c.description}\n   AI Solution: ${c.solution}\n   Impact: ${c.impact}`
            ).join('\n\n');

            await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userData.name,
                    email: userData.email,
                    industry: industry,
                    challenges: challengesText
                })
            });
        } catch (error) {
            console.error('Failed to send email notification:', error);
        }

        addAssistantMessage(responseText);
        setStep("complete");
        setIsLoading(false);
    };

    const generateChallenges = (industry: string) => {
        // Dynamic challenge generation based on industry keywords
        const industryLower = industry.toLowerCase();

        const challengeTemplates = [
            {
                title: "Manual Data Entry & Processing",
                description: "Staff spending hours entering data from various sources into systems.",
                solution: "AI-powered OCR and data extraction agents that automatically process documents, emails, and forms.",
                impact: "Reduce data entry time by 80% and eliminate human errors."
            },
            {
                title: "Customer Inquiry Response Delays",
                description: "Slow response times to customer queries leading to dissatisfaction.",
                solution: "Intelligent chatbots and email response agents that handle routine inquiries 24/7.",
                impact: "Instant responses, 60% reduction in support ticket volume."
            },
            {
                title: "Report Generation & Analysis",
                description: "Manual compilation of reports from multiple data sources.",
                solution: "Automated reporting agents that aggregate data and generate insights in real-time.",
                impact: "Save 10+ hours weekly on reporting, enable data-driven decisions."
            },
            {
                title: "Scheduling & Resource Allocation",
                description: "Complex coordination of staff, equipment, or appointments.",
                solution: "AI scheduling assistants that optimize resource allocation based on constraints.",
                impact: "30% improvement in resource utilization, reduced conflicts."
            },
            {
                title: "Quality Control & Compliance Monitoring",
                description: "Manual checks for quality standards and regulatory compliance.",
                solution: "AI monitoring systems that continuously audit processes and flag issues.",
                impact: "100% coverage, 90% faster issue detection, reduced compliance risk."
            }
        ];

        // Customize based on industry
        if (industryLower.includes("manufactur") || industryLower.includes("factory")) {
            challengeTemplates[3] = {
                title: "Predictive Maintenance Scheduling",
                description: "Unexpected equipment failures causing costly downtime.",
                solution: "AI agents that analyze sensor data to predict maintenance needs before failures occur.",
                impact: "40% reduction in unplanned downtime, extended equipment life."
            };
        }

        if (industryLower.includes("health") || industryLower.includes("medical") || industryLower.includes("hospital")) {
            challengeTemplates[1] = {
                title: "Patient Appointment Management",
                description: "High no-show rates and inefficient appointment scheduling.",
                solution: "AI agents that send reminders, handle rescheduling, and optimize appointment slots.",
                impact: "50% reduction in no-shows, improved patient satisfaction."
            };
        }

        if (industryLower.includes("retail") || industryLower.includes("ecommerce") || industryLower.includes("shop")) {
            challengeTemplates[2] = {
                title: "Inventory Forecasting & Management",
                description: "Overstocking or stockouts due to inaccurate demand prediction.",
                solution: "AI demand forecasting agents that analyze sales patterns and market trends.",
                impact: "25% reduction in inventory costs, 95% stock availability."
            };
        }

        if (industryLower.includes("logistics") || industryLower.includes("transport") || industryLower.includes("shipping")) {
            challengeTemplates[3] = {
                title: "Route Optimization & Tracking",
                description: "Inefficient delivery routes and poor shipment visibility.",
                solution: "AI route optimization agents that factor in traffic, weather, and delivery windows.",
                impact: "20% fuel savings, 30% faster deliveries, real-time tracking."
            };
        }

        return challengeTemplates;
    };

    const handleSend = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userInput = inputValue.trim();
        addUserMessage(userInput);
        setInputValue("");

        switch (step) {
            case "get_name":
                setUserData((prev) => ({ ...prev, name: userInput }));
                setTimeout(() => {
                    addAssistantMessage(`Nice to meet you, ${userInput}! 😊\n\nWhat's your email address? (We'll send you a summary of our analysis)`);
                    setStep("get_email");
                }, 500);
                break;

            case "get_email":
                if (!isValidEmail(userInput)) {
                    setTimeout(() => {
                        addAssistantMessage("Hmm, that doesn't look like a valid email. Please enter a valid email address.");
                    }, 500);
                    return;
                }
                setUserData((prev) => ({ ...prev, email: userInput }));
                setTimeout(() => {
                    addAssistantMessage(`Great! ✅\n\nNow, what **industry or field** does your business operate in?\n\n(e.g., Manufacturing, Healthcare, Retail, Logistics, Finance, etc.)`);
                    setStep("get_industry");
                }, 500);
                break;

            case "get_industry":
                setUserData((prev) => ({ ...prev, industry: userInput }));
                setTimeout(() => {
                    addAssistantMessage(`🔍 Analyzing operational challenges in **${userInput}**...\n\nThis will just take a moment.`);
                    analyzeIndustry(userInput);
                }, 500);
                break;

            case "complete":
                setTimeout(() => {
                    addAssistantMessage("Would you like to discuss these automation opportunities with our team? You can reach us at:\n\n📧 Praveensudhakar@onestepinnovations.com.au\n📞 +61 476 289 975\n\nOr use the Contact page to book a consultation!");
                }, 500);
                break;

            default:
                break;
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-deep-amber text-black shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? "hidden" : ""
                    }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <MessageCircle className="w-7 h-7" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] h-[550px] bg-card-bg border border-card-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-card-border bg-gradient-to-r from-deep-amber/10 to-neon-cyan/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-deep-amber/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-deep-amber" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm">AI Efficiency Analyst</h3>
                                    <p className="text-gray-400 text-xs">Discover automation opportunities</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                                >
                                    {message.role === "assistant" && (
                                        <div className="w-8 h-8 rounded-full bg-deep-amber/20 flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-4 h-4 text-deep-amber" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[75%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${message.role === "user"
                                            ? "bg-deep-amber text-black rounded-br-md"
                                            : "bg-white/5 text-gray-200 rounded-bl-md"
                                            }`}
                                    >
                                        {message.content}
                                    </div>
                                    {message.role === "user" && (
                                        <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center flex-shrink-0">
                                            <User className="w-4 h-4 text-neon-cyan" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-deep-amber/20 flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-4 h-4 text-deep-amber" />
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-2xl rounded-bl-md">
                                        <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-card-border">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder={
                                        step === "get_name" ? "Enter your name..." :
                                            step === "get_email" ? "Enter your email..." :
                                                step === "get_industry" ? "Enter your industry..." :
                                                    "Type a message..."
                                    }
                                    className="flex-1 px-4 py-3 rounded-xl bg-void border border-card-border text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none text-sm"
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="p-3 bg-deep-amber text-black rounded-xl hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
