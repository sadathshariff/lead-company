import { Button } from "@/components/ui/button";
import { Bot, Target, Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import ServiceHeader from "@/components/service-header";

export default function AILeadGenerationPage() {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <ServiceHeader serviceName="AI Lead Generation" />
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              AI-Powered Lead Generation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Turn Visitors Into
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Qualified Leads</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Our AI chatbots work 24/7 to qualify prospects, answer questions, and capture leads while you sleep. 
              Increase your conversion rate by up to 300% with intelligent conversation automation.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get AI Lead Generation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
              How AI Lead Generation Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Smart Visitor Targeting</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  AI analyzes visitor behavior and engagement patterns to identify high-intent prospects automatically.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Intelligent Conversations</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Natural language processing engages visitors with personalized conversations that feel human.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Automated Follow-up</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Qualified leads are automatically added to your CRM with detailed conversation insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Why AI Lead Generation Outperforms Traditional Methods
                </h2>
                <div className="space-y-4">
                  {[
                    "Available 24/7 to capture leads when your competitors are offline",
                    "Qualifies prospects automatically, saving your team countless hours",
                    "Increases conversion rates by 200-300% compared to static forms",
                    "Provides detailed visitor insights and conversation analytics",
                    "Integrates seamlessly with your existing CRM and email systems",
                    "Scales infinitely without adding staff or overhead costs"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-400">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-first">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
                  <div className="text-center">
                    <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                    <h3 className="text-2xl font-bold mb-4">Real Results</h3>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold">300%</div>
                        <div className="text-sm opacity-90">Conversion Increase</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">24/7</div>
                        <div className="text-sm opacity-90">Lead Capture</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">85%</div>
                        <div className="text-sm opacity-90">Time Saved</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">0</div>
                        <div className="text-sm opacity-90">Missed Opportunities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Lead Generation?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how AI can capture more qualified leads for your business.
            </p>
            <Button 
              onClick={() => window.location.href = '/#contact-form'}
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-2xl"
            >
              Start My AI Lead Generation Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}