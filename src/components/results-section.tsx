import { TrendingUp, Globe, Bot } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    icon: TrendingUp,
    title: "250% Lead Increase",
    quote: "After implementing their AI lead generation system, we increased our monthly leads from 12 to 42. The automated follow-up sequence alone converted 35% of our website visitors.",
    author: "Jennifer Martinez",
    role: "Marketing Agency Owner",
    company: "Digital Growth Solutions",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-200",
    iconColor: "text-green-500",
    titleColor: "text-green-700"
  },
  {
    icon: Globe,
    title: "First Page Google Rankings", 
    quote: "Within 6 weeks, we ranked #3 for 'build website for business' in our local market. Phone calls increased by 180% and we're booking 3-4 new clients weekly.",
    author: "David Thompson",
    role: "Construction Company",
    company: "Thompson Builders LLC",
    gradient: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    iconColor: "text-blue-500",
    titleColor: "text-blue-700"
  },
  {
    icon: Bot,
    title: "24/7 Lead Qualification",
    quote: "The AI chatbot qualified 78% of our leads automatically, saving us 15 hours per week. Our sales team now focuses only on high-quality prospects ready to buy.",
    author: "Rebecca Chen",
    role: "SaaS Startup Founder",
    company: "TechFlow Systems",
    gradient: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    iconColor: "text-purple-500",
    titleColor: "text-purple-700"
  }
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results: How Businesses <span className="gradient-text">Get More Leads</span> with Our Websites
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our clients consistently see significant improvements in lead generation and business growth through strategic implementation of SEO-optimized websites with AI-powered automation systems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 h-48 flex flex-col justify-center items-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">Businesses Served</div>
              <div className="text-sm text-gray-500 text-center">Average 200% lead increase in 90 days</div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon;
              return (
                <Card key={index} className={`bg-gradient-to-r ${testimonial.gradient} border ${testimonial.border} hover:shadow-lg transition-shadow duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Icon className={`${testimonial.iconColor} w-6 h-6 mt-1 flex-shrink-0`} />
                      <div>
                        <h3 className={`text-lg font-bold ${testimonial.titleColor} mb-1`}>
                          {testimonial.title}
                        </h3>
                        <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <p className="text-sm font-semibold text-gray-600">
                          — {testimonial.author}, {testimonial.role}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
