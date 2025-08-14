import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-indigo-600/5 to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-40">
        {/* Main Headline */}
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-14 leading-tight tracking-tight">
            Build a Website That
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Generates Leads 24/7
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-20 max-w-4xl mx-auto leading-relaxed font-medium">
            Get a professional, SEO-optimized website with AI-powered lead generation automation.
            Turn visitors into customers automatically without expensive advertising.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-20">
            <Button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-5 h-18 text-xl font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Get Started Today
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-500" />
            </Button>
          </div>
        </div>

        {/* Hero Features */}
        <div className="animate-scale-in my-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-500 h-52 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold text-lg">SEO Optimized</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Rank higher on Google for business keywords and get found by people actively searching for your services.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-500 h-52 flex flex-col justify-center" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold text-lg">AI-Powered</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                24/7 lead capture with smart automation that qualifies prospects and nurtures them to conversion.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-500 h-52 flex flex-col justify-center" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold text-lg">Lead Growth</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                150-300% increase in qualified leads with our proven system that works for any business.
              </p>
            </div>
          </div>

          {/* Trusted by Badge */}
          <div className="flex justify-center mt-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white/90 text-base font-medium">
                Trusted by local businesses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
