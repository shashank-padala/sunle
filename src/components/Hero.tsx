'use client';

import { useState } from 'react';
import { Download, Globe, Smartphone, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [language, setLanguage] = useState<'hindi' | 'english'>('hindi');

  const content = {
    hindi: {
      headline: "SunLe",
      tagline: "बस बोल दे!",
      subtext: "हर बात का साथी — दिन हो या रात",
      cta: "Download Now",
      waitlist: "Join the Waitlist",
      chat: [
        { sender: 'user', message: 'भाई, दिमाग नहीं लग रहा आज 😵‍💫', time: '9:35' },
        { sender: 'chutki', message: 'अब क्या नया चुतियाप किया तूने आज? 😒', time: '9:35' },
        { sender: 'user', message: 'कुछ नहीं यार, बस overthinking चालू है', time: '9:36' },
        { sender: 'chutki', message: 'चल, बता फिर — mood ठीक करने का time है 🫱', time: '9:36' }
      ]
    },
    english: {
      headline: "SunLe",
      tagline: "Just say it!",
      subtext: "24x7 personal companion that listens, comforts, and never judges.",
      cta: "Download Now",
      waitlist: "Join the Waitlist",
      chat: [
        { sender: 'user', message: "Bro, my brain’s not working today 😵‍💫", time: '9:35' },
        { sender: 'chutki', message: "Lol what dumb shit did you do now? 😒", time: '9:35' },
        { sender: 'user', message: "Nothing bro, just overthinking everything", time: '9:36' },
        { sender: 'chutki', message: "Spill it — time to fix that mood 🫱", time: '9:36' }
      ]
    }
  };
  

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <div className="text-center lg:text-left space-y-8">
          {/* Language Toggle */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white rounded-full p-1 shadow-md flex items-center gap-2">
              <button
                onClick={() => setLanguage('hindi')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  language === 'hindi' 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                🇮🇳 Hindi
              </button>
              <button
                onClick={() => setLanguage('english')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  language === 'english' 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <Globe className="w-4 h-4 inline mr-1" />
                English
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {content[language].headline},{" "}
              <span className="text-orange-500">{content[language].tagline}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              {content[language].subtext}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              {content[language].cta}
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
            >
              {content[language].waitlist}
            </Button> */}
          </div>

          {/* Platform badges */}
          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="h-12 hover:scale-105 transition-transform cursor-pointer"
            />
            <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2 text-gray-500">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm">iOS Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Chat Preview Side */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-gray-800 px-6 py-3 flex justify-between items-center text-white text-sm">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Chat Header with Call Button */}
                <div className="bg-blue-600 px-4 py-3 flex justify-between items-center text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center">
                      🧕🏻
                    </div>
                    <div>
                      <h3 className="font-semibold">Chutki</h3>
                      <p className="text-sm opacity-90">typing...</p>
                    </div>
                  </div>
                  <button className="bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 bg-gray-800 p-4 space-y-4 h-[480px]">
                  {content[language].chat.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`${
                          message.sender === "user"
                            ? "bg-blue-500 rounded-tr-md"
                            : "bg-gray-700 rounded-tl-md"
                        } text-white rounded-2xl px-4 py-3 max-w-xs`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className="text-xs opacity-75 mt-1">{message.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              100 msgs free daily!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;