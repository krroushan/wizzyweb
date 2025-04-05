import React from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Working with this agency transformed our online presence. Our conversion rates increased by 150% within just three months.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "/avatar-1.jpg"
    },
    {
      quote: "Their data-driven approach helped us identify opportunities we hadn't considered. The ROI on our campaigns has been exceptional.",
      author: "Michael Chen",
      role: "CEO",
      company: "Innovate Solutions",
      avatar: "/avatar-2.jpg"
    }
  ];

  const clients = [
    { name: "Microsoft", logo: "/clients/microsoft.svg" },
    { name: "Google", logo: "/clients/google.svg" },
    { name: "Netflix", logo: "/clients/netflix.svg" },
    { name: "Airbnb", logo: "/clients/airbnb.svg" },
    { name: "Spotify", logo: "/clients/spotify.svg" },
    { name: "Slack", logo: "/clients/slack.svg" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-pink-200/10 dark:bg-pink-900/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-blue-200/10 dark:bg-blue-900/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We've helped businesses of all sizes achieve remarkable results through data-driven digital marketing strategies.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow relative overflow-hidden group"
            >
              {/* Decorative quote mark */}
              <div className="absolute -top-2 -left-2 text-9xl text-gray-100 dark:text-gray-800 leading-none pointer-events-none">
                "
              </div>
              
              <div className="relative">
                <div className="mb-6">
                  <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
                    <Image 
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                
                {/* Gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Clients section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted By Leading Brands
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We work with companies of all sizes, from startups to large enterprises, helping them achieve their digital marketing goals.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {clients.map((client, index) => (
              <div key={index} className="transition-all duration-300 grayscale opacity-70 hover:grayscale-0 hover:opacity-100">
                <Image 
                  src={client.logo} 
                  alt={client.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
