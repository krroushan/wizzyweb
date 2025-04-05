import React from "react";
import { Button } from "@/components/ui/button";
import { ScheduleMeetingDialog } from "@/components/ScheduleMeetingDialog";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$999",
      period: "per month",
      description: "Perfect for small businesses looking to establish their digital presence",
      features: [
        "Social Media Management (2 platforms)",
        "Basic SEO Optimization",
        "Monthly Performance Report",
        "Email Marketing (1 campaign/month)",
        "Responsive Website Maintenance",
      ],
      isPopular: false,
      ctaText: "Get Started",
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "per month",
      description: "Ideal for growing businesses aiming to expand their market reach",
      features: [
        "Social Media Management (4 platforms)",
        "Advanced SEO & Content Strategy",
        "Weekly Performance Reports",
        "Email Marketing (4 campaigns/month)",
        "PPC Campaign Management",
        "Content Creation (4 pieces/month)",
        "Conversion Rate Optimization",
      ],
      isPopular: true,
      ctaText: "Get Started",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored solution",
      description: "Comprehensive solution for established businesses with specific needs",
      features: [
        "Social Media Management (all platforms)",
        "Advanced SEO & SEM Strategies",
        "Daily Performance Monitoring",
        "Unlimited Email Campaigns",
        "Advanced Analytics & Insights",
        "Custom Content Strategy",
        "Dedicated Account Manager",
        "Priority Support 24/7",
      ],
      isPopular: false,
      ctaText: "Contact Us",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400">
            Transparent Pricing Plans
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choose the perfect plan to accelerate your business growth with our data-driven marketing strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden ${
                plan.isPopular 
                  ? "shadow-xl border-2 border-green-500 dark:border-green-400 transform md:-translate-y-4" 
                  : "shadow-lg border border-gray-200 dark:border-gray-700"
              } bg-white dark:bg-gray-800 transition-all hover:shadow-2xl`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              
              <div className={plan.isPopular ? "px-6 pt-12 pb-8" : "px-6 pt-8 pb-8"}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 h-12">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.name === "Enterprise" ? (
                  <ScheduleMeetingDialog 
                    trigger={
                      <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        {plan.ctaText}
                      </Button>
                    }
                  />
                ) : (
                  <ScheduleMeetingDialog 
                    trigger={
                      <Button className={`w-full ${
                        plan.isPopular 
                          ? "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                          : "bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                      } text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all`}>
                        {plan.ctaText}
                      </Button>
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Not sure which plan is right for your business? 
            Schedule a free consultation with our experts to get a customized recommendation.
          </p>
          <ScheduleMeetingDialog 
            trigger={
              <Button 
                variant="outline" 
                className="border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
              >
                Free Consultation
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
} 