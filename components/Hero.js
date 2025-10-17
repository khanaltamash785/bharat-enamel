"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Desktop version - hover effect (1024px and above) */}
      <section className="hidden lg:block relative w-full h-[80vh] overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:blur-sm group-hover:brightness-75">
          <Image
            src="/hero-img.jpeg"
            alt="Hero background"
            fill
            sizes=""
            priority
            className="object-cover object-center z-0"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 transition-all duration-700 opacity-0 group-hover:opacity-100 px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Welcome to{" "}
            <span className="text-indigo-500">Bharat</span>{" "}
            <span className="text-amber-400">Enamel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            We are the First choice of contact for any individual or Corporate Company
            to make a Sign board, Signage, Signs and Branding.
          </p>
          <Link
            href="/learn-more"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Mobile & Tablet version - click effect (below 1024px) */}
      <section 
        className="lg:hidden relative w-full h-[80vh] overflow-hidden cursor-pointer"
        onClick={handleToggle}
      >
        {/* Background Image */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            isActive ? 'blur-sm brightness-75' : ''
          }`}
        >
          <Image
            src="/hero-img.jpeg"
            alt="Hero background"
            fill
            priority
            className="object-cover object-center z-0"
          />
        </div>

        {/* Content */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 transition-all duration-700 px-4 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Welcome to{" "}
            <span className="text-indigo-500">Bharat</span>{" "}
            <span className="text-amber-400">Enamel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            We are the First choice of contact for any individual or Corporate Company
            to make a Sign board, Signage, Signs and Branding.
          </p>
          <Link
            href="/learn-more"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}