import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavScroll = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact" } });
      return;
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleClick}
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors focus:outline-none no-underline"
            style={{
              textDecoration: "none", // No underline
              boxShadow: "none", // No box outline
            }}
          >
            AutoFlow
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {["services", "solution", "results"].map((sec) => {
              const label =
                sec === "solution"
                  ? "How It Works"
                  : sec.charAt(0).toUpperCase() + sec.slice(1);
              return (
                <button
                  key={sec}
                  onClick={() => handleNavScroll(sec)}
                  className="relative px-4 py-2 focus:outline-none focus:ring-0 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 
             hover:after:w-full focus:after:w-full"
                >
                  {label}
                </button>
              );
            })}
            <Link
              to="/blog"
              className="relative px-4 py-2 focus:outline-none focus:ring-0 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 
             hover:after:w-full focus:after:w-full"
            >
              Blog
            </Link>
            <Link
              to="/pricing"
              className="relative px-4 py-2 focus:outline-none focus:ring-0 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 
             hover:after:w-full focus:after:w-full"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-base font-semibold rounded-2xl transition-transform duration-500 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="px-6 py-8 space-y-6">
            {["services", "solution", "results"].map((sec) => (
              <button
                key={sec}
                onClick={() => handleNavScroll(sec)}
                className="w-full text-left px-6 py-4 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded-xl transition-colors text-lg font-medium"
              >
                {sec === "solution"
                  ? "How It Works"
                  : sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
            <Link
              to="/blog"
              className="block w-full px-6 py-4 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded-xl text-lg font-medium"
            >
              Blog
            </Link>
            <Link
              to="/pricing"
              className="block w-full px-6 py-4 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded-xl text-lg font-medium"
            >
              Pricing
            </Link>
            <div className="pt-6 border-t border-gray-800">
              <Button
                onClick={handleGetStarted}
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
