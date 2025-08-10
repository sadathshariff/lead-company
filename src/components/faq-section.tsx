import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    question: "How fast can you build a website for my business?",
    answer: "We can build your website in less than a week from the initial consultation to final delivery."
  },
  {
    question: "What makes your websites generate more leads?",
    answer: "We combine SEO foundations, conversion copy, clear CTAs, and AI-assisted forms to capture and qualify leads."
  },
  {
    question: "Do you provide ongoing SEO and updates?",
    answer: "Yes. We offer monthly optimization, technical upkeep, and content support to maintain rankings and conversions."
  },
  {
    question: "Can you migrate my existing site?",
    answer: "Absolutely. We'll audit your current site, preserve SEO equity, and relaunch with improved performance and UX."
  },
  {
    question: "What's included in our website consultation?",
    answer: "Business analysis, goal assessment, technical requirements review, and a customized strategy to build your website for maximum lead generation."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (script.textContent?.includes('"@type":"FAQPage"')) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our web design and lead generation services.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors duration-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-medium text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`text-gray-400 w-5 h-5 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <CardContent className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed pt-3">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
