import { LeadCaptureForm } from './lead-capture-form';
import { Shield, Clock, Users } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-indigo-600/15 to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow parallax-bg"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow parallax-bg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium mb-8 text-white/90 animate-bounce-in hover-glow">
            🚀 Get Started
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent gradient-text">
              Business Website?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Discover exactly why your website isn't generating leads and get a personalized action plan
            to increase conversions. 100% free analysis - no commitment required.
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-2xl max-w-2xl mx-auto border border-gray-700 animate-scale-in mb-20 card-hover hover-lift">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">Get Your Free Website Audit</h3>
            <p className="text-gray-300">Fill out the form below and we'll contact you within 24 hours</p>
          </div>
          <LeadCaptureForm />
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center animate-fade-in-up mb-20">
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 hover-glow">
              <Shield className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">100% Free</h4>
            <p className="text-gray-300 text-base">No cost, no obligation, just results</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 hover-glow">
              <Clock className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-500" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">24 Hour Response</h4>
            <p className="text-gray-300 text-base">We'll get back to you within 24 hours</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 hover-glow">
              <Users className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-500" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Expert Team</h4>
            <p className="text-gray-300 text-base">Certified professionals with proven results</p>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-3xl p-12 border border-blue-800/50 backdrop-blur-sm card-hover hover-lift">
            <h3 className="text-3xl font-bold text-white mb-6">Prefer to Talk First?</h3>
            <p className="text-gray-300 mb-8 text-lg">Schedule a free consultation call to discuss your business goals</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 btn-primary hover-glow"
              >
                Schedule a Call
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 hover:bg-white/10 hover-glow"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
