import { Check, Zap, Globe, Bot, BarChart3, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

const benefits = [
  {
    icon: Globe,
    title: "Search Engine Optimization",
    description: "Rank higher for 'build website for business' and related keywords to attract organic leads.",
    color: "text-green-600",
    bg: "bg-green-50",
    link: "/seo-optimization"
  },
  {
    icon: Bot,
    title: "AI Lead Generation",
    description: "AI chatbots and automated email sequences capture and nurture leads 24/7.",
    color: "text-indigo-600", 
    bg: "bg-indigo-50",
    link: "/ai-lead-generation"
  },
  {
    icon: Zap,
    title: "Website Development",
    description: "Professional websites optimized for speed and mobile devices to reduce bounce rates.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    link: "/website-development"
  },
  {
    icon: BarChart3,
    title: "Conversion Tracking",
    description: "Monitor lead sources, conversion rates, and ROI to optimize your marketing efforts.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    link: "#analytics"
  }
];

export default function SolutionSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            How to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Get More Leads</span> from Your Business Website
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our proven system combines SEO-optimized web design with AI-powered lead generation automation to help small businesses capture more qualified leads automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const cardContent = (
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 ${benefit.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`${benefit.color} w-6 h-6`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{benefit.description}</p>
                    <div className="flex items-center text-indigo-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                );
                
                if (benefit.link.startsWith('/')) {
                  return (
                    <Link key={index} href={benefit.link}>
                      <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md cursor-pointer">
                        {cardContent}
                      </Card>
                    </Link>
                  );
                } else {
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                      {cardContent}
                    </Card>
                  );
                }
              })}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative max-w-md mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl h-64 border border-gray-200 flex flex-col justify-center items-center p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Growth Dashboard</h3>
                  <p className="text-gray-600 text-sm">Real-time lead tracking & analytics</p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white rounded-lg p-3 text-center shadow">
                    <div className="text-lg font-bold text-green-600">↗ 250%</div>
                    <div className="text-xs text-gray-500">Lead Growth</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow">
                    <div className="text-lg font-bold text-indigo-600">24/7</div>
                    <div className="text-xs text-gray-500">AI Active</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">300%</p>
                  <p className="text-xs text-gray-600">Lead Increase</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24/7</p>
                  <p className="text-xs text-gray-600">AI Working</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
