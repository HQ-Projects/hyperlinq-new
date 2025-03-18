// SEO configuration for all pages
export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

// Default SEO values
export const defaultSeo: SeoConfig = {
  title: "Hyperlinq Technology | Best AI Automation & Marketing Agency in Indore",
  description: "Hyperlinq Technology provides data-driven digital marketing, SEO, web design, and social media management services to help businesses grow online.",
  ogImage: "/images/hyperlinq-og-image.jpg",
};

// Page-specific SEO configurations
export const pageSeo: Record<string, SeoConfig> = {
  home: {
    title: "Hyperlinq Technology | Marketing Automation Agency in Indore",
    description: "Transform your marketing strategy with our Indore-based agency. Discover tailored automation solutions to boost efficiency and drive business growth.",  
  },
  about: {
    title: "About Hyperlinq Technology | Your Partner for Online Success",
    description: "Learn about Hyperlinq Technology's mission, values, and expert team dedicated to delivering digital excellence with measurable results.",
  },
  blog: {
    title: "Blog | Hyperlinq Technology",
    description: "Latest insights, trends, and strategies in digital marketing, SEO, web design, and technology.",
  },
  contact: {
    title: "Contact Us | Hyperlinq Technology",
    description: "Get in touch with our team of digital marketing and web design experts to discuss your project.",
  },
  careers: {
    title: "Careers | Hyperlinq Technology",
    description: "Join our team of digital marketing experts and help businesses grow their online presence. Explore current job openings at Hyperlinq Technology.",
  },
  seo: {
    title: "SEO Services | Hyperlinq Technology",
    description: "Boost your website's visibility in search results with our data-driven search engine optimization strategies.",
  },
  webDesign: {
    title: "Web Design Services | Hyperlinq Technology",
    description: "Custom, responsive websites designed to convert visitors into customers and elevate your brand online.",
  },
  socialMedia: {
    title: "Social Media Management | Hyperlinq Technology",
    description: "Engage your audience and build brand awareness with our strategic social media planning and execution.",
  },
  digitalMarketing: {
    title: "Digital Marketing Services | Hyperlinq Technology",
    description: "Comprehensive digital marketing strategies to grow your business online and maximize ROI.",
  },
  aiAutomation: {
    title: "AI & Automation Services | Hyperlinq Technology",
    description: "Leverage the power of artificial intelligence to streamline operations, reduce manual tasks, and boost productivity for your business.",
  },
  caseStudies: {
    title: "Case Studies | Hyperlinq Technology",
    description: "Explore our success stories and see how we've helped businesses achieve remarkable results through strategic digital marketing solutions.",
  },
};

// Helper function to get SEO config for a specific page
export const getSeoConfig = (page: string): SeoConfig => {
  return pageSeo[page] || defaultSeo;
};