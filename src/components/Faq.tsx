
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What digital marketing services does Hyperlinq Technology offer?",
    answer: "We offer a comprehensive suite of digital marketing services including SEO, Social Media Management, PPC Advertising, Web Design, and AI Automation. Each service is customized to meet the specific needs and goals of your business."
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy, and results typically take 3-6 months to become significant. However, some improvements can be seen within the first month. We provide regular reports to track progress and show the impact of our work over time."
  },
  {
    question: "How do you measure the success of your digital marketing campaigns?",
    answer: "We use a variety of metrics to measure success, depending on your goals. These may include organic traffic growth, keyword rankings, conversion rates, engagement metrics, return on ad spend (ROAS), and more. We provide detailed analytics and reports to show the impact of our work."
  },
  {
    question: "Do you offer customized packages for small businesses?",
    answer: "Yes, we understand that small businesses have unique needs and budget constraints. We offer scalable, customized packages designed specifically for small businesses to help them compete effectively in the digital space without breaking the bank."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience working with clients across many industries including e-commerce, healthcare, education, real estate, finance, technology, and more. Our team has the expertise to understand your industry-specific challenges and opportunities."
  },
  {
    question: "How often will I receive updates on my campaigns?",
    answer: "Communication is key to our process. We provide monthly comprehensive reports for all campaigns. Additionally, for active campaigns, we offer weekly updates on performance. Our team is also available for scheduled calls to discuss strategy and answer any questions."
  }
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and how we help businesses grow.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="border rounded-lg overflow-hidden bg-white shadow-soft">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline hover:text-hyperlink-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Don't see your question here?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-hyperlink-primary text-base font-medium rounded-md text-hyperlink-primary hover:bg-hyperlink-light transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
