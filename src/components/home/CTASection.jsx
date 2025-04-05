import React from "react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 px-4 md:px-12 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-purple-950/20 z-0"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-300/20 dark:bg-green-900/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-300/20 dark:bg-blue-900/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Ready to Grow Your Business?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Let's discuss how our data-driven digital marketing strategies can help you achieve your business goals. Schedule a free consultation with our experts today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all px-8 h-12">
                  Get Started
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg h-12">
                  Learn More
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Join <span className="font-semibold">350+</span> satisfied clients
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-100 dark:border-gray-600/30">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="Tell us about your project"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 outline-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all h-11">
                  Send Message
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 