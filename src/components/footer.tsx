import { Link } from 'wouter';
import { Zap, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold">AIWebCraft</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building AI-powered websites that generate leads and grow businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="/website-development" className="text-gray-400 hover:text-white transition-colors">Website Design</a></li>
              <li><a href="/seo-optimization" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="/ai-lead-generation" className="text-gray-400 hover:text-white transition-colors">AI Integration</a></li>
              <li><a href="/ai-lead-generation" className="text-gray-400 hover:text-white transition-colors">Lead Generation</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#process" className="text-gray-400 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="/#results" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li>
                <Link href="/blog">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</span>
                </Link>
              </li>
              <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@aiwebcraft.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Business Ave, Suite 100<br />Your City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AIWebCraft. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
