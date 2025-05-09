
import React from 'react';
import { User, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Hyperlinq Technology transformed our online presence. Their SEO strategy increased our organic traffic by 150% in just three months!",
    name: "Rajiv Sharma",
    position: "Marketing Director",
    company: "InnovateNow Ltd"
  },
  {
    quote: "The social media management team at Hyperlinq is exceptional. They've helped us build a loyal community and increase engagement across all platforms.",
    name: "Priya Patel",
    position: "CEO",
    company: "ModernTech Solutions"
  },
  {
    quote: "Their web design team created a stunning website that perfectly represents our brand. The UI/UX is intuitive and our conversion rates have improved significantly.",
    name: "Vivek Malhotra",
    position: "Founder",
    company: "EcoGreen Innovations"
  },
  {
    quote: "The PPC campaigns managed by Hyperlinq delivered an ROI of 400%. Their data-driven approach and continuous optimization make them the best in the business.",
    name: "Neha Kapoor",
    position: "Digital Marketing Head",
    company: "Global Retail Connect"
  }
];

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, position, company }) => {
  return (
    <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
      <CardContent className="p-6 md:p-8">
        <div className="mb-4 text-hyperlink-primary">
          <Quote size={32} />
        </div>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">{quote}</p>
        <div className="flex items-center">
          <div className="bg-hyperlink-light p-2 rounded-full mr-4">
            <User className="text-hyperlink-primary" size={20} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <p className="text-gray-600">{position}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say about our services and results.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
