"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      img: "/features/high-quality.png",
      title: "High-Quality Materials",
      description:
        "Built using premium-grade materials to ensure long-lasting durability, weather resistance, and vibrant visual impact.",
      textColor: "text-white",
    },
    {
      img: "/features/images.png",
      title: "Custom Design Solutions",
      description:
        "From concept to creation, we craft signage tailored to your brand identity, ensuring every design stands out.",
      textColor: "text-white",
    },
    {
      img: "/features/led.png",
      title: "Vintage & Retro Sign boards",
      description:
        "Make your brand visible day and night with energy-efficient LED and backlit signage solutions.",
      textColor: "text-white",
    },
    {
      img: "/features/fast.png",
      title: "Fast & Reliable Installation",
      description:
        "Our experienced team ensures hassle-free, on-time installation with precision and safety.",
      textColor: "text-white",
    },
    {
      img: "/features/support.png",
      title: "Maintenance & Support",
      description:
        "We offer regular maintenance and repair services to keep your signage looking as good as new.",
      textColor: "text-white",
    },
    {
      img: "/features/vintage.jpg",
      title: "Vintage & Retro Sign Boards ",
      description:
        "Bring timeless charm to your space with our Vintage & Retro Sign Boards, crafted to evoke nostalgia while making a bold statement.",
      textColor: "text-white",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Powerful Features
          </h2>
          <div className="w-72 h-1 bg-gray-800 mx-auto rounded-full"></div>

          <p className="pt-3 text-xl text-gray-600 max-w-2xl mx-auto">
            Bringing Your Brand to Life — Signage That Speaks for Itself.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
            />
          ))}
        </div>

        {/* Mobile & Tablet horizontal scroll */}
        <div className="lg:hidden flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 pb-4">
          {features.map((feature, index) => (
            <FeatureCardMobile
              key={index}
              index={index}
              feature={feature}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Desktop Card - Hover effect */
function FeatureCard({ feature }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg h-80 cursor-pointer group">
      {/* Image */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:blur-sm group-hover:brightness-75">
        <Image
          src={feature.img}
          alt={feature.title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 transition-all duration-700 opacity-0 group-hover:opacity-100 p-6">
        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
        <p className="text-sm sm:text-base">{feature.description}</p>
      </div>
    </div>
  );
}

/* Mobile Card - Click effect matching desktop hover */
function FeatureCardMobile({ feature, index, isActive, onToggle }) {
  return (
    <div
      className="relative w-[80vw] max-w-xs h-64 rounded-xl shadow-lg flex-shrink-0 overflow-hidden cursor-pointer snap-center"
      onClick={onToggle}
    >
      {/* Image with blur animation - same as desktop */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          isActive ? 'blur-sm brightness-75' : ''
        }`}
      >
        <Image
          src={feature.img}
          alt={feature.title}
          fill
          className="object-cover"
          sizes="80vw"
        />
      </div>

      {/* Overlay Content - same as desktop */}
      <div 
        className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 transition-all duration-700 p-4 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-sm">{feature.description}</p>
      </div>
    </div>
  );
}