import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Minimize2, Phone, MapPin } from "lucide-react";

// ─── Company Knowledge Base ────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are "Aria", the friendly and knowledgeable AI customer support assistant for Packasia — a leading industrial packaging manufacturer based in India.

Your job is to assist customers with product inquiries, quotes, company info, and general support. Always be warm, concise, and professional.

━━━━━━━━━━━━━━━━━━
COMPANY INFORMATION
━━━━━━━━━━━━━━━━━━
Company Name: Packasia
Tagline: "The Strength Behind Every Shipment"
Industry: Industrial Packaging Manufacturing
Specialization: Corrugated Boxes & Paper Bags

📍 Address: Packasia Manufacturing Unit, Industrial Area, India
📞 Phone / WhatsApp: +91 98765 43210
📧 Email: support@packasia.com
🌐 Website: www.packasia.com
🕐 Business Hours: Monday to Saturday, 9:00 AM to 6:00 PM IST

━━━━━━━━━━━━━━━━━━
PRODUCTS
━━━━━━━━━━━━━━━━━━
1. CORRUGATED BOXES
   - Single Wall (3-ply): Lightweight, ideal for e-commerce and retail
   - Double Wall (5-ply): Medium-duty, suited for electronics and FMCG
   - Triple Wall (7-ply): Heavy-duty industrial use, max load capacity
   - All boxes: FSC certified, 100% recyclable, custom sizes and print available

2. PAPER BAGS
   - Parcel Paper Bags: Heavy-duty kraft, food-grade certified, block-bottom design, holds up to 15kg
   - Shopping Paper Bags: Premium twisted/flat handle, excellent printability, custom branding
   - All bags: Eco-friendly, biodegradable, custom printing up to 4 colors

━━━━━━━━━━━━━━━━━━
KEY DETAILS
━━━━━━━━━━━━━━━━━━
- ISO certified manufacturing
- Minimum Order Quantity (MOQ): 500 units
- Delivery: Pan-India, 7 to 14 business days
- Custom printing, sizing, and branding available
- Bulk discounts available for orders above 5000 units
- Free sample available on request

━━━━━━━━━━━━━━━━━━
YOUR INSTRUCTIONS
━━━━━━━━━━━━━━━━━━
- If someone asks for a quote, ask them: product type, quantity, size requirements, and printing needs.
- If someone asks for contact info, share: Phone +91 98765 43210, Email support@packasia.com, and address.
- If someone asks about delivery, explain 7 to 14 days pan-India.
- If someone asks for a sample, tell them free samples are available and they just need to share their shipping address and mobile number.
- Keep responses short (2 to 4 sentences max) unless the user asks for detailed info.
- Use emojis sparingly to keep the tone friendly.
- NEVER make up pricing — say "Our sales team will share a custom quote based on your requirements."
- If you cannot answer something, say "Let me connect you with our team at +91 98765 43210 or support@packasia.com"`;

// ─── Quick Reply Suggestions ───────────────────────────────────────────────
const QUICK_REPLIES = [
  "What products do you offer?",
  "I need a quote",
  "What's your contact number?",
  "Where are you located?",
  "Do you offer free samples?",
  "What's the minimum order?",
];

// ─── Helper: render message text with basic markdown (bold, newlines) ───────
function MessageText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          part.split("\n").map((line, j, arr) => (
            <React.Fragment key={`${i}-${j}`}>
              {line}
              {j < arr.length - 1 && <br />}
            </React.Fragment>
          ))
        )
      )}
    </span>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "👋 Hi! I'm **Aria**, Packasia's AI assistant.\n\nI can help you with product info, quotes, samples, and more. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowQuickReplies(false);

    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

      const response = await fetch(`${apiBase}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || `HTTP ${response.status}`);
      }

      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: `⚠️ Error: ${error.message}\n\nContact us:\n📞 +91 98765 43210\n📧 support@packasia.com`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── Floating Button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-btn"
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 flex items-center gap-2 pl-4 pr-5 py-3 rounded-full shadow-2xl text-white z-[9000]"
            style={{ backgroundColor: "var(--color-forest-deep)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.07 }}
          >
            <MessageCircle size={22} />
            <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
              Chat with us
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-6 w-[360px] sm:w-[400px] bg-white rounded-3xl shadow-2xl border border-gray-200 z-[9001] flex flex-col overflow-hidden"
            style={{ height: isMinimized ? "auto" : "560px", maxHeight: "88vh" }}
          >
            {/* Header */}
            <div
              className="p-4 flex items-center justify-between text-white flex-shrink-0"
              style={{ backgroundColor: "var(--color-forest-deep)" }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Bot size={20} />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                    Aria — Packasia AI
                  </h3>
                  <p className="text-xs text-white/75">Typically replies instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized((v) => !v)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                  title="Minimize"
                >
                  <Minimize2 size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Contact Strip */}
            {!isMinimized && (
              <div className="flex items-center justify-around px-4 py-2 bg-green-50 border-b border-green-100 flex-shrink-0">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-1.5 text-xs font-medium text-green-800 hover:underline"
                >
                  <Phone size={12} />
                  +91 98765 43210
                </a>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1.5 text-xs text-green-800">
                  <MapPin size={12} />
                  Industrial Area, India
                </span>
              </div>
            )}

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ backgroundColor: "#F7F5F0" }}>
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "model" && (
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mb-1"
                          style={{ backgroundColor: "var(--color-forest-deep)" }}
                        >
                          <Bot size={14} className="text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed ${
                          msg.role === "user"
                            ? "text-white rounded-br-sm"
                            : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                        }`}
                        style={msg.role === "user" ? { backgroundColor: "var(--color-forest-deep)" } : {}}
                      >
                        <MessageText text={msg.text} />
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "var(--color-forest-deep)" }}
                      >
                        <Bot size={14} className="text-white" />
                      </div>
                      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                        {[0, 0.2, 0.4].map((delay, i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay }}
                            className="w-2 h-2 rounded-full bg-gray-400"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Replies */}
                  {showQuickReplies && !isLoading && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {QUICK_REPLIES.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => sendMessage(reply)}
                          className="text-xs px-3 py-1.5 rounded-full border font-medium transition-all"
                          style={{
                            borderColor: "var(--color-forest-deep)",
                            color: "var(--color-forest-deep)",
                            backgroundColor: "transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--color-forest-deep)";
                            e.currentTarget.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "var(--color-forest-deep)";
                          }}
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form
                  onSubmit={handleSubmit}
                  className="p-3 bg-white border-t border-gray-100 flex gap-2 flex-shrink-0"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about products, quotes, delivery…"
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-all"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-3 rounded-full text-white transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 flex-shrink-0 shadow-md"
                    style={{ backgroundColor: "var(--color-forest-deep)" }}
                  >
                    <Send size={16} />
                  </button>
                </form>

                {/* Footer */}
                <p className="text-center text-[10px] text-gray-400 py-1.5 bg-white">
                  Powered by Packasia AI · support@packasia.com
                </p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
