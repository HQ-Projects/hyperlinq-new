// Add this to your existing SEO configurations
import { SeoConfig } from './seo';

export const getSeoConfig = (page: string) => {
  const configs: Record<string, SeoConfig> = {
    // Default config
    default: {
      title: "Hyperlinq Technology | Best AI Automation & Marketing Agency in Indore",
      description: "Hyperlinq Technology provides data-driven digital marketing, SEO, web design, and social media management services to help businesses grow online.",
      keywords: "digital marketing, SEO, web design, social media, AI automation, Indore",
      ogImage: "/images/hyperlinq-og-image.jpg"
    },
    
    // Add terms config
    terms: {
      title: "Terms of Service | Hyperlinq Technology",
      description: "Read our Terms of Service to understand the rules and guidelines for using Hyperlinq Technology's services.",
      keywords: "terms of service, legal terms, hyperlinq technology terms, service agreement",
      ogImage: "/images/og-terms.jpg"
    },
    
    // ... other configs
  };
  
  return configs[page] || configs.default;
};