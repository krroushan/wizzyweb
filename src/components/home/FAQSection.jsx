import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We offer a comprehensive suite of digital marketing services including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content creation, email marketing, conversion rate optimization (CRO), and analytics reporting. Our team tailors these services to meet your specific business goals and target audience."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer:
        "We establish clear KPIs at the start of each campaign aligned with your business objectives. We track metrics such as website traffic, conversion rates, engagement rates, click-through rates, ROI, and more using advanced analytics tools. You'll receive regular reports with actionable insights and recommendations for optimization."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results vary depending on your starting point, industry, competition, and chosen strategies. Some channels like PPC can generate immediate traffic, while SEO typically takes 3-6 months to show significant improvements. We focus on both quick wins and long-term sustainable growth, keeping you informed of progress at every stage."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes, we work with businesses of all sizes from startups to enterprises. Our strategies are customized to fit your specific needs, goals, and budget. We pride ourselves on providing the same level of dedication and expertise regardless of company size."
    },
    {
      question: "What makes your digital marketing agency different?",
      answer:
        "Our agency stands out through our data-driven approach, transparent reporting, and focus on measurable results. We combine creative strategies with technical expertise, staying ahead of industry trends and algorithm updates. We view ourselves as an extension of your team, fully invested in your success with a proven track record of helping businesses achieve sustainable growth."
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing options including project-based pricing and monthly retainers. Each package is customized based on your specific needs, goals, and budget. We're transparent about costs and focus on delivering strong ROI. Contact us for a free consultation to discuss your requirements and receive a tailored quote."
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get answers to common questions about our digital marketing services
            and how we can help grow your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
              >
                <AccordionTrigger className="px-6 text-left font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Can't find the answer you're looking for?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Contact our team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 