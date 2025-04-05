import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "E-commerce Revenue Growth for Fashion Retailer",
      category: "E-commerce SEO",
      description: "Increased organic traffic by 215% and online sales by 175% for a fashion e-commerce brand through SEO optimization and content strategy.",
      image: "/case-studies/ecommerce.jpg",
      results: [
        "215% increase in organic traffic",
        "175% growth in online revenue",
        "63% improvement in conversion rate"
      ],
      link: "/case-studies/ecommerce-fashion-growth"
    },
    {
      title: "B2B Lead Generation for SaaS Company",
      category: "PPC & Content Marketing",
      description: "Developed an integrated digital marketing strategy for a B2B SaaS company that resulted in a 340% increase in qualified leads.",
      image: "/case-studies/saas.jpg",
      results: [
        "340% increase in qualified leads",
        "67% reduction in cost per acquisition",
        "12x ROI on marketing spend"
      ],
      link: "/case-studies/saas-lead-generation"
    },
    {
      title: "Brand Awareness Campaign for Healthcare Provider",
      category: "Social Media Marketing",
      description: "Created a comprehensive social media strategy that increased engagement by 280% and grew the client's following by over 200,000 followers.",
      image: "/case-studies/healthcare.jpg",
      results: [
        "280% increase in social engagement",
        "200K+ new social media followers",
        "158% increase in website traffic from social channels"
      ],
      link: "/case-studies/healthcare-brand-awareness"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-200/10 dark:bg-teal-900/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-200/10 dark:bg-blue-900/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Case Studies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            See how our data-driven digital marketing strategies have transformed businesses like yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={study.image} 
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-500/80 text-white backdrop-blur-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {study.description}
                </p>
                
                <div className="space-y-2 mb-5">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <a 
                  href={study.link} 
                  className="inline-flex items-center font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                >
                  Read case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all px-8 h-12">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
} 