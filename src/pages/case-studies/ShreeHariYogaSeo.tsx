import React from 'react';
import { BarChart, TrendingUp, Search, Globe, Award, Users } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Seo from '../../components/Seo';
import CtaSection from '../../components/CtaSection';

const ShreeHariYogaSeo = () => {
  return (
    <div className="min-h-screen">
      <Seo config={{
        title: "SEO Case Study: Shree Hari Yoga School | Hyperlinq Technology",
        description: "Discover how our SEO strategies helped Shree Hari Yoga School increase enrollment in their YTTC programs by 215%.",
        keywords: "SEO case study, yoga school SEO, YTTC enrollment, Shree Hari Yoga",
        ogImage: "/images/case-studies/shree-hari-yoga-og.jpg"
      }} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-hyperlink-accent font-medium uppercase tracking-wider mb-2 block">SEO Case Study</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Shree Hari Yoga School</h1>
              <p className="text-xl text-gray-700 mb-8">
                How we increased YTTC program enrollments by 215% through strategic SEO optimization
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg shadow-soft px-4 py-3">
                  <span className="block text-hyperlink-primary font-bold text-2xl">215%</span>
                  <span className="text-sm text-gray-600">Enrollment Increase</span>
                </div>
                <div className="bg-white rounded-lg shadow-soft px-4 py-3">
                  <span className="block text-hyperlink-primary font-bold text-2xl">187%</span>
                  <span className="text-sm text-gray-600">Organic Traffic</span>
                </div>
                <div className="bg-white rounded-lg shadow-soft px-4 py-3">
                  <span className="block text-hyperlink-primary font-bold text-2xl">Top 3</span>
                  <span className="text-sm text-gray-600">Google Rankings</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/case-studies/shree-hari-yoga-hero.jpg" 
                alt="Shree Hari Yoga School" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Client Overview</h2>
            <p className="text-gray-700 mb-6">
              Shree Hari Yoga School is a prestigious yoga teacher training center in Rishikesh, India, offering 
              internationally recognized Yoga Teacher Training Certification (YTTC) programs. Despite their excellent 
              reputation and high-quality training, they were struggling to attract international students to their 
              programs due to intense competition in the yoga capital of the world.
            </p>
            <p className="text-gray-700 mb-6">
              The school offers 200-hour, 300-hour, and 500-hour yoga teacher training courses accredited by Yoga Alliance, 
              along with specialized courses in Ayurveda and meditation. Their target audience includes aspiring yoga 
              teachers from North America, Europe, and Australia.
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
                <h3 className="text-xl font-bold mb-3">Intense Competition</h3>
                <p className="text-gray-700">
                  Rishikesh has hundreds of yoga schools competing for the same keywords and audience, making it 
                  extremely difficult to stand out in search results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold mb-3">Low Website Visibility</h3>
                <p className="text-gray-700">
                  The school's website was not ranking for key terms like "yoga teacher training in Rishikesh" 
                  and "200 hour YTTC," resulting in minimal organic traffic.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold mb-3">Poor Technical SEO</h3>
                <p className="text-gray-700">
                  The website had numerous technical issues including slow loading times, poor mobile optimization, 
                  and inadequate schema markup.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold mb-3">Limited Content Strategy</h3>
                <p className="text-gray-700">
                  The website lacked comprehensive, SEO-optimized content that addressed potential students' questions 
                  and concerns about yoga teacher training.
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
              We developed a comprehensive SEO strategy tailored specifically for the yoga education niche:
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center">
                    <Search className="w-6 h-6 text-hyperlink-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">In-depth Keyword Research</h3>
                  <p className="text-gray-700">
                    We conducted extensive keyword research to identify high-intent search terms specific to yoga teacher 
                    training. We discovered that many potential students were searching for specific yoga styles, course 
                    durations, and accommodation options. We targeted long-tail keywords like "200 hour hatha yoga teacher 
                    training Rishikesh with accommodation" that had lower competition but high conversion potential.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-hyperlink-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technical SEO Overhaul</h3>
                  <p className="text-gray-700">
                    We implemented a complete technical SEO overhaul, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>Improving site speed by optimizing images and implementing lazy loading</li>
                    <li>Enhancing mobile responsiveness for better user experience</li>
                    <li>Implementing schema markup for courses, reviews, and organization</li>
                    <li>Creating an XML sitemap and optimizing robots.txt</li>
                    <li>Fixing broken links and redirects</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-hyperlink-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
                  <p className="text-gray-700">
                    We developed a comprehensive content strategy that included:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>Creating detailed course pages with optimized content for each YTTC program</li>
                    <li>Developing an informative blog with articles addressing common questions</li>
                    <li>Publishing student success stories and testimonials</li>
                    <li>Creating location-specific content highlighting the benefits of studying in Rishikesh</li>
                    <li>Implementing FAQ schema with answers to common questions</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-hyperlink-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Local SEO & Authority Building</h3>
                  <p className="text-gray-700">
                    We enhanced the school's local presence and built domain authority through:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>Optimizing Google Business Profile with photos, reviews, and accurate information</li>
                    <li>Building high-quality backlinks from yoga publications and directories</li>
                    <li>Creating partnerships with yoga influencers for content collaboration</li>
                    <li>Implementing a review generation strategy to increase positive testimonials</li>
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
              Our comprehensive SEO strategy delivered exceptional results for Shree Hari Yoga School:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-hyperlink-primary mr-3" />
                  <h3 className="text-xl font-bold">Organic Traffic</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Increased organic traffic by 187% within 6 months
                </p>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-hyperlink-primary rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <div className="flex items-center mb-4">
                  <BarChart className="w-8 h-8 text-hyperlink-primary mr-3" />
                  <h3 className="text-xl font-bold">Keyword Rankings</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Achieved top 3 rankings for 27 high-value keywords
                </p>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-hyperlink-primary rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft mb-8">
              <h3 className="text-xl font-bold mb-4">Key Performance Improvements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-hyperlink-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>215% increase in YTTC program enrollments</strong> compared to the previous year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hyperlink-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>68% increase in international student applications</strong> from target markets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hyperlink-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>43% reduction in cost per acquisition</strong> through organic channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hyperlink-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>Top position for "200 hour yoga teacher training Rishikesh"</strong> and related terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hyperlink-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>Featured snippets</strong> for 8 high-value yoga training related queries</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
              <blockquote className="italic text-gray-700 border-l-4 border-hyperlink-primary pl-4 py-2">
                "Hyperlinq Technology transformed our online presence completely. Before working with them, we were struggling 
                to fill our yoga teacher training courses despite having excellent programs. Their SEO expertise helped us 
                reach students from around the world, and now we're booked months in advance. The ROI has been incredible, 
                and we continue to see growth in our applications each month."
              </blockquote>
              <p className="mt-4 font-medium">- Yogi Shri Hari, Founder, Shree Hari Yoga School</p>
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
              Our comprehensive SEO strategy helped Shree Hari Yoga School overcome intense competition in Rishikesh's 
              saturated yoga teacher training market. By implementing technical improvements, creating targeted content, 
              and building authority, we significantly increased their visibility, organic traffic, and most importantly, 
              student enrollments.
            </p>
            <p className="text-gray-700 mb-8">
              This case study demonstrates how a well-executed SEO strategy can transform a business in a competitive niche. 
              By focusing on the specific needs and search behaviors of their target audience, we were able to connect 
              Shree Hari Yoga School with qualified prospects from around the world.
            </p>
            
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-hyperlink-primary hover:bg-hyperlink-secondary transition-colors duration-300"
              >
                Ready to Grow Your Business? Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
      <Footer />
    </div>
  );
};

export default ShreeHariYogaSeo;