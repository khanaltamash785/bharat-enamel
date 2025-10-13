"use client";

import React from "react";

export default function Testimonials() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden py-20 px-4 md:px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
        Our Clients
      </h1>
       <div className="w-72 h-1 bg-gray-800 mx-auto rounded-full"></div>
      <p className="text-lg md:text-xl text-gray-600 mb-12 text-center pt-3">
        Valued Partnerships, Unmatched Trust
      </p>
      

      {/* Desktop marquee */}
      <div className="hidden md:block relative w-full overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[380px] md:w-[420px] lg:w-[460px] h-[220px] md:h-[250px] lg:h-[280px] shrink-0 mx-4 p-8 bg-gray-100 rounded-2xl shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
            >
              <p className="text-gray-700 italic mb-4 text-base md:text-lg lg:text-xl leading-relaxed">
                “{t.quote}”
              </p>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg md:text-xl">
                  {t.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-72 flex-shrink-0 p-5 bg-gray-100 rounded-2xl shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <p className="text-gray-700 italic mb-3 text-base leading-relaxed">
                “{t.quote}”
              </p>
              <h3 className="font-semibold text-gray-900 text-base">
                {t.name}
              </h3>
              <p className="text-gray-500 text-sm">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Our retail store in Pune got a complete makeover thanks to their stunning LED signage. The quality and finish are simply unmatched.",
    name: "Rohit Deshmukh",
    title: "Store Owner, Pune",
  },
  {
    quote:
      "They handled everything from concept to installation seamlessly. Our new backlit signage in Mumbai has boosted walk-ins significantly.",
    name: "Priya Patil",
    title: "Marketing Head, Cafe Aroma",
  },
  {
    quote:
      "Professional, punctual, and creative — their 3D acrylic letters gave our showroom a premium look. Highly recommended for corporate branding!",
    name: "Amit Kulkarni",
    title: "Owner, Shree Motors, Nagpur",
  },
  {
    quote:
      "We needed signage for an event in Nashik on short notice. They delivered perfectly on time without compromising on quality.",
    name: "Sneha Joshi",
    title: "Event Coordinator, Nashik Expo",
  },
  {
    quote:
      "From designing to installation, everything was handled professionally. Our illuminated signboard stands out beautifully even at night.",
    name: "Imran Shaikh",
    title: "Restaurant Owner, Aurangabad",
  },
];
