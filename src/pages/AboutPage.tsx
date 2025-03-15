
import React, { useState } from 'react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { CheckCircle, Trophy, Users, Globe, ArrowRight, X } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import AnimatedCard from '@/components/AnimatedCard';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

const AboutPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const stats = [
    { 
      icon: <Users size={24} className="text-green-500" />,
      value: "320+",
      label: "Happy Clients"
    },
    { 
      icon: <Trophy size={24} className="text-yellow-500" />,
      value: "10+",
      label: "Awards Won"
    },
    { 
      icon: <CheckCircle size={24} className="text-blue-500" />,
      value: "1000+",
      label: "Projects Completed"
    },
    { 
      icon: <Globe size={24} className="text-purple-500" />,
      value: "10+",
      label: "Years Experience"
    }
  ];

  const features = [
    "Data-driven strategies tailored to your business goals",
    "Comprehensive analytics and performance reporting",
    "Dedicated team of marketing and design experts",
    "Advanced AI tools for process automation",
    "Continuous optimization for maximum ROI",
    "Transparent communication throughout each project"
  ];

  return (
    <ServicePageLayout
      title="About Hyperlinq Technology"
      subtitle="Digital excellence with measurable results - your partner for online success"
      backgroundImage="/images/about-bg.jpg"
    >
      {/* Overview Section */}
      <section className="py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMDEwMTAiIHN0cm9rZS13aWR0aD0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-30"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hyperlink-light border border-hyperlink-primary/10 text-hyperlink-primary text-sm font-medium">
                Who We Are
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Digital Excellence, <span className="text-gradient">Measurable Results</span>
              </h2>
              
              <p className="text-lg text-gray-600">
                Hyperlinq Technology is a premier digital marketing agency dedicated to helping businesses grow their online presence. We combine strategic thinking with technical expertise to deliver solutions that drive real results.
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-hyperlink-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-hyperlink-primary/5 to-hyperlink-secondary/5 rounded-3xl blur-xl"></div>
                <AnimatedCard className="relative glass-panel rounded-2xl overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0"></div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-hyperlink-primary text-white text-2xl font-bold">H</div>
                      <h3 className="text-2xl font-bold mt-3">Hyperlinq Technology</h3>
                      <p className="text-gray-600">Digital Marketing Agency</p>
                    </div>
                    
                    <AspectRatio ratio={16/10} className="mb-6 rounded-xl overflow-hidden bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Our Team" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    
                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      {stats.map((stat, index) => (
                        <div key={index} className="bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-white/30 text-center">
                          <div className="flex justify-center mb-2">{stat.icon}</div>
                          <div className="font-bold text-xl">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Company History */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-hyperlink-light/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our humble beginnings to becoming a leading digital agency
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="space-y-12">
              {[
                {
                  year: "2018",
                  title: "Company Founded",
                  description: "Hyperlinq Technology was founded with a mission to help businesses succeed online."
                },
                {
                  year: "2020",
                  title: "Expanded Services",
                  description: "Added comprehensive digital marketing services to our portfolio."
                },
                {
                  year: "2021",
                  title: "Growth & Recognition",
                  description: "Received industry recognition and expanded our team to serve more clients."
                },
                {
                  year: "2024",
                  title: "AI Integration",
                  description: "Integrated advanced AI tools to enhance our service offerings and deliver better results."
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-24 text-right pr-6">
                    <div className="font-bold text-hyperlink-primary">{item.year}</div>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="h-full w-px bg-gray-300 absolute left-0"></div>
                    <div className="w-4 h-4 rounded-full bg-hyperlink-primary relative -left-2 mt-1"></div>
                  </div>
                  <div className="pl-6">
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-hyperlink-light/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>
          
          <div className="mb-12">
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-3">Guest Speaker at Idealic Institute of Management, Indore</h3>
                  <p className="text-gray-600 mb-4">
                    Our founder was invited as a distinguished guest speaker at the Idealic Institute of Management in Indore, 
                    sharing insights on digital marketing strategies and entrepreneurship with the next generation of business leaders.
                  </p>
                  <a href="#" className="inline-flex items-center text-hyperlink-primary hover:underline">
                    View more details <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <img 
                    src="/Events/Idealic College.jpg" 
                    alt="Speaking at Idealic Institute" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <img 
                    src="/Events/Idealic College 2.jpg" 
                    alt="Idealic Institute event" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("/Events/Idealic College.jpg")}
            >
              <img 
                src="/Events/Idealic College.jpg" 
                alt="Industry recognition 1" 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
            <div 
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("/Events/Idealic College 2.jpg")}
            >
              <img 
                src="/Events/Idealic College 2.jpg" 
                alt="Industry recognition 2" 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                <div className="text-center p-6">
                  <h4 className="font-bold text-lg mb-2">Featured On</h4>
                  <a 
                    href="https://www.designrush.com/agency/profile/hyperlinq-technology" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <div className="bg-[#1B1B1B] rounded-xl p-4 shadow-md">
                      <img
                        src="/brand-logos/designrush-new-logo.svg"
                        alt="DesignRush"
                        width="160"
                        height="36"
                        className="h-auto"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops and Industry Activities Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-hyperlink-light/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Workshops & Industry Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empowering businesses through knowledge sharing and skill development
            </p>
          </div>
          
          {/* MSME Workshop Feature */}
          <div className="mb-16">
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-hyperlink-light border border-hyperlink-primary/10 text-hyperlink-primary text-sm font-medium mb-4">
                    Featured Workshop
                  </div>
                  <h3 className="text-2xl font-bold mb-3">MSME Workshop on Digital Marketing</h3>
                  <p className="text-gray-600 mb-4">
                    We conducted an intensive workshop for small business owners in collaboration with GSITS, 
                    focusing on practical digital marketing strategies tailored specifically for MSMEs. 
                    The workshop covered social media marketing, SEO fundamentals, and cost-effective digital 
                    advertising techniques to help small businesses compete effectively online.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Small Business</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Digital Marketing</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">MSME</span>
                  </div>
                  <a href="#" className="inline-flex items-center text-hyperlink-primary hover:underline">
                    Learn more about our workshops <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                    <img 
                      src="/GSITS/GSITS.jpeg" 
                      alt="MSME Digital Marketing Workshop" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Workshop Gallery */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Workshop Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/GSITS/GSITS 2.jpeg")}
              >
                <div className="aspect-square">
                  <img 
                    src="/GSITS/GSITS 2.jpeg" 
                    alt="MSME Workshop Session" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-medium">Interactive Session</h4>
                  <p className="text-sm text-gray-600">Engaging with small business owners</p>
                </div>
              </div>
              
              <div 
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/GSITS/GSITS 3.jpeg")}
              >
                <div className="aspect-square">
                  <img 
                    src="/GSITS/GSITS 3.jpeg" 
                    alt="MSME Workshop Presentation" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-medium">Knowledge Sharing</h4>
                  <p className="text-sm text-gray-600">Presenting digital marketing strategies</p>
                </div>
              </div>
              
              <div 
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/GSITS/GSITS 4.jpeg")}
              >
                <div className="aspect-square">
                  <img 
                    src="/GSITS/GSITS 4.jpeg" 
                    alt="MSME Workshop Group" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-medium">Collaborative Learning</h4>
                  <p className="text-sm text-gray-600">Group activities and networking</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="btn-primary inline-flex items-center">
              Inquire About Workshops <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Image Popup Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
            <X className="h-5 w-5" />
          </DialogClose>
          {selectedImage && (
            <div className="relative w-full max-h-[80vh] flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt="Enlarged gallery image" 
                className="max-w-full max-h-[80vh] object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </ServicePageLayout>
  );
};

export default AboutPage;