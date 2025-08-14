import { CheckCircle, Clock, Users, TrendingUp, Zap, BarChart3 } from 'lucide-react';

const processSteps = [
  {
    step: "1",
    title: "Discovery & Strategy",
    description: "We analyze your business, target audience, and goals to create a customized growth strategy.",
    icon: CheckCircle,
    color: "text-blue-400",
    bg: "bg-blue-900/20"
  },
  {
    step: "2",
    title: "Design & Development",
    description: "Modern, conversion-focused website built with the latest technologies and best practices.",
    icon: Clock,
    color: "text-indigo-400",
    bg: "bg-indigo-900/20"
  },
  {
    step: "3",
    title: "AI Integration",
    description: "Seamlessly integrate AI chatbots, lead capture systems, and automation tools.",
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-900/20"
  },
  {
    step: "4",
    title: "Testing & Launch",
    description: "Rigorous testing ensures everything works perfectly before going live.",
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-900/20"
  },
  {
    step: "5",
    title: "Optimization",
    description: "Continuous monitoring and optimization for maximum lead generation results.",
    icon: Zap,
    color: "text-orange-400",
    bg: "bg-orange-900/20"
  }
];

const benefits = [
  {
    icon: BarChart3,
    title: "Proven Results",
    description: "Our clients see 150-300% increase in qualified leads within 90 days."
  },
  {
    icon: Clock,
    title: "Fast Implementation",
    description: "Get your new website and AI systems up and running in just 2-3 weeks."
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Dedicated support team to ensure your success and continued growth."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            How We Build Your
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Lead Generation Website
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Our proven 5-step process ensures your website is built for results, not just looks.
            We focus on conversion optimization and lead generation from day one.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-5 gap-6 mb-20">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-700 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                )}

                <div className={`relative z-10 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-64 flex flex-col justify-center animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-16 h-16 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`${step.color} w-8 h-8`} />
                  </div>

                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-700 max-w-5xl mx-auto mb-16 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Process?
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We've streamlined our process to deliver maximum results in minimum time,
              with ongoing support to ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700">
                  <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}