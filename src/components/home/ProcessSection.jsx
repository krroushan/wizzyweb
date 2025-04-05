import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We begin with a thorough analysis of your business, goals, target audience, and competitors. Using these insights, we develop a tailored digital marketing strategy aligned with your objectives.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Campaign Development",
      description:
        "Our team creates comprehensive campaigns across selected channels. We develop compelling content, design creative assets, setup tracking mechanisms, and establish baseline metrics for measuring success.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Launch & Implementation",
      description:
        "We execute the campaigns across all channels with precision and attention to detail. Our team monitors initial performance closely, making real-time adjustments to optimize early results.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Monitor & Optimize",
      description:
        "Through continuous analysis of performance data, we identify trends, opportunities, and areas for improvement. We apply data-driven optimizations to enhance campaign performance and maximize ROI.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Report & Review",
      description:
        "We provide comprehensive reports with actionable insights and recommendations. During regular review meetings, we discuss results, strategy adjustments, and plan for continued growth and success.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Proven Process
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our systematic approach ensures consistent results and complete
            transparency at every stage of your digital marketing journey
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } items-center`}
              >
                {/* Content */}
                <div className="lg:w-5/12 mb-8 lg:mb-0">
                  <div
                    className={`p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 ${
                      index % 2 === 0
                        ? "lg:text-right lg:pr-20"
                        : "lg:text-left lg:pl-20"
                    }`}
                  >
                    <div
                      className={`flex items-center mb-4 ${
                        index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-green-500">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="lg:w-2/12 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-100 dark:border-gray-700 shadow-lg flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 font-medium transition-colors bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-lg shadow-lg hover:shadow-xl"
          >
            Start Your Journey With Us
          </a>
        </div>
      </div>
    </section>
  );
} 