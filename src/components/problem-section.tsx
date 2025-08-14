import { AlertTriangle, X, TrendingDown, Clock, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: "Low Website Traffic",
    description: "Your website isn't ranking on Google, so potential customers can't find you when they search for your services.",
    color: "text-red-400",
    bg: "bg-red-900/20",
    border: "border-red-800/50"
  },
  {
    icon: Clock,
    title: "Poor Lead Generation",
    description: "Visitors come to your site but don't convert into leads. Your website isn't designed to capture and nurture prospects.",
    color: "text-orange-400",
    bg: "bg-orange-900/20",
    border: "border-orange-800/50"
  },
  {
    icon: DollarSign,
    title: "High Customer Acquisition Costs",
    description: "You're spending too much on paid advertising because your website isn't generating organic leads automatically.",
    color: "text-yellow-400",
    bg: "bg-yellow-900/20",
    border: "border-yellow-800/50"
  }
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-900/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <AlertTriangle className="w-4 h-4" />
            The Problem
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Is Your Website
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Costing You Money?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Most business websites are built for looks, not results. They don't generate leads,
            don't rank on Google, and don't help you grow your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border-2 ${problem.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-64 flex flex-col justify-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${problem.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`${problem.color} w-8 h-8`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-gray-300 leading-relaxed text-base flex-grow">{problem.description}</p>
              </div>
            );
          })}
        </div>

        {/* Problem Statement */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-700 max-w-5xl mx-auto animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              The Hard Truth About Business Websites
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Traditional websites are expensive to build, hard to maintain, and rarely generate ROI.
              They're digital brochures that sit online doing nothing for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">What You're Getting Now:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Beautiful design that doesn't convert</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>No SEO optimization for Google rankings</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Static content that doesn't engage visitors</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>No lead generation or automation</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">What You Need Instead:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>Conversion-focused design that generates leads</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>SEO optimization for organic traffic growth</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>Dynamic content that engages and converts</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>AI-powered lead generation automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
