import LeadCaptureForm from './lead-capture-form';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-purple-900/20 to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
Get Started with Your Website
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Discover exactly why your website isn't generating leads and get a personalized action plan to increase conversions. 100% free analysis - no commitment required.
          </p>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Website Project</h3>
            <p className="text-gray-600">Complete this form to discuss your business goals and get a personalized website solution tailored to your needs.</p>
          </div>
          <LeadCaptureForm />
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Fast Delivery</h4>
            <p className="text-white/70 text-sm">Website ready in less than a week</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Lead Focused</h4>
            <p className="text-white/70 text-sm">Built to convert visitors into customers</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h4 className="text-white font-semibold mb-2">AI Powered</h4>
            <p className="text-white/70 text-sm">Smart automation that works 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
