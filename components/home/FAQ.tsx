"use client";

import { useState } from 'react';
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  const faqs = [
    {
      question: "How does the AI adaptive learning work?",
      answer: "Our AI analyzes your quiz scores, time spent on tasks, and interaction patterns to build a knowledge graph. It then dynamically adjusts your curriculum, skipping what you know and reinforcing where you struggle."
    },
    {
      question: "Is the certification recognized by employers?",
      answer: "Yes! Our certifications are industry-recognized. We partner with top tech companies to ensure our curriculum meets current market demands."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Absolutely. There are no long-term contracts. You can cancel your monthly subscription instantly from your dashboard."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes, we offer a 50% discount for verified students. You can apply with your .edu email address during sign-up."
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-xl bg-gray-900/50 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/50 transition-colors"
      >
        <span className="font-medium text-white text-lg">{question}</span>
        {isOpen ? (
          <MinusIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
        ) : (
          <PlusIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
