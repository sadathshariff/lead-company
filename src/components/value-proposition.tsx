import { Clock, TrendingUp, Target } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate routine tasks and customer interactions, freeing your team to focus on strategic initiatives.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Leverage AI to identify and capitalize on new sales opportunities, optimizing your sales funnel.",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: Target,
    title: "Boost Lead Generation",
    description: "Implement intelligent lead capture systems that work 24/7 to attract and qualify prospects.",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }
];

export default function ValueProposition() {
  return (
    <section id="value" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our AI Solutions?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your operations, save time, and generate more leads with our AI-powered solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 ${benefit.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`${benefit.color} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}