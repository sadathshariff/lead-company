import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Highlight active section
      const sections = ['services', 'solution', 'results', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-black/70 backdrop-blur-md shadow-lg border-b border-gray-800/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              AutoFlow
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {['services', 'solution', 'results'].map(sec => {
              const label = sec === 'solution' ? 'How It Works' : sec.charAt(0).toUpperCase() + sec.slice(1);
              return (
                <button
                  key={sec}
                  onClick={() => handleNavScroll(sec)}
                  className={`relative px-6 py-3 rounded-xl font-medium overflow-hidden transition-all ${
                    activeSection === sec
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              );
            })}
            <Link href="/blog">
              <span className={`relative px-6 py-3 rounded-xl font-medium overflow-hidden transition-all ${
                activeSection === 'blog'
                  ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                  : 'text-gray-300 hover:text-white'
              }`}>
                <span className="relative z-10">Blog</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => handleNavScroll('contact')}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-base font-semibold rounded-2xl transition-transform duration-500 hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="px-6 py-8 space-y-6">
            {['services', 'solution', 'results'].map(sec => (
              <button
                key={sec}
                onClick={() => handleNavScroll(sec)}
                className="w-full text-left px-6 py-4 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded-xl transition-colors text-lg font-medium"
              >
                {sec === 'solution' ? 'How It Works' : sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
            <Link href="/blog">
              <span className="block w-full text-left px-6 py-4 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded-xl transition-colors text-lg font-medium">
                Blog
              </span>
            </Link>
            <div className="pt-6 border-t border-gray-800">
              <Button
                onClick={() => handleNavScroll('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl font-semibold text-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
