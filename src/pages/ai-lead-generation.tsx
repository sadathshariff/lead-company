import { ArrowRight, Bot, MessageSquare, TrendingUp, Users, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Bot,
    title: "24/7 Lead Capture",
    description: "Your AI chatbot never sleeps, capturing leads around the clock even when you're offline.",
    color: "text-blue-400",
    bg: "bg-blue-900/20"
  },
  {
    icon: MessageSquare,
    title: "Smart Qualification",
    description: "AI automatically qualifies leads based on your criteria, saving your team valuable time.",
    color: "text-indigo-400",
    bg: "bg-indigo-900/20"
  },
  {
    icon: TrendingUp,
    title: "Personalized Follow-ups",
    description: "Automated sequences that nurture prospects with relevant content and offers.",
    color: "text-purple-400",
    bg: "bg-purple-900/20"
  },
  {
    icon: Users,
    title: "CRM Integration",
    description: "Seamlessly syncs with your existing CRM and marketing tools for complete visibility.",
    color: "text-green-400",
    bg: "bg-green-900/20"
  }
];

const benefits = [
  "Increase lead generation by 300%",
  "Reduce response time from hours to seconds",
  "Qualify leads automatically 24/7",
  "Integrate with your existing tools",
  "Scale without hiring more staff",
  "Track performance in real-time"
];

export default function AILeadGeneration() {
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-indigo-600/5 to-transparent"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Bot className="w-4 h-4" />
              AI Lead Generation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Turn Every Website Visitor
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Into a Qualified Lead
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Our AI-powered lead generation system captures, qualifies, and nurtures prospects 24/7.
              Never miss another opportunity to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                Get Started Free
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                Watch Demo
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
              How AI Lead Generation
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Works for You
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our intelligent system handles the entire lead generation process automatically,
              from first contact to qualified prospect.
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

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Why Choose AI Lead
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Generation?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Traditional lead generation is time-consuming and expensive. Our AI solution
                automates everything while improving results.
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
              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-3xl p-8 border border-blue-800/50 shadow-lg backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-white mb-2">AI Performance Dashboard</h4>
                  <p className="text-blue-300 text-sm">Real-time lead generation metrics</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">+247%</div>
                    <div className="text-gray-400 text-sm">Lead Increase</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-gray-400 text-sm">AI Active</div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Conversion Rate</span>
                    <span className="text-green-400 text-sm">+89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-3xl p-12 border border-blue-800/50 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Lead Generation?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their lead generation with AI.
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                Start Free Trial
                <Zap className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}