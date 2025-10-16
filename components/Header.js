"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLoginClick = () => {
    closeMobileMenu();
    router.push("/admin");
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-2xl font-bold">
              <Image
                src="/icons/be-logo.svg"
                width={60}
                height={60}
                alt="logo"
                className="mr-0"
              />
              <p className="hidden lg:block tracking-wide">
                <span className="text-indigo-600">Bharat</span>
                <span className="text-amber-400">Enamel</span>
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-base xl:text-lg">
            <Link href="#hero" className="text-gray-700 hover:text-blue-600 transition whitespace-nowrap">Home</Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition whitespace-nowrap">About Us</Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition whitespace-nowrap">Services</Link>
            <Link href="#gallery" className="text-gray-700 hover:text-blue-600 transition whitespace-nowrap">Gallery</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition whitespace-nowrap">Contact Us</Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button
              onClick={handleLoginClick}
              className="text-gray-700 hover:text-blue-600 transition whitespace-nowrap"
            >
              Admin Login
            </button>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="#hero" className="text-gray-700 hover:text-blue-600 transition px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>About Us</Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>Services</Link>
              <Link href="#gallery" className="text-gray-700 hover:text-blue-600 transition px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>Gallery</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>Contact Us</Link>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleLoginClick}
                  className="text-gray-700 hover:text-blue-600 transition text-center px-4 py-2 rounded hover:bg-gray-50"
                >
                  Login
                </button>
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
