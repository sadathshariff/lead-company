import { TrendingDown, Users, Clock, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: "Low Lead Generation",
    description: "Your website gets visitors but fails to convert them into paying customers.",
    stat: "Only 2-3% convert"
  },
  {
    icon: Users,
    title: "Poor User Experience",
    description: "Visitors leave quickly because your site is slow, confusing, or outdated.",
    stat: "68% bounce immediately"
  },
  {
    icon: Clock,
    title: "No 24/7 Lead Capture",
    description: "You miss potential customers when you're not available to respond.",
    stat: "60% of inquiries after hours"
  },
  {
    icon: DollarSign,
    title: "Expensive Ad Dependency",
    description: "Relying only on paid ads means high costs and no organic growth.",
    stat: "Ad costs up 40% yearly"
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Most Business Websites Don't Get More Leads
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            If your business website isn't generating the leads you need, you're not alone. These common issues prevent most websites from reaching their potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-red-600 w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                      <span className="text-red-600 font-semibold text-sm bg-red-50 px-3 py-1 rounded-full">
                        {problem.stat}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action after problems */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to turn your website into a lead generation machine?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
          >
            Get Your Free Website Audit
          </button>
        </div>
      </div>
    </section>
  );
}
