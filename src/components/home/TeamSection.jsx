import React from "react";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Digital Strategist",
      image: "/images/team/team-1.jpg",
      bio: "With over 15 years of digital marketing experience, Sarah leads our team with innovative strategies and a passion for client success.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "David Chen",
      role: "SEO Director",
      image: "/images/team/team-2.jpg",
      bio: "David specializes in technical SEO and search analytics, helping our clients achieve sustainable organic traffic growth.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Maria Rodriguez",
      role: "Content Strategy Lead",
      image: "/images/team/team-3.jpg",
      bio: "Maria crafts compelling content strategies that engage audiences and drive conversions across all digital channels.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "James Wilson",
      role: "Paid Media Specialist",
      image: "/images/team/team-4.jpg",
      bio: "James optimizes paid advertising campaigns across multiple platforms to maximize ROI and achieve client objectives.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Meet Our Expert Team
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our talented professionals bring decades of experience and a passion
            for digital marketing excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <div className="w-full h-0 pt-[100%] bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 relative">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <svg
                        className="absolute w-full h-full text-gray-400 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.bio}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
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
                    className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
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
                    className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
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
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Our dedicated team is ready to help your business grow
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 font-medium transition-colors bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-lg shadow-lg hover:shadow-xl"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
} 