import { Zap, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">AutoFlow</span>
            </div>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Building AI-powered websites that generate leads and grow businesses.
              Modern design meets intelligent automation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-base text-left">Website Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-base text-left">AI Chatbot</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-base text-left">AI LeadGen Chatbot</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-base text-left">Voice Agent</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-base text-left">Review Management</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection('solution')} className="text-gray-400 hover:text-white transition-colors text-base text-left">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('results')} className="text-gray-400 hover:text-white transition-colors text-base text-left">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors text-base text-left">
                  FAQ
                </button>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors text-base">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-12 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AutoFlow. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:leadcompanywork@gmail.com"
                className="hover:text-white transition-colors"
              >
                leadcompanywork@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
