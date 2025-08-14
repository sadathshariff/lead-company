import { useEffect } from 'react';
import HeroSection from '@/components/hero-section';
import ValueProposition from '@/components/value-proposition';
import ProblemSection from '@/components/problem-section';
import SolutionSection from '@/components/solution-section';
import ProcessSection from '@/components/process-section';
import ResultsSection from '@/components/results-section';
import FAQSection from '@/components/faq-section';
import CTASection from '@/components/cta-section';

export default function Home() {
  useEffect(() => {
    // Scroll progress indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.id = 'scrollIndicator';
    document.body.appendChild(scrollIndicator);

    const handleScroll = () => {
      const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollIndicator.style.transform = `scaleX(${scrollProgress / 100})`;
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll to section if requested
    const section = localStorage.getItem("scrollToSection");
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollToSection");
      }, 100); // Delay to ensure DOM is ready
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollIndicator.parentNode) {
        scrollIndicator.parentNode.removeChild(scrollIndicator);
      }
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ValueProposition />
      <ProblemSection />
      <SolutionSection />
      {/* <ProcessSection /> */}
      <ResultsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
