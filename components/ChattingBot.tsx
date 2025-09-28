"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, RefreshCw, Send } from "lucide-react";

const queries = [
  {
    id: "canada-pr",
    label: "Canada/Australia PR Visa",
    answer:
      "For Canada/Australia PR Visa, we have to check your eligibility first.",
    followUp: "To begin, May I have your name please?",
  },
  {
    id: "family-visa",
    label: "Family/Spouse Visa",
    answer:
      "Family/Spouse visa requirements vary by country. Let me help you with the process.",
    followUp: "Could you please tell me your name to get started?",
  },
  {
    id: "study-visa",
    label: "Study Visa",
    answer:
      "Study visa applications require proper documentation and meeting academic requirements.",
    followUp: "What's your name so I can assist you better?",
  },
  {
    id: "visit-visa",
    label: "Tourist/Visit Visa",
    answer:
      "Tourist/Visit visas are typically shorter-term and have specific requirements.",
    followUp: "May I know your name to provide personalized guidance?",
  },
  {
    id: "germany-card",
    label: "Germany Opportunity Card",
    answer:
      "Germany's Opportunity Card offers great prospects for skilled professionals.",
    followUp: "What's your name so I can help you with the details?",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello, This is Sarah. 👋\nMay I know What are you looking for?",
      timestamp: "Just now",
    },
  ]);
  const [userName, setUserName] = useState("");
  const [isNameAsked, setIsNameAsked] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleQuerySelect = (queryId: string) => {
    const query = queries.find((q) => q.id === queryId);
    if (query) {
      setSelectedQuery(queryId);
      setIsLoading(true);

      // Add user message
      const userMessage = {
        id: Date.now(),
        type: "user",
        content: query.label,
        timestamp: "1m ago",
      };

      setMessages((prev) => [...prev, userMessage]);

      setTimeout(() => {
        // Add bot response
        const botMessage = {
          id: Date.now() + 1,
          type: "bot",
          content: query.answer,
          timestamp: "1m ago",
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);

        // Show follow-up question after a short delay
        setTimeout(() => {
          const followUpMessage = {
            id: Date.now() + 2,
            type: "bot",
            content: query.followUp,
            timestamp: "1m ago",
          };
          setMessages((prev) => [...prev, followUpMessage]);
          setIsNameAsked(true);
          setShowNameInput(true);
        }, 1000);
      }, 1500);
    }
  };

  const handleNameSubmit = () => {
    if (userName.trim()) {
      const userMessage = {
        id: Date.now(),
        type: "user",
        content: userName,
        timestamp: "Just now",
      };

      setMessages((prev) => [...prev, userMessage]);
      setShowNameInput(false);

      // Add thank you message
      setTimeout(() => {
        const thankYouMessage = {
          id: Date.now() + 1,
          type: "bot",
          content: `Thank you ${userName}! I'll connect you with our immigration specialist who will help you with your requirements.`,
          timestamp: "Just now",
        };
        setMessages((prev) => [...prev, thankYouMessage]);
      }, 1000);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        type: "bot",
        content:
          "Hello, This is Sarah. 👋\nMay I know What are you looking for?",
        timestamp: "Just now",
      },
    ]);
    setSelectedQuery(null);
    setUserName("");
    setIsNameAsked(false);
    setShowNameInput(false);
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-0 w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg border-4 border-white"
            aria-label="Chat with Sarah"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer">
              <img
                src="/assets/image/bot.jpg"
                alt="Sarah"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </Button>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <p className="text-xs text-gray-600 mt-2 bg-white px-2 py-1 rounded-full shadow-sm">
          I am Sarah
        </p>
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src="/assets/image/bot.jpg"
                      alt="Sarah"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah</h3>
                    <p className="text-xs text-red-100">
                      Immigration Consultant
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReset}
                    className="text-white hover:bg-white/10 p-2 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10 p-2 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div
              ref={chatContainerRef}
              className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] ${
                      message.type === "user"
                        ? "bg-red-500 text-white rounded-l-2xl rounded-tr-2xl rounded-br-md"
                        : "bg-white text-gray-800 rounded-r-2xl rounded-tl-2xl rounded-bl-md shadow-sm"
                    } p-3`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {message.content}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        message.type === "user"
                          ? "text-red-100"
                          : "text-gray-500"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Loading Animation */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="bg-white rounded-r-2xl rounded-tl-2xl rounded-bl-md shadow-sm p-3">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t">
              {showNameInput ? (
                <div className="flex space-x-2">
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name..."
                    className="flex-1"
                    onKeyPress={(e) => e.key === "Enter" && handleNameSubmit()}
                  />
                  <Button
                    onClick={handleNameSubmit}
                    size="sm"
                    className="bg-red-500 hover:bg-red-600"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <>
                  {!selectedQuery && (
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-700">
                        Quick Options:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {queries.slice(0, 2).map((q) => (
                          <Button
                            key={q.id}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuerySelect(q.id)}
                            className="text-xs rounded-full border-orange-300 text-orange-600 hover:bg-orange-50"
                          >
                            {q.label}
                          </Button>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {queries.slice(2).map((q) => (
                          <Button
                            key={q.id}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuerySelect(q.id)}
                            className="text-xs rounded-full border-orange-300 text-orange-600 hover:bg-orange-50"
                          >
                            {q.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
