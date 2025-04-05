// src/components/home/CreativitySection.jsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CreativitySection() {
  const creativityProcess = [
    {
      title: "Research & Inspiration",
      description: "We immerse ourselves in your industry, audience, and competitors to gather insights that spark innovative ideas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Conceptualization",
      description: "Our creative team brainstorms unique concepts that align with your brand identity and marketing objectives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
    },
    {
      title: "Design & Refinement",
      description: "We create visually stunning designs and continuously refine them based on feedback and strategic goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
  ];

  const designApproaches = [
    {
      title: "User-Centered Design",
      description: "We prioritize the user experience in every design decision, creating intuitive interfaces that drive engagement.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Mobile-First Approach",
      description: "Our designs are optimized for mobile devices first, ensuring seamless experiences across all screen sizes.",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Brand Consistency",
      description: "We maintain your brand identity while pushing creative boundaries to create memorable visual experiences.",
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Data-Informed Design",
      description: "Our design decisions are informed by analytics and user behavior to maximize conversion and engagement.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-12 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/30 dark:via-gray-900 dark:to-purple-950/30 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
            Creative Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Where Creativity Meets Strategy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Our design philosophy combines artistic innovation with strategic thinking to create impactful digital experiences.
          </p>
        </div>

        {/* Creative Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="space-y-8">
              {creativityProcess.map((process, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="mt-1 flex-shrink-0 p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 transition-colors">
                    {process.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-indigo-200/20 dark:bg-indigo-900/20 rounded-full filter blur-3xl z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                <Image 
                  src="/images/creative-process.jpg" 
                  alt="Creative Design Process" 
                  width={600} 
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating element - design ideas */}
              <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 z-20 border border-gray-100 dark:border-gray-700 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Creative concepts</div>
                    <div className="text-xl font-bold text-purple-600 dark:text-purple-400">+89%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 h-1 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-1 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Approaches Grid */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Design Approach
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We blend artistic creativity with strategic methodology to deliver designs that not only captivate but convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designApproaches.map((approach, index) => (
            <div 
              key={index} 
              className="relative group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${approach.color}`}></div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                  {approach.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inspiration Showcase */}
        <div className="mt-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-300/20 dark:bg-indigo-700/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-300/20 dark:bg-purple-700/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6">
              Ready to Unleash Your Creative Potential?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
              Let our creative team transform your digital presence with designs that inspire, engage, and convert.
            </p>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
              Start Your Creative Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}