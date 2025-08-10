import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-purple-900/10 to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-indigo-400/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">Trusted by local businesses</span>
        </div>

        {/* Main Headline */}
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Build a Website for Your Business That Gets More Leads
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get a professional, SEO-optimized website with AI-powered lead generation automation. Turn visitors into customers 24/7 without expensive advertising.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 h-16 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 border-0"
            >
Get Started Today
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('process')}
              className="group border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 px-8 py-4 h-16 text-lg font-medium rounded-2xl transition-all duration-300 hover:border-white/50"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              See How It Works
            </Button>
          </div>
        </div>
        
        {/* Hero Features */}
        <div className="animate-scale-in my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">SEO Optimized</span>
              </div>
              <p className="text-white/70 text-sm">Rank higher on Google for business keywords</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">AI-Powered</span>
              </div>
              <p className="text-white/70 text-sm">24/7 lead capture with smart automation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Lead Growth</span>
              </div>
              <p className="text-white/70 text-sm">150-300% increase in qualified leads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
