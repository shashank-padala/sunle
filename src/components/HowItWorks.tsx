'use client';
import { Smartphone, Users, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Login with OTP",
      description: "No passwords. Just your phone number — like WhatsApp.",
      step: "1️⃣"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pick your Companion",
      description: "Chutki for listening, Bhayya for career, or your Flirty friend.",
      step: "2️⃣"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Start Chatting",
      description: "Speak your heart out, anytime, anywhere. No judgment.",
      step: "3️⃣"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in just 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                {/* Step Number */}
                <div className="text-6xl mb-4">{step.step}</div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                
                {/* Connecting Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;