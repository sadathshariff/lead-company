export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
}

export const defaultSEO: SEOData = {
  title: "Build a Website for Your Business | AI-Powered SEO & Lead Generation",
  description: "Get more leads with an SEO-optimized website designed for small businesses. AI tools + modern web design = more customers, less effort.",
  keywords: "build website, business website, SEO optimization, lead generation, AI tools, web design",
  canonical: "https://yourdomainhere.com",
  ogImage: "https://yourdomainhere.com/og-image.jpg",
};

export const blogSEO: SEOData = {
  title: "Website Growth Insights & SEO Tips | AIWebCraft Blog",
  description: "Expert tips, strategies, and insights to help your business website generate more leads and grow your online presence.",
  keywords: "SEO tips, website optimization, lead generation, digital marketing, business growth",
  canonical: "https://yourdomainhere.com/blog",
};

export const updatePageSEO = (seoData: Partial<SEOData>) => {
  // Update title
  if (seoData.title) {
    document.title = seoData.title;
  }

  // Update meta description
  if (seoData.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }
  }

  // Update canonical URL
  if (seoData.canonical) {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seoData.canonical);
    }
  }

  // Update Open Graph tags
  if (seoData.title) {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seoData.title);
    }
  }

  if (seoData.description) {
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seoData.description);
    }
  }
};

export const generateBlogPostSchema = (post: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  url: string;
  image?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.datePublished,
    "url": post.url,
    "image": post.image,
    "publisher": {
      "@type": "Organization",
      "name": "AIWebCraft",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomainhere.com/logo.jpg"
      }
    }
  };
};
