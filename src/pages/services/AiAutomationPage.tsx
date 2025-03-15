import React from 'react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { Check, ArrowRight, Bot, Zap, BarChart, Settings } from 'lucide-react';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import { defaultReasons } from '@/data/whyChooseUsData';

const AiAutomationPage = () => {
  return (
    <ServicePageLayout
      title="AI & Automation Services"
      subtitle="Leverage the power of artificial intelligence to streamline operations and boost productivity"
      backgroundImage="/images/ai-automation-bg.jpg"
    >
      {/* Overview Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent Automation Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our AI and automation services help businesses streamline operations, reduce manual tasks,
                and leverage data-driven insights for better decision making. We implement cutting-edge
                technologies that drive efficiency and innovation.
              </p>
              <div className="flex items-center">
                <a href="#contact" className="btn-primary flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-light/30 to-white/10 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI Automation" 
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-hyperlink-light/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Our AI & Automation Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Chatbot Development</h3>
              <p className="text-gray-600 mb-4">
                Custom AI chatbots that enhance customer service, automate responses, and provide 24/7 support for your business.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Natural language processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Multi-platform integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Continuous learning capabilities</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 2 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
              <p className="text-gray-600 mb-4">
                Streamline repetitive tasks and business processes with intelligent automation solutions that save time and reduce errors.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Custom workflow design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Performance monitoring</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 3 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Leverage AI-powered analytics to forecast trends, customer behavior, and business outcomes for data-driven decision making.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Advanced data modeling</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Custom reporting dashboards</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Actionable business insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection 
        title="Our AI Implementation Process"
        steps={[
          {
            number: "01",
            title: "Discovery & Analysis",
            description: "We analyze your business processes to identify automation opportunities and define project goals."
          },
          {
            number: "02",
            title: "Solution Design",
            description: "Our team designs a custom AI solution tailored to your specific business needs and objectives."
          },
          {
            number: "03",
            title: "Development & Integration",
            description: "We develop and integrate the AI solution with your existing systems and workflows."
          },
          {
            number: "04",
            title: "Testing & Optimization",
            description: "Rigorous testing ensures the solution works flawlessly, followed by continuous optimization."
          }
        ]}
      />

      {/* Why Choose Us */}
      <WhyChooseUs 
        title="Why Choose Our AI & Automation Services"
        subtitle="Partner with us for innovative AI solutions that drive business growth"
        reasons={defaultReasons}
      />
    </ServicePageLayout>
  );
};

export default AiAutomationPage;