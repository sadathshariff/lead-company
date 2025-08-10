import { Button } from "@/components/ui/button";
import { Search, BarChart, Globe, Star, CheckCircle, ArrowRight } from "lucide-react";
import ServiceHeader from "@/components/service-header";

export default function SEOOptimizationPage() {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <ServiceHeader serviceName="SEO Optimization" />
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <Search className="w-4 h-4" />
              SEO Optimization
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Dominate Search Results &
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Get More Leads</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Our data-driven SEO strategies help businesses rank higher on Google, attract quality traffic, 
              and convert visitors into customers. Get found by people actively searching for your services.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Boost My SEO Rankings <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
              Our Comprehensive SEO Strategy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Keyword Research</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Identify high-value keywords your customers are searching for and optimize your content to rank for them.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Technical Optimization</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Improve site speed, mobile responsiveness, and technical infrastructure for better search performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Performance Tracking</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Monitor rankings, traffic growth, and conversion improvements with detailed monthly reports.
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
                  Why SEO Is Essential for Business Growth
                </h2>
                <div className="space-y-4">
                  {[
                    "75% of people never scroll past the first page of search results",
                    "SEO leads have a 14.6% close rate vs 1.7% for outbound marketing",
                    "Local SEO drives 50% of mobile searchers to visit stores within 24 hours",
                    "Organic search drives 53% of all website traffic across industries",
                    "SEO provides long-term results that compound over time",
                    "Higher rankings establish trust and credibility with potential customers"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-400">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-first">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl p-8 text-white">
                  <div className="text-center">
                    <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                    <h3 className="text-2xl font-bold mb-4">SEO Results</h3>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold">400%</div>
                        <div className="text-sm opacity-90">Traffic Increase</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">90 Days</div>
                        <div className="text-sm opacity-90">Initial Results</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">Top 3</div>
                        <div className="text-sm opacity-90">Google Rankings</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">250%</div>
                        <div className="text-sm opacity-90">Lead Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
              Our SEO Process
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">SEO Audit & Analysis</h3>
                  <p className="text-slate-600 dark:text-slate-400">Complete technical analysis of your current website performance and competitor research.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Strategy Development</h3>
                  <p className="text-slate-600 dark:text-slate-400">Create a custom SEO strategy targeting high-value keywords for your specific industry and location.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Implementation & Optimization</h3>
                  <p className="text-slate-600 dark:text-slate-400">Execute technical improvements, content optimization, and ongoing monitoring for continuous growth.</p>
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
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how we can improve your search rankings and drive more qualified leads.
            </p>
            <Button 
              onClick={() => window.location.href = '/#contact-form'}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-2xl"
            >
              Start My SEO Optimization Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}