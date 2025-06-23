'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this therapy?",
      answer: "No, it's not therapy. SunLe is your emotional buddy - a friend who listens without judgment and provides comfort through conversation."
    },
    {
      question: "Is it free?",
      answer: "Yes! 1000 messages per day are completely free. We also offer premium plans for unlimited messaging and additional features."
    },
    {
      question: "Will my chats be private?",
      answer: "100%. We don't share or sell your data. Your conversations are encrypted and completely confidential."
    },
    {
      question: "Can I switch between companions?",
      answer: "Absolutely! You can chat with Chutki for emotional support, then switch to Bhayya for career advice - all in the same app."
    },
    {
      question: "Does it work in Hindi?",
      answer: "Yes! SunLe is built specifically for Hindi and Hinglish users. You can chat in the language you're most comfortable with."
    },
    {
      question: "Is this available on iOS?",
      answer: "Currently, we're on Android with the iOS version coming soon. Join our waitlist to be notified when it launches!"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SunLe
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 pt-2">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;