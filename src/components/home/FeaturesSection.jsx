import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
  const features = [
    {
      title: "Data-Driven Approach",
      description: "We analyze performance metrics to optimize campaigns in real-time, ensuring maximum ROI.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Advanced SEO Techniques",
      description: "Our cutting-edge optimization strategies drive organic traffic and improve search visibility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Conversion-Focused Design",
      description: "We create user experiences that guide visitors toward meaningful actions and conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      title: "Integrated Marketing",
      description: "Our holistic approach ensures all your marketing channels work together seamlessly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/30 dark:bg-green-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            What Makes Our Digital Marketing Agency Stand Out?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            With our data-driven approach and innovative strategies, we help businesses achieve exceptional growth and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/20 rounded-full filter blur-3xl z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                <Image 
                  src="/images/growth.png" 
                  alt="Digital Marketing Dashboard" 
                  width={600} 
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 z-20 border border-gray-100 dark:border-gray-700 max-w-[260px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion Rate</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">+27.4%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Previous</span>
                    <span className="font-medium text-gray-900 dark:text-white">3.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Current</span>
                    <span className="font-medium text-green-600 dark:text-green-400">4.1%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group hover:border-green-500 dark:hover:border-green-500/70">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/40 dark:to-blue-900/40 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 group-hover:from-green-100 group-hover:to-blue-100 dark:group-hover:from-green-900/60 dark:group-hover:to-blue-900/60">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm rounded-lg px-6 h-12">
                <span>Learn about our process</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
