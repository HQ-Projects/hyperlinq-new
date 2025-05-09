
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { ArrowRight, FileText, BarChart, TrendingUp } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  results: string[];
  icon: React.ReactNode;
}

const caseStudies: CaseStudyProps[] = [
  {
    title: "E-commerce Revenue Growth",
    category: "SEO & PPC",
    description: "Helped a struggling e-commerce business increase their revenue by implementing an integrated SEO and PPC strategy.",
    results: [
      "250% increase in organic traffic",
      "185% increase in conversion rate",
      "320% ROI on PPC campaigns"
    ],
    icon: <TrendingUp size={24} />
  },
  {
    title: "Brand Awareness Campaign",
    category: "Social Media Management",
    description: "Developed a comprehensive social media strategy for a new startup looking to establish their brand in a competitive market.",
    results: [
      "400% increase in social media followers",
      "300% increase in engagement rate",
      "Featured in 5 industry publications"
    ],
    icon: <BarChart size={24} />
  },
  {
    title: "Website Redesign & Conversion Optimization",
    category: "Web Design & UI/UX",
    description: "Completely redesigned an outdated website with modern UI/UX principles focused on conversion optimization.",
    results: [
      "65% decrease in bounce rate",
      "120% increase in page session time",
      "95% increase in lead generation"
    ],
    icon: <FileText size={24} />
  }
];

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, category, description, results, icon }) => {
  return (
    <AnimatedCard className="bg-white border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
      <div className="p-6 md:p-8 h-full flex flex-col">
        <div className="mb-4 text-hyperlink-primary">
          {icon}
        </div>
        <span className="text-sm text-hyperlink-accent font-medium uppercase tracking-wider mb-2">{category}</span>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-medium mb-3">Results:</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-hyperlink-primary mr-2">•</span>
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <a href="#contact" className="mt-auto inline-flex items-center text-hyperlink-primary hover:text-hyperlink-secondary font-medium transition-colors duration-300 group">
          View Full Case Study
          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
        </a>
      </div>
    </AnimatedCard>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We've helped businesses of all sizes achieve their digital marketing goals. 
            Here are some of our recent success stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-hyperlink-primary hover:bg-hyperlink-secondary transition-colors duration-300"
          >
            Request a Custom Case Study
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
