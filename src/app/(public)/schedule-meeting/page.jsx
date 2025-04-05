// src/app/(public)/schedule-meeting/page.jsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function ScheduleMeeting() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1); // 1: Select date, 2: Select time, 3: Fill form
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // Sample available time slots
  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"
  ];

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Filter available times (in a real app, this would fetch from API based on date)
  const getAvailableTimes = () => {
    // Simulating some slots being already booked
    const dayOfWeek = date.getDay();
    
    // Weekend has fewer slots
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return timeSlots.slice(0, 5); // Only morning slots available
    }
    
    // Wednesdays are busy
    if (dayOfWeek === 3) {
      return timeSlots.filter((_, index) => index % 3 === 0); // Limited slots
    }
    
    return timeSlots;
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the booking data to your backend
    alert(`Meeting scheduled on ${formatDate(date)} at ${selectedTime} with ${bookingDetails.name}`);
    // In a real app, you'd handle submission confirmation or errors
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
              Schedule a Meeting
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Book a consultation with our digital marketing experts and discover how we can help grow your business.
            </p>

            {/* Progress steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                  1
                </div>
                <div className={`h-1 w-12 ${step >= 2 ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                  2
                </div>
                <div className={`h-1 w-12 ${step >= 3 ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                  3
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            {step === 1 && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Select a Date
                </h2>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => {
                      setDate(newDate);
                      setStep(2);
                    }}
                    className="rounded-md border"
                    disabled={(date) => {
                      // Disable past dates, weekends, and specific holidays
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return (
                        date < today ||
                        date.getDay() === 0 // Disable Sundays
                      );
                    }}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <button 
                    onClick={() => setStep(1)} 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mr-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Available Times for {formatDate(date)}
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {getAvailableTimes().map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className="p-3 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-900/20 dark:hover:text-green-400 transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {getAvailableTimes().length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">No available times for this date. Please select another date.</p>
                    <Button 
                      onClick={() => setStep(1)}
                      className="mt-4 bg-gradient-to-r from-green-500 to-blue-600"
                    >
                      Choose Another Date
                    </Button>
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <button 
                    onClick={() => setStep(2)} 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mr-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Complete Your Booking
                  </h2>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(date)}</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{selectedTime} (30 minutes)</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={bookingDetails.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={bookingDetails.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={bookingDetails.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={bookingDetails.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        What would you like to discuss?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={bookingDetails.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6">
                        Schedule Meeting
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need to reschedule or cancel? You can manage your bookings at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
