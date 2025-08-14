import { ArrowRight, Code, Smartphone, Zap, Target, CheckCircle, Globe, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailor-made websites built specifically for your business needs and goals.",
    color: "text-blue-400",
    bg: "bg-blue-900/20"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive design that works perfectly on all devices and screen sizes.",
    color: "text-indigo-400",
    bg: "bg-indigo-900/20"
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast loading speeds for better user experience and SEO rankings.",
    color: "text-purple-400",
    bg: "bg-purple-900/20"
  },
  {
    icon: Target,
    title: "Conversion Focused",
    description: "Every element designed to convert visitors into leads and customers.",
    color: "text-green-400",
    bg: "bg-green-900/20"
  }
];

const benefits = [
  "Increase conversion rates by 200-300%",
  "Improve user experience and engagement",
  "Boost search engine rankings",
  "Reduce bounce rates and increase time on site",
  "Professional appearance that builds trust",
  "Easy to maintain and update"
];

const developmentProcess = [
  {
    step: "1",
    title: "Discovery & Planning",
    description: "Understand your business goals and create a comprehensive development strategy"
  },
  {
    step: "2",
    title: "Design & Prototyping",
    description: "Create beautiful, conversion-focused designs that align with your brand"
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "Build your website with modern technologies and rigorous testing"
  },
  {
    step: "4",
    title: "Launch & Optimization",
    description: "Go live with continuous monitoring and performance optimization"
  }
];

export default function WebsiteDevelopment() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-blue-600/5 to-transparent"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-900/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Code className="w-4 h-4" />
              Website Development
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Professional Websites That
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Convert Visitors to Customers
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              We build high-performing, conversion-focused websites that not only look great
              but also generate leads and grow your business 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                Start My Project
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              What Makes Our
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Websites Different
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don't just build pretty websites. We create conversion machines that
              turn visitors into customers and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className={`${feature.color} w-8 h-8`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed flex-grow">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Our 4-Step
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We follow a proven methodology that ensures your website is built right
              and delivers results from day one.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-20">
            {developmentProcess.map((step, index) => (
              <div key={index} className="relative">
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-700 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                )}

                <div className="relative z-10 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-64 flex flex-col justify-center">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Why a Professional
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Website Matters
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your website is often the first impression potential customers have of your business.
                Make it count with a professional, conversion-focused design.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl p-8 border border-purple-800/50 shadow-lg backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-white mb-2">Website Performance</h4>
                  <p className="text-purple-300 text-sm">Track your website's success metrics</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">+89%</div>
                    <div className="text-gray-400 text-sm">Conversion Rate</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">2.3s</div>
                    <div className="text-gray-400 text-sm">Load Time</div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">User Engagement</span>
                    <span className="text-green-400 text-sm">+156%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-700 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-white text-sm font-medium">High Performance</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-700 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="text-white text-sm font-medium">Mobile Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-800/50 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Dream Website?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and create a website that not only looks amazing
              but also drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                Start My Project
                <Globe className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}