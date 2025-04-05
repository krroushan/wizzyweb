import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 px-0 md:px-12">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            {/* Icon part */}
            <div className="relative h-10 w-10 mr-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">W</div>
            </div>
            
            {/* Text part with gradient */}
            <div className="text-2xl font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600">
                WizzyWeb
              </span>
            </div>
          </div>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {[
                    { 
                      title: "Web Development", 
                      description: "Custom, responsive websites that convert visitors into customers.",
                      href: "/services/web-development",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )
                    },
                    { 
                      title: "App Development", 
                      description: "Native and cross-platform mobile applications that engage users.",
                      href: "/services/app-development",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      )
                    },
                    { 
                      title: "SEO", 
                      description: "Boost your search rankings and drive organic traffic to your website.",
                      href: "/services/seo",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )
                    },
                    { 
                      title: "Digital Marketing", 
                      description: "Comprehensive strategies to grow your brand and increase conversions.",
                      href: "/services/digital-marketing",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                      )
                    }
                  ].map((service) => (
                    <li key={service.title}>
                      <Link href={service.href} legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/40 dark:to-blue-900/40 flex items-center justify-center text-green-600 dark:text-green-400">
                              {service.icon}
                            </div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {service.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400 mt-1">
                            {service.description}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/work" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"}>
                  Work
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/contact" className="hidden md:inline-flex">
            <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
              Contact Us
            </Button>
          </Link>
          
          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all h-10 px-5">
            Get Started
          </Button>
          
          <Button variant="outline" size="icon" className="md:hidden border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
