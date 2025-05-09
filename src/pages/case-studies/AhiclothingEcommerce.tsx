import React from 'react';
import { BarChart, TrendingUp, Search, ShoppingBag, Target, DollarSign } from 'lucide-react';
import CaseStudyLayout from '../../layouts/CaseStudyLayout';

const AhiclothingEcommerce = () => {
  return (
    <CaseStudyLayout
      seoConfig={{
        title: "E-commerce Revenue Growth: Ahiclothing | Hyperlinq Technology",
        description: "How we helped Ahiclothing increase revenue by 320% through integrated SEO and PPC strategies.",
        keywords: "e-commerce SEO, PPC case study, Ahiclothing, revenue growth, digital marketing Indore",
        ogImage: "/images/case-studies/ahiclothing-og.jpg"
      }}
      heroData={{
        title: "Ahiclothing E-commerce Growth",
        subtitle: "How we helped a struggling e-commerce business increase their revenue through integrated SEO and PPC",
        image: "/images/case-studies/ahiclothing-hero.jpg",
        stats: [
          { value: "250%", label: "Organic Traffic Increase" },
          { value: "185%", label: "Conversion Rate Increase" },
          { value: "320%", label: "ROI on PPC Campaigns" }
        ]
      }}
    >
      {/* Client Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Client Overview</h2>
            <p className="text-gray-700 mb-6">
              Ahiclothing is an Indore-based e-commerce brand specializing in sustainable, ethically-produced fashion. 
              Despite having high-quality products and a strong brand ethos, they were struggling to gain visibility 
              in a highly competitive online fashion market and weren't seeing the conversion rates needed for profitability.
            </p>
            <p className="text-gray-700 mb-6">
              Founded in 2019, Ahiclothing offers a range of eco-friendly clothing made from organic cotton and recycled 
              materials. Their target audience includes environmentally-conscious consumers aged 25-45 who are willing to 
              pay a premium for sustainable fashion.
            </p>
          </div>
        </div>
      </section>
      
      {/* Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Challenges</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold mb-3">Low Organic Visibility</h3>
                <p className="text-gray-700">
                  Ahiclothing's website was not ranking for key terms related to sustainable fashion and eco-friendly 
                  clothing, resulting in minimal organic traffic and high customer acquisition costs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold mb-3">Inefficient Ad Spend</h3>
                <p className="text-gray-700">
                  Previous PPC campaigns were poorly targeted, with high cost-per-click and low conversion rates, 
                  draining the marketing budget without delivering adequate returns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold mb-3">High Cart Abandonment</h3>
                <p className="text-gray-700">
                  The website experienced a cart abandonment rate of over 85%, significantly higher than the industry 
                  average, indicating issues with the user experience and checkout process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold mb-3">Limited Brand Recognition</h3>
                <p className="text-gray-700">
                  As a relatively new player in the sustainable fashion space, Ahiclothing struggled with brand 
                  recognition and establishing credibility with potential customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Strategy */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Strategy</h2>
            <p className="text-gray-700 mb-8">
              We developed an integrated digital marketing approach that combined SEO and PPC strategies:
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center">
                    <Search className="w-6 h-6 text-hyperlink-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive SEO Overhaul</h3>
                  <p className="text-gray-700">
                    We conducted extensive keyword research focusing on sustainable fashion terms with high purchase intent. 
                    Our SEO strategy included:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>Optimizing product pages with relevant keywords and enhanced descriptions</li>
                    <li>Creating category pages that targeted specific sustainable fashion niches</li>
                    <li>Developing a content strategy focused on eco-friendly fashion education</li>
                    <li>Implementing technical SEO improvements for site speed and mobile optimization</li>
                    <li>Building quality backlinks from fashion blogs and sustainability publications</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-hyperlink-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Targeted PPC Campaigns</h3>
                  <p className="text-gray-700">
                    We restructured their PPC strategy to focus on high-converting keywords and audiences:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>Implementing granular campaign structure based on product categories</li>
                    <li>Creating custom audiences based on interests in sustainability and ethical fashion</li>
                    <li>Developing dynamic remarketing campaigns to target cart abandoners</li>
                    <li>Optimizing ad copy to highlight unique selling propositions</li>
                    <li>Implementing automated bidding strategies to maximize conversion value</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-hyperlink-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Conversion Rate Optimization</h3>
                  <p className="text-gray-700">
                    We identified and fixed conversion bottlenecks throughout the customer journey:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>Streamlining the checkout process to reduce abandonment</li>
                    <li>Implementing trust signals and sustainability certifications</li>
                    <li>Adding customer reviews and social proof elements</li>
                    <li>Creating urgency with limited-time offers on sustainable collections</li>
                    <li>Optimizing product imagery and descriptions to highlight eco-friendly features</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-hyperlink-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data-Driven Optimization</h3>
                  <p className="text-gray-700">
                    We implemented robust analytics and continuous optimization:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>Setting up enhanced e-commerce tracking in Google Analytics</li>
                    <li>Creating custom dashboards for real-time performance monitoring</li>
                    <li>Conducting regular A/B testing of landing pages and ad creatives</li>
                    <li>Implementing automated budget allocation based on ROAS</li>
                    <li>Weekly optimization of campaigns based on performance data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Results</h2>
            <p className="text-gray-700 mb-8">
              Our integrated approach delivered exceptional results for Ahiclothing:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-green-600">250%</span>
                    <span className="text-gray-600">Increase in organic traffic</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Organic traffic grew from approximately 5,000 to 17,500 monthly visitors within 6 months.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <BarChart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-blue-600">185%</span>
                    <span className="text-gray-600">Increase in conversion rate</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  E-commerce conversion rate improved from 0.8% to 2.3%, significantly above industry average.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-purple-600">320%</span>
                    <span className="text-gray-600">ROI on PPC campaigns</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  PPC campaigns generated ₹3.2 for every ₹1 spent, a dramatic improvement from previous campaigns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <ShoppingBag className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-orange-600">42%</span>
                    <span className="text-gray-600">Reduction in cart abandonment</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Cart abandonment rate decreased from 85% to 49%, significantly improving checkout completion.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft mb-8">
              <h3 className="text-xl font-bold mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Ranked on page 1 for 35+ sustainable fashion keywords</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Reduced cost-per-acquisition by 65% through optimized PPC campaigns</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Increased average order value by 28% through strategic upselling</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Expanded customer base beyond Indore to major metro cities across India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Conclusion */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Our integrated SEO and PPC strategy transformed Ahiclothing from a struggling e-commerce business into a 
              profitable sustainable fashion brand. By focusing on both organic visibility and targeted paid campaigns, 
              we were able to significantly increase traffic, improve conversion rates, and deliver an exceptional ROI.
            </p>
            <p className="text-gray-700 mb-8">
              The success of this campaign demonstrates the power of combining complementary digital marketing strategies 
              and optimizing the entire customer journey. Ahiclothing continues to grow its market share in the sustainable 
              fashion space and has expanded its product lines based on the insights gained from our data-driven approach.
            </p>
            
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-hyperlink-primary hover:bg-hyperlink-secondary transition-colors duration-300"
              >
                Ready to Grow Your E-commerce Business? Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default AhiclothingEcommerce;