import { Star, Globe, Users, TrendingUp, MessageSquare, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average Lead Increase",
    description: "Our clients see dramatic improvements in lead generation"
  },
  {
    icon: Users,
    value: "24/7",
    label: "AI Availability",
    description: "Never miss a lead opportunity again"
  },
  {
    icon: Globe,
    value: "89%",
    label: "Conversion Rate",
    description: "Higher conversion rates than industry average"
  },
  {
    icon: MessageSquare,
    value: "2.5x",
    label: "ROI Improvement",
    description: "Better return on investment for our clients"
  }
];

const testimonials = [
  {
    icon: Globe,
    title: "Professional Online Presence",
    quote: "They designed a website that looks modern, loads fast, and makes it easier for customers to contact us. We’ve already had great feedback from visitors.",
    author: "David Thompson",
    company: "Thompson Construction",
    avatar: "DT",
    rating: 5,
    gradient: "from-blue-900/30 to-indigo-900/30",
    border: "border-blue-800/50"
  },
  {
    icon: Users,
    title: "Leads Made Simple",
    quote: "The AI chatbot has been a great addition. It collects customer details even after hours, so we never miss an opportunity to follow up.",
    author: "Sarah Chen",
    company: "Chen Marketing",
    avatar: "SC",
    rating: 5,
    gradient: "from-purple-900/30 to-pink-900/30",
    border: "border-purple-800/50"
  },
  {
    icon: TrendingUp,
    title: "Easy to Work With",
    quote: "They handled everything from setup to launch. The process was smooth, and now we have a site we can proudly share with clients.",
    author: "Mike Rodriguez",
    company: "Rodriguez Services",
    avatar: "MR",
    rating: 5,
    gradient: "from-green-900/30 to-blue-900/30",
    border: "border-green-800/50"
  }
];


export default function ResultsSection() {
  return (
    <section id="results" className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/5 via-blue-600/5 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow parallax-bg"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow parallax-bg" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-bounce-in">
            <Star className="w-4 h-4" />
            Real Results
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            See How Businesses
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent gradient-text">
              Get More Leads
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Our clients consistently see significant improvements in lead generation and business growth
            through strategic implementation of SEO-optimized websites with AI-powered automation systems.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in-up border border-gray-700 card-hover hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                </div>
                <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
                <div className="text-blue-300 font-semibold mb-3 text-lg">{stat.label}</div>
                <p className="text-gray-400 text-base">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-10 mb-24">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${testimonial.gradient} border-2 ${testimonial.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group h-full animate-fade-in-up backdrop-blur-sm card-hover hover-lift`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-white group-hover:text-blue-200 transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-500">
                      {testimonial.title}
                    </h3>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-200 mb-8 text-base leading-relaxed italic flex-grow group-hover:text-white transition-colors duration-500">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Company Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-xs font-medium text-white mt-auto mb-6 group-hover:bg-white/30 transition-all duration-500">
                    <span className="font-semibold">{testimonial.company}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-base group-hover:scale-110 transition-transform duration-500">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg group-hover:text-blue-200 transition-colors duration-500">{testimonial.author}</div>
                      <div className="text-gray-300 text-base group-hover:text-white transition-colors duration-500">Business Owner</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24 animate-fade-in-up">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-16 shadow-lg border border-gray-700 max-w-4xl mx-auto card-hover hover-lift">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Get the Same Results?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get the same results for your business. Our proven system works for companies
              of all sizes across every industry.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 btn-primary hover-glow"
            >
              Start Growing Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
