import { Zap, CheckCircle, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const solutions = [
  {
    icon: TrendingUp,
    title: "SEO-Optimized Design",
    description: "Built from the ground up to rank on Google for your target keywords. Mobile-first design that converts visitors into leads.",
    color: "text-blue-400",
    bg: "bg-blue-900/20",
    features: ["Mobile-First Design", "Fast Loading Speed", "SEO Optimized", "Conversion Focused"]
  },
  {
    icon: Users,
    title: "AI Lead Generation",
    description: "24/7 automated lead capture with intelligent qualification. Your AI assistant never sleeps and always converts.",
    color: "text-indigo-400",
    bg: "bg-indigo-900/20",
    features: ["24/7 Availability", "Smart Qualification", "Instant Response", "Lead Nurturing"]
  },
  {
    icon: BarChart3,
    title: "Automated Growth",
    description: "Set it and forget it. Our system automatically optimizes for better results while you focus on your business.",
    color: "text-purple-400",
    bg: "bg-purple-900/20",
    features: ["Auto-Optimization", "Performance Tracking", "Continuous Improvement", "ROI Monitoring"]
  }
];

const processSteps = [
  {
    step: "1",
    title: "Strategy & Research",
    description: "We analyze your market, competitors, and target audience to create a winning strategy."
  },
  {
    step: "2",
    title: "Design & Development",
    description: "Modern, conversion-focused design built with the latest technologies for speed and performance."
  },
  {
    step: "3",
    title: "AI Integration",
    description: "Seamlessly integrate AI chatbots, lead capture forms, and automation systems."
  },
  {
    step: "4",
    title: "Launch & Optimize",
    description: "Go live with continuous monitoring and optimization for maximum results."
  }
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            The Solution
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            How We Transform Your
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Website Into a Lead Machine
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Our proven system combines SEO-optimized web design with AI-powered lead generation automation
            to help small businesses capture more qualified leads automatically.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-700 hover:border-blue-600 h-full animate-fade-in-up bg-gray-900/50 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 ${solution.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${solution.color} w-8 h-8`} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 text-base flex-grow">
                    {solution.description}
                  </p>

                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-white mb-8">Our Proven 4-Step Process</h3>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-3xl p-8 border border-blue-800/50 shadow-lg backdrop-blur-sm">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">Growth Dashboard</h4>
                <p className="text-blue-300 text-sm">Real-time performance metrics</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">+247%</div>
                  <div className="text-gray-400 text-sm">Lead Increase</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">+89%</div>
                  <div className="text-gray-400 text-sm">Conversion Rate</div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Monthly Growth</span>
                  <span className="text-green-400 text-sm">+12.5%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-700 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="text-white text-sm font-medium">Live Leads</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-700 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="text-white text-sm font-medium">AI Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-3xl p-12 border border-blue-800/50 shadow-lg backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to See Results?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your free website audit and discover exactly how to transform your website
              into a lead generation machine.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Get Free Website Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

