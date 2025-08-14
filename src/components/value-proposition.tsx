import { Globe, Bot, MessageSquare, Mic, Star, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Build smart, high-performing websites that convert visitors into customers. Modern design, fast loading, and mobile-first approach.",
    color: "text-blue-400",
    bg: "bg-blue-900/20",
    hoverBg: "hover:bg-blue-900/30",
    border: "border-blue-800/50",
    features: ["SEO Optimized", "Mobile Responsive", "Fast Loading", "Conversion Focused"]
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "Advanced AI chatbot with natural language processing to engage visitors and answer questions 24/7.",
    color: "text-indigo-400",
    bg: "bg-indigo-900/20",
    hoverBg: "hover:bg-indigo-900/30",
    border: "border-indigo-800/50",
    features: ["24/7 Availability", "Natural Language", "Smart Responses", "Easy Integration"]
  },
  {
    icon: MessageSquare,
    title: "AI LeadGen Chatbot",
    description: "Specialized chatbot for capturing and qualifying leads automatically. Turn website visitors into sales-ready prospects.",
    color: "text-purple-400",
    bg: "bg-purple-900/20",
    hoverBg: "hover:bg-purple-900/30",
    border: "border-purple-800/50",
    features: ["Lead Qualification", "Contact Capture", "Follow-up Automation", "ROI Tracking"]
  },
  {
    icon: Mic,
    title: "Voice Agent",
    description: "AI-powered voice assistant that can handle customer calls, answer questions, and process orders naturally.",
    color: "text-green-400",
    bg: "bg-green-900/20",
    hoverBg: "hover:bg-green-900/30",
    border: "border-green-800/50",
    features: ["Voice Recognition", "Natural Speech", "Call Handling", "24/7 Support"]
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Automated system to collect, manage, and respond to customer reviews across all platforms.",
    color: "text-orange-400",
    bg: "bg-orange-900/20",
    hoverBg: "hover:bg-orange-900/30",
    border: "border-orange-800/50",
    features: ["Auto Collection", "Response Management", "Platform Integration", "Reputation Monitoring"]
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Complete automation suite that handles lead nurturing, follow-ups, and customer communication.",
    color: "text-red-400",
    bg: "bg-red-900/20",
    hoverBg: "hover:bg-red-900/30",
    border: "border-red-800/50",
    features: ["Lead Nurturing", "Email Automation", "CRM Integration", "Analytics Dashboard"]
  }
];

export default function ValueProposition() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/5 via-purple-600/5 to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow parallax-bg"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow parallax-bg" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-bounce-in">
            <Zap className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent gradient-text">
              Grow Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            From website development to AI-powered automation, we provide the complete toolkit
            to transform your business and generate more leads than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={` cursor-pointer  border-2 ${service.border} ${service.hoverBg} hover:border-gray-600 h-full animate-fade-in-up bg-gray-900/50 backdrop-blur-sm card-hover hover-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-10 h-full flex flex-col">
                  <div className={`w-20 h-20 ${service.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 hover-glow`}>
                    <Icon className={`${service.color} w-10 h-10 group-hover:text-white transition-colors duration-500`} />
                  </div>

                  <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-500`}>
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-500">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${featureIndex * 0.1}s` }}>
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700 group-hover:border-gray-600 transition-colors duration-500">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-500">Learn More</span>
                      <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}