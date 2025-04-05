import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScheduleMeetingDialog } from "@/components/ScheduleMeetingDialog";

export default function HeroSection() {
  return (
    <section className="relative py-24 px-4 md:px-12 md:py-32 overflow-hidden mx-auto">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-slate-50 to-blue-50 dark:from-green-950/40 dark:via-slate-950 dark:to-blue-950/40 z-0"></div>
      <div className="absolute top-20 left-0 w-72 h-72 bg-green-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Digital Marketing Agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 leading-tight mb-6">
              Grow Your Business with Data-Driven Digital Marketing
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-lg">
              We help businesses achieve incredible growth through innovative strategies 
              based on real data and measurable results.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <ScheduleMeetingDialog 
                trigger={
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 rounded-lg shadow-lg hover:shadow-xl transition-all px-8 h-12">
                    Get Started
                  </Button>
                }
              />
              <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-200 h-12">
                <span>See our work</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={`/avatar-${i}.jpg`} 
                      width={40} 
                      height={40} 
                      alt={`Team member ${i}`}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">5.0 (2.5k+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image 
                src="/images/growth.png" 
                alt="Digital Marketing Dashboard" 
                width={650} 
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Floating card elements */}
            <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 z-20 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-100 dark:border-gray-700 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Traffic growth</div>
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">+147%</div>
                </div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 h-1 rounded-full overflow-hidden">
                <div className="bg-green-500 h-1 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -left-5 z-20 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700"></div>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active clients</span>
              </div>
              <div className="mt-2 flex items-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">9.8</div>
                <div className="ml-2 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
