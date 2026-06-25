"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Chatbot.module.css";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { profile } from "@/data/profile";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi there! I'm Ali's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Simulate bot thinking and responding
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let botResponse = "I'm Ali's AI assistant. You can ask me about his skills, experience, or request an appointment using the button below.";
      
      if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
        botResponse = "Ali is an expert in SQL, PostgreSQL, React, and AI-assisted full-stack development.";
      } else if (lowerInput.includes("experience") || lowerInput.includes("work")) {
        botResponse = "Ali has over 10 years of experience as a Business Analyst and Solution Architect.";
      } else if (lowerInput.includes("hi") || lowerInput.includes("hello")) {
        botResponse = "Hello! How can I help you learn more about Ali?";
      } else if (lowerInput.includes("contact") || lowerInput.includes("appointment")) {
        botResponse = "You can contact Ali using the contact form, or request an appointment directly via the WhatsApp button below!";
      }

      setMessages(prev => [...prev, { 
        role: "bot", 
        content: botResponse 
      }]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.chatTitle}>
              <Bot size={20} />
              <span>AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className={styles.closeButton} aria-label="Close Chat">
              <X size={20} />
            </button>
          </div>
          
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${msg.role === 'bot' ? styles.messageBot : styles.messageUser}`}>
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <a 
            href={`https://wa.me/${profile.contact.phone.replace(/[^0-9]/g, '')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsappButton}
          >
            Request Appointment via WhatsApp
          </a>
          
          <div className={styles.chatInputArea}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className={styles.chatInput}
            />
            <button 
              onClick={handleSend} 
              disabled={!input.trim()}
              className={styles.sendButton}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className={styles.chatButton}
          aria-label="Open Chatbot"
        >
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
}
