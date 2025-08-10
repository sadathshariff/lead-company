import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 SEO Best Practices for Small Business Websites in 2024",
    description: "Discover the latest SEO strategies that actually work for small businesses to rank higher on Google and attract more customers.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 2,
    title: "How AI Chatbots Can Triple Your Website Lead Generation",
    description: "Learn how implementing AI-powered chatbots on your website can significantly increase lead capture and customer engagement.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "AI Tools",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 3,
    title: "Website Speed Optimization: Why Every Second Counts",
    description: "Explore the impact of website loading speed on user experience, SEO rankings, and conversion rates with actionable optimization tips.",
    author: "Lisa Rodriguez",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 4,
    title: "Converting Visitors to Leads: Design Psychology That Works",
    description: "Understand the psychological principles behind high-converting website designs and how to apply them to your business website.",
    author: "David Kim",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
  
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-900 via-purple-900 to-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Website Growth <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert tips, strategies, and insights to help your business website generate more leads and grow your online presence.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                      Read More →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}
