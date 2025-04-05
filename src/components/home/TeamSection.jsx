import React from "react";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Digital Strategist",
      image: "/avatar-1.jpg",
      bio: "With over 15 years of digital marketing experience, Sarah leads our team with innovative strategies and a passion for client success.",
      skills: ["Strategy", "Leadership", "Analytics", "Client Relations"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
      accentColor: "from-blue-500 to-cyan-400",
    },
    {
      name: "David Chen",
      role: "SEO Director",
      image: "/avatar-2.jpg",
      bio: "David specializes in technical SEO and search analytics, helping our clients achieve sustainable organic traffic growth.",
      skills: ["Technical SEO", "Data Analysis", "Keyword Strategy", "Reporting"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
      accentColor: "from-green-500 to-emerald-400",
    },
    {
      name: "Maria Rodriguez",
      role: "Content Strategy Lead",
      image: "/avatar-3.jpg",
      bio: "Maria crafts compelling content strategies that engage audiences and drive conversions across all digital channels.",
      skills: ["Content Creation", "Storytelling", "Brand Voice", "Editorial Planning"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
      accentColor: "from-purple-500 to-violet-400",
    },
    {
      name: "James Wilson",
      role: "Paid Media Specialist",
      image: "/avatar-4.jpg",
      bio: "James optimizes paid advertising campaigns across multiple platforms to maximize ROI and achieve client objectives.",
      skills: ["PPC", "Social Ads", "Budget Optimization", "A/B Testing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
      accentColor: "from-amber-500 to-orange-400",
    },
  ];

  const teamStats = [
    {
      label: "Team Members",
      value: "20+",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Years Experience",
      value: "12+",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      label: "Office Locations",
      value: "5",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      label: "Completed Projects",
      value: "250+",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      bgColor: "bg-amber-100 dark:bg-amber-900/30",
      textColor: "text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            The Dream Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Meet Our Talented Experts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Our diverse team of specialists brings passion, creativity, and expertise to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              {/* Colorful top accent */}
              <div className={`h-2 w-full bg-gradient-to-r ${member.accentColor}`}></div>
              
              {/* Image with overlay */}
              <div className="relative h-64 overflow-hidden">
                {/* Actual profile image */}
                <div className="absolute inset-0">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-b from-transparent to-gray-900"></div>
                
                {/* Social icons that appear on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={member.social.linkedin}
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:bg-blue-500 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:bg-blue-400 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:bg-green-500 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                  {member.name}
                </h3>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.accentColor} font-medium mb-3`}>
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 h-[4.5rem]">
                  {member.bio}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {member.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Bottom hover effect - animated bar */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${member.accentColor} group-hover:w-full transition-all duration-700 ease-in-out`}></div>
            </div>
          ))}
        </div>

        {/* Team stats section - displayed in a single row */}
        <div className="mt-20">
          <div className="flex flex-wrap justify-between items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            {teamStats.map((stat, index) => (
              <div key={index} className="flex-1 min-w-[200px] text-center group">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${stat.bgColor} ${stat.textColor} mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h4>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto px-8 py-10 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Creative Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for talented individuals who are passionate about digital marketing and innovation
            </p>
            <a
              href="#careers"
              className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:from-blue-600 group-hover:to-indigo-600"></span>
              <span className="absolute inset-0 w-full h-full opacity-0 transition-all duration-300 ease-out bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:opacity-100"></span>
              <span className="relative text-white flex items-center">
                View Open Positions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 