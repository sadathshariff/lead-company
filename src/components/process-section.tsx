import { CheckCircle, Search, Users, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Identify Business Challenges",
    description: "We analyze your unique business challenges and understand what's preventing your current website from generating leads effectively.",
    features: ["Business audit", "Competitor analysis", "Market research", "Goal identification"]
  },
  {
    icon: Users,
    title: "Implement AI Solutions",
    description: "Deploy tailored AI tools and automation systems designed specifically to address your identified challenges and capture leads 24/7.",
    features: ["AI chatbots", "Lead scoring", "Automated follow-ups", "Smart form optimization"]
  },
  {
    icon: BarChart,
    title: "Optimize for Lead Generation",
    description: "Enhance your website's design and functionality to maximize lead capture with conversion-focused layouts and user experience.",
    features: ["Conversion optimization", "A/B testing", "Performance tracking", "Continuous improvements"]
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Proven Process to Get More Leads
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We've helped 500+ businesses increase their lead generation with our 3-step process that combines modern web design, SEO optimization, and automated lead capture systems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                {/* Step number and icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                
                {/* Features */}
                <ul className="space-y-3 text-left">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA after process */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to implement this proven system for your business?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
          >
Start My Website Project
          </button>
        </div>
      </div>
    </section>
  );
}