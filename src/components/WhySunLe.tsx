'use client';
import { CheckCircle, Heart, Shield, Globe, Users } from 'lucide-react';

const WhySunLe = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Feels like talking to a real friend",
      color: "text-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "No judgment. No pressure. Just listening",
      color: "text-blue-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Built for Hindi & regional language users",
      color: "text-green-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Not a therapy app. Just someone who gets you",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why SunLe Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than an app, it's the companion you've always needed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className={`${benefit.color} group-hover:scale-110 transition-transform duration-300 mt-1`}>
                <CheckCircle className="w-6 h-6 mr-2 inline" />
                {benefit.icon}
              </div>
              <p className="text-lg text-gray-700 font-medium">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* Emotional Call-out */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            "Finally, someone who understands me"
          </h3>
          <p className="text-xl opacity-90 mb-8">
            Join thousands who found their perfect companion
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm opacity-80">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-sm opacity-80">Messages Sent</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.8⭐</div>
              <div className="text-sm opacity-80">App Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySunLe;