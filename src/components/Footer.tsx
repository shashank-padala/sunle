'use client';
import { Instagram, Twitter, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SunLe</h3>
            <p className="text-xl text-orange-400 mb-4">बस बोल दो।</p>
            <p className="text-gray-400 max-w-md">
              Your 24x7 companion for emotional support, career guidance, and meaningful conversations. 
              Because everyone deserves to be heard.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <select className="bg-transparent text-gray-400 hover:text-white">
                  <option>Hindi</option>
                  <option>English</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              <span className="text-sm">Share on WhatsApp</span>
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2024 SunLe. Made with ❤️ for emotional wellness.
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-2">Ready to start talking?</h3>
          <p className="text-blue-100 mb-6">Your perfect companion is just a download away</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Download Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;