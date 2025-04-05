import React from "react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      title: "Digital Strategy",
      description: "We develop data-driven strategies that align with your business goals and deliver measurable results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic with our advanced SEO techniques.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Content Marketing",
      description: "Create engaging content that resonates with your audience and drives conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all social platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 px-4 md:px-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Elevate Your Digital Presence
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We offer comprehensive digital marketing solutions tailored to your business needs, focusing on driving growth and maximizing ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/40 dark:to-blue-900/40 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:from-green-100 group-hover:to-blue-100 dark:group-hover:from-green-900/60 dark:group-hover:to-blue-900/60 transition-all duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-green-600 dark:text-green-400 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all px-8 h-12">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
