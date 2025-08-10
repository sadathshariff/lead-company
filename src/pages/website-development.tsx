import { Button } from "@/components/ui/button";
import { Code, Smartphone, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import ServiceHeader from "@/components/service-header";

export default function WebsiteDevelopmentPage() {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <ServiceHeader serviceName="Website Development" />
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Website Development
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Build Your Business
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Online Presence</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              We create fast, secure, and conversion-focused websites that help your business grow. 
              From design to deployment, we handle everything so you can focus on running your business.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start My Website Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
              What Makes Our Websites Different
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Lightning Fast</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Optimized for speed with under 3-second load times to keep visitors engaged and improve SEO rankings.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Mobile-First Design</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Responsive design that looks perfect on all devices, ensuring great user experience for mobile visitors.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Secure & Reliable</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Built with security best practices, SSL certificates, and reliable hosting for 99.9% uptime.
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
                  Everything Your Business Website Needs
                </h2>
                <div className="space-y-4">
                  {[
                    "Custom design that reflects your brand and attracts your target audience",
                    "Content management system for easy updates without technical knowledge",
                    "Contact forms and lead capture tools to grow your customer base",
                    "SEO optimization built-in to help customers find you online",
                    "Google Analytics integration to track visitor behavior and conversions",
                    "Social media integration to expand your online presence"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-400">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-first">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white">
                  <div className="text-center">
                    <Code className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                    <h3 className="text-2xl font-bold mb-4">Development Stats</h3>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold">&lt;3s</div>
                        <div className="text-sm opacity-90">Load Time</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">100%</div>
                        <div className="text-sm opacity-90">Mobile Optimized</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">99.9%</div>
                        <div className="text-sm opacity-90">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">A+</div>
                        <div className="text-sm opacity-90">Security Grade</div>
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
              Our Development Process
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Discovery & Planning</h3>
                  <p className="text-slate-600 dark:text-slate-400">Understand your business goals, target audience, and technical requirements for the perfect website.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Design & Development</h3>
                  <p className="text-slate-600 dark:text-slate-400">Create a custom design and develop a fast, secure website that converts visitors into customers.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Launch & Support</h3>
                  <p className="text-slate-600 dark:text-slate-400">Deploy your website with full testing, training, and ongoing support to ensure your success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Built With Modern Technologies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              We use the latest web technologies to ensure your website is fast, secure, and future-proof.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">HTML5</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Modern markup</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">CSS3</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Advanced styling</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">JS</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Interactive features</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">SSL</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Secure hosting</p>
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
              Ready to Build Your Professional Website?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's create a website that helps your business grow and attract more customers.
            </p>
            <Button 
              onClick={() => window.location.href = '/#contact-form'}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-2xl"
            >
              Start My Website Development Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}