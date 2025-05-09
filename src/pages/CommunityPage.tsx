import React, { useState } from 'react';
import { ArrowRight, Users, BookOpen, Coffee, Globe, Calendar, MessageSquare, X } from 'lucide-react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

const CommunityPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const eventImages = [
    { src: "/Chai Pe Charcha 01/chai-pe-charcha-1.webp", alt: "Chai Pe Charcha - Discussion" },
    { src: "/Chai Pe Charcha 01/chai-pe-charcha-2.webp", alt: "Chai Pe Charcha - Networking" },
    { src: "/Chai Pe Charcha 01/chai-pe-charcha-3.webp", alt: "Chai Pe Charcha - Group Photo" },
    { src: "/Chai Pe Charcha 01/chai-pe-charcha-4.webp", alt: "Chai Pe Charcha - Presentation" },
    { src: "/Chai Pe Charcha 01/chai-pe-charcha-5.webp", alt: "Chai Pe Charcha - Event" }
  ];

  return (
    <ServicePageLayout
      title="Community"
      subtitle="Empowering digital marketers and entrepreneurs through knowledge sharing and collaboration"
      backgroundImage="/images/community-bg.jpg"
    >
      {/* Overview Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="glass-panel rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Building Strong Communities</h2>
            <p className="text-gray-700 mb-6">
              At Hyperlinq Technology, we believe in the power of community. We're committed to fostering a supportive environment 
              where digital marketers and entrepreneurs can learn, grow, and collaborate together.
            </p>
          </div>

          {/* Community Initiatives */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Community Initiatives</h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              Join our various programs designed to help you grow and succeed in the digital marketing landscape.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <BookOpen className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Marketing Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Free workshops and training sessions for aspiring marketers and entrepreneurs.
                </p>
                
              </div>

              <div className="glass-panel rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mentorship Program</h3>
                <p className="text-gray-600 mb-4">
                  Connect with experienced professionals for guidance and career development.
                </p>
                
              </div>

              <div className="glass-panel rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Coffee className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Industry Meetups</h3>
                <p className="text-gray-600 mb-4">
                  Regular networking events to foster collaboration and knowledge sharing.
                </p>
                
              </div>

              <div className="glass-panel rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <MessageSquare className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Online Community</h3>
                <p className="text-gray-600 mb-4">
                  Active online community for continuous learning and support.
                </p>
                
              </div>
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Past Events</h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              Relive the moments from our previous community gatherings and networking events.
            </p>

            <div className="glass-panel rounded-xl p-8 mb-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-2">Chai Pe Charcha Meetup 1.0</h3>
                  <p className="text-gray-500 mb-4">October 27, 2024 • Indore, MP</p>
                  <p className="text-gray-700 mb-6">
                    Our first community meetup brought together digital marketing enthusiasts for an evening of networking, 
                    knowledge sharing, and meaningful conversations over chai. The event featured discussions on current 
                    digital marketing trends, challenges, and opportunities in the industry.
                  </p>
                  <h4 className="font-bold mb-2">Event Highlights</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Interactive discussions on digital marketing strategies</li>
                    <li>Networking opportunities with industry professionals</li>
                    <li>Knowledge sharing sessions</li>
                    <li>Community building activities</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {eventImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="overflow-hidden rounded-xl">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="w-full h-64 object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/placeholder.svg";
                                console.log(`Failed to load image: ${image.src}`);
                              }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-4 gap-2">
                      <CarouselPrevious className="static transform-none" />
                      <CarouselNext className="static transform-none" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          {/* Event Gallery */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Event Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div 
                  key={num} 
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(`/Chai Pe Charcha 01/chai-pe-charcha-${num}.webp`)}
                >
                  <div className="aspect-square">
                    <img 
                      src={`/Chai Pe Charcha 01/chai-pe-charcha-${num}.webp`} 
                      alt={`Chai Pe Charcha Event - Image ${num}`} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-medium">Chai Pe Charcha 1.0</h4>
                    <p className="text-sm text-gray-600">October 27, 2024 • Indore, MP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Be part of our growing community of digital marketers and entrepreneurs. 
              Stay updated on upcoming events, workshops, and networking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://chat.whatsapp.com/G2UAD5EiPZ7DRUzCVhlVBa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center"
              >
                Join WhatsApp Community <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CommunityPage;