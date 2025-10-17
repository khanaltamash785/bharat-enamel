import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col space-y-4">
              {/* Logo */}
              <div className="bg-inherit p-1 rounded inline-block w-fit">
                <Image 
                  src="/icons/be-logo.svg"
                  height={80}
                  width={80}
                  alt="Bharat Enamel Logo"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-bold tracking-wide mb-2">
                  <span className="text-indigo-600">Bharat</span> 
                  <span className="text-amber-400">Enamel</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Building amazing experiences with modern technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 border-b border-gray-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="hover:text-indigo-400 transition-colors duration-200 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-indigo-400 transition-colors duration-200 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-indigo-400 transition-colors duration-200 inline-block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-indigo-400 transition-colors duration-200 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 border-b border-gray-800 pb-2">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-indigo-400 transition-colors duration-200 inline-block">
                  Facebook
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-indigo-400 transition-colors duration-200 inline-block">
                  Twitter
                </Link>
              </li> */}
            {/*   <li>
                <Link href="#" className="hover:text-indigo-400 transition-colors duration-200 inline-block">
                  LinkedIn
                </Link>
              </li> */}
              <li>
                <Link href="#" className="hover:text-indigo-400 transition-colors duration-200 inline-block">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 border-b border-gray-800 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Subscribe to get latest updates and news
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 placeholder:text-gray-500"
              />
              <button className="bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BharatEnamel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}