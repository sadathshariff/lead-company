import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    title: "10 Ways to Increase Website Conversion Rates in 2024",
    excerpt: "Discover proven strategies to turn more website visitors into paying customers with these conversion optimization techniques.",
    author: "SiteCraft Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Conversion Optimization",
    image: "📈"
  },
  {
    title: "The Complete Guide to AI-Powered Lead Generation",
    excerpt: "Learn how artificial intelligence is revolutionizing lead generation and how to implement it in your business.",
    author: "SiteCraft Team",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "AI & Automation",
    image: "🤖"
  },
  {
    title: "SEO Best Practices for 2024: What's Changed?",
    excerpt: "Stay ahead of the competition with these updated SEO strategies that work in 2024 and beyond.",
    author: "SiteCraft Team",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "SEO",
    image: "🔍"
  },
  {
    title: "Building a High-Converting Landing Page: Step-by-Step Guide",
    excerpt: "Follow our proven framework to create landing pages that convert visitors into leads and customers.",
    author: "SiteCraft Team",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Web Design",
    image: "🎯"
  },
  {
    title: "How to Choose the Right Website Development Partner",
    excerpt: "Make the right choice for your business website with these essential criteria for selecting a development partner.",
    author: "SiteCraft Team",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Business",
    image: "🤝"
  },
  {
    title: "The Future of Digital Marketing: AI, Automation, and Personalization",
    excerpt: "Explore the emerging trends that will shape digital marketing in the coming years and how to prepare.",
    author: "SiteCraft Team",
    date: "February 15, 2024",
    readTime: "9 min read",
    category: "Digital Marketing",
    image: "🚀"
  }
];

const categories = [
  "All Posts",
  "Conversion Optimization",
  "AI & Automation",
  "SEO",
  "Web Design",
  "Business",
  "Digital Marketing"
];

export default function Blog() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/');
    // Scroll to contact section after navigation
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-indigo-600/5 to-transparent"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16  pt-10">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              📚 Blog & Insights
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Expert Insights on
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Growth
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover proven strategies, industry insights, and actionable tips to help your business
              grow online and generate more leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full group">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-4xl mb-4">{post.image}</div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>

                    <Button
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button
              variant="outline"
              className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-4 h-14 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10"
            >
              Load More Posts
            </Button>
          </div>
        </div>
      </section>


    </div>
  );
}
