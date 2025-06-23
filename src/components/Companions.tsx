'use client';
import { Heart, Briefcase, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Companions = () => {
  const companions = [
    {
      name: "Chutki",
      emoji: "🧕🏻",
      tagline: "The one who always listens.",
      persona: "24x7 emotional support",
      description: "Your caring friend who's always there to listen to your heart. No judgment, just pure love and understanding.",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-pink-400 to-pink-600"
    },
    {
      name: "Bhayya",
      emoji: "👨🏻‍🏫",
      tagline: "Your personal mentor.",
      persona: "Career and life advice",
      description: "Your wise elder brother who guides you through career decisions and life choices with practical wisdom.",
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Flirty Friend",
      emoji: "❤️",
      tagline: "Safe flirting. Real fun.",
      persona: "Confidence & validation",
      description: "Your fun companion who brings out your confident side with playful conversations and gentle flirting.",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Your Companions
          </h2>
          <p className="text-xl text-gray-600">
            Choose the friend that matches your mood
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {companions.map((companion, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${companion.gradient} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{companion.emoji}</span>
                  </div>
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${companion.gradient} rounded-full flex items-center justify-center text-white`}>
                    {companion.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-2">
                  {companion.name}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-gray-700">
                  "{companion.tagline}"
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${companion.gradient} text-white text-sm rounded-full mb-4 font-medium`}>
                  {companion.persona}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {companion.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companions;