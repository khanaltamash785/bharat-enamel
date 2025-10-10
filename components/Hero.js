import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Your Amazing Platform
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Build beautiful, responsive websites with Next.js and Tailwind
              CSS. Start your journey today and create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/get-started"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Get Started
              </Link>
              <Link
                href="/learn-more"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right content - Image or illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-lg">
              <Image
                src="/hero-image.svg"
                alt="Hero illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
