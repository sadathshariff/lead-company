import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to scroll or navigate+scroll
  const handleNavScroll = (sectionId: string) => {
    if (location !== "/") {
      // Save target section and navigate to home
      localStorage.setItem("scrollToSection", sectionId);
      setLocation("/");
    } else {
      // Scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <img src="/logo.png" alt="Lead Company Logo" className="w-8 h-8 object-contain" />
              <span className={`text-lg font-semibold transition-colors ${
                isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}>
                LeadCompany
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => handleNavScroll('services')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-gray-100/10 ${
                isScrolled ? 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-gray-200 hover:text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavScroll('process')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-gray-100/10 ${
                isScrolled ? 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-gray-200 hover:text-white'
              }`}
            >
              How it Works
            </button>
            <button 
              onClick={() => handleNavScroll('results')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-gray-100/10 ${
                isScrolled ? 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-gray-200 hover:text-white'
              }`}
            >
              Results
            </button>
            <Link href="/blog">
              <span className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-gray-100/10 cursor-pointer ${
                isScrolled ? 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-gray-200 hover:text-white'
              }`}>
                Blog
              </span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => handleNavScroll('contact')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 h-9 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-white/10 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => handleNavScroll('services')}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavScroll('process')}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all"
              >
                How it Works
              </button>
              <button 
                onClick={() => handleNavScroll('results')}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all"
              >
                Results
              </button>
              <Link href="/blog">
                <span className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all cursor-pointer">
                  Blog
                </span>
              </Link>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button 
                  onClick={() => handleNavScroll('contact')}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
