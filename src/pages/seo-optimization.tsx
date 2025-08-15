import { ArrowRight, Search, TrendingUp, Globe, Target, CheckCircle, Zap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate, useLocation } from 'react-router-dom';

const features = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Comprehensive keyword analysis to target the most valuable search terms for your business.",
    color: "text-blue-400",
    bg: "bg-blue-900/20"
  },
  {
    icon: Target,
    title: "On-Page Optimization",
    description: "Technical SEO improvements including meta tags, content structure, and page speed optimization.",
    color: "text-indigo-400",
    bg: "bg-indigo-900/20"
  },
  {
    icon: Globe,
    title: "Local SEO",
    description: "Optimize for local searches to attract customers in your geographic area.",
    color: "text-purple-400",
    bg: "bg-purple-900/20"
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    description: "Create high-quality, SEO-optimized content that ranks and converts visitors.",
    color: "text-green-400",
    bg: "bg-green-900/20"
  }
];

const benefits = [
  "Increase organic traffic by 200-400%",
  "Rank on first page for target keywords",
  "Improve local search visibility",
  "Boost website authority and trust",
  "Reduce dependency on paid advertising",
  "Long-term sustainable growth"
];

const seoProcess = [
  {
    step: "1",
    title: "Technical Audit",
    description: "Comprehensive analysis of your website's technical SEO foundation"
  },
  {
    step: "2",
    title: "Keyword Strategy",
    description: "Research and target the most valuable keywords for your business"
  },
  {
    step: "3",
    title: "Content Optimization",
    description: "Optimize existing content and create new SEO-friendly content"
  },
  {
    step: "4",
    title: "Local SEO Setup",
    description: "Optimize for local searches and Google My Business"
  },
  {
    step: "5",
    title: "Monitoring & Growth",
    description: "Track performance and continuously improve rankings"
  }
];

export default function SEOOptimization() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    // If we're already on home page, scroll to section
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/10 via-blue-600/5 to-transparent"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Search className="w-4 h-4" />
              SEO Optimization
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Get Found on Google
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                and Drive More Traffic
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Our comprehensive SEO strategy helps your website rank higher on Google,
              attract more organic traffic, and generate qualified leads without expensive advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                View Case Studies
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
              Complete SEO
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Optimization
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We cover every aspect of search engine optimization to ensure your website
              ranks higher and attracts more qualified traffic.
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
              Our 5-Step SEO
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We follow a proven methodology that delivers consistent results and sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mb-20">
            {seoProcess.map((step, index) => (
              <div key={index} className="relative">
                {index < seoProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-700 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                )}

                <div className="relative z-10 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-64 flex flex-col justify-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
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
                Why SEO is the
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Best Investment
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Unlike paid advertising, SEO provides long-term, sustainable results that
                compound over time and reduce your customer acquisition costs.
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
              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-3xl p-8 border border-green-800/50 shadow-lg backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-white mb-2">SEO Performance Dashboard</h4>
                  <p className="text-green-300 text-sm">Track your search rankings and traffic growth</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">+89%</div>
                    <div className="text-gray-400 text-sm">Traffic Growth</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">#1-3</div>
                    <div className="text-gray-400 text-sm">Google Rankings</div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Organic Traffic</span>
                    <span className="text-green-400 text-sm">+156%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-700 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-white text-sm font-medium">Top Rankings</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-700 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="text-white text-sm font-medium">Growing Traffic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-3xl p-12 border border-green-800/50 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Google Search?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get your free SEO audit and discover exactly how to improve your search rankings
              and drive more organic traffic to your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25"
              >
                Get Free SEO Audit
                <BarChart3 className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                View Results
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}