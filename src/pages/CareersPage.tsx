import React from 'react';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { getSeoConfig } from '../utils/seo';

const CareersPage = () => {
  const openPositions = [
    {
      title: "Digital Marketing Internship",
      department: "Marketing",
      location: "Indore, India",
      type: "Internship",
      description: "Join our digital marketing team as an intern and gain hands-on experience in SEO, content creation, and campaign management.",
      responsibilities: [
        "Assist in implementing SEO strategies",
        "Help create content for social media platforms",
        "Support the team in analyzing marketing campaign data",
        "Learn and apply digital marketing best practices"
      ],
      requirements: [
        "Currently pursuing a degree in Marketing, Communications, or related field",
        "Basic understanding of digital marketing concepts",
        "Strong written and verbal communication skills",
        "Eagerness to learn and grow in the digital marketing field"
      ]
    },
    {
      title: "Social Media Marketing Executive",
      department: "Marketing",
      location: "Indore, India",
      type: "Full-time",
      description: "We're looking for a creative and data-driven Social Media Marketing Executive to develop and implement our social media strategy.",
      responsibilities: [
        "Develop and manage social media content calendars",
        "Create engaging content for various social platforms",
        "Monitor and analyze social media performance metrics",
        "Identify trends and insights to optimize performance"
      ],
      requirements: [
        "1-3 years of experience in social media marketing",
        "Proficiency in social media management tools",
        "Strong understanding of social media platforms and best practices",
        "Excellent copywriting and content creation skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Seo config={{
        title: "Careers | Hyperlinq Technology",
        description: "Join our team of digital marketing experts and help businesses grow their online presence. Explore current job openings at Hyperlinq Technology."
      }} />
      <Navbar />
      
      {/* Careers Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-primary/10 to-hyperlink-secondary/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-hyperlink-light/40 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            We're looking for talented individuals who are passionate about digital marketing and technology.
            Explore our current openings and become part of our growing team.
          </p>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Hyperlinq Technology?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-6 rounded-xl">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hyperlink-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                We believe in nurturing talent and providing opportunities for professional growth and skill development.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hyperlink-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work in a supportive environment where teamwork, creativity, and innovation are encouraged.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hyperlink-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cutting-Edge Projects</h3>
              <p className="text-gray-600">
                Work on exciting projects using the latest technologies and digital marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-hyperlink-light border border-hyperlink-primary/10 text-hyperlink-primary text-sm font-medium">
                        {position.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        {position.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <a href="#application-form" className="btn-primary mt-4 md:mt-0">Apply Now</a>
                </div>
                
                <p className="text-gray-700 mb-4">{position.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Form Section */}
      <section id="application-form" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Apply Now</h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="glass-panel p-6 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-hyperlink-primary focus:border-hyperlink-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-hyperlink-primary focus:border-hyperlink-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-hyperlink-primary focus:border-hyperlink-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-hyperlink-primary focus:border-hyperlink-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <select
                  id="position"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-hyperlink-primary focus:border-hyperlink-primary"
                  required
                >
                  <option value="">Select a position</option>
                  <option value="Digital Marketing Internship">Digital Marketing Internship</option>
                  <option value="Social Media Marketing Executive">Social Media Marketing Executive</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
                <input
                  type="file"
                  id="resume"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-hyperlink-primary focus:border-hyperlink-primary"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX files only (max 5MB)</p>
              </div>
              
              <div className="mb-6">
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-hyperlink-primary focus:border-hyperlink-primary"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CareersPage;