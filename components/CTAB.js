import { DownloadIcon } from "lucide-react";

export default function CTAB()  {
  return (
    // Outer container: Deep Navy Blue background, rounded corners, responsive padding
    <div className="w-full max-w-6xl bg-blue-950 text-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10">
      
      {/* Content wrapper: Flex layout, ensures items are vertically centered and spaced out. */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        {/* Text Section */}
        <div className="flex-1 min-w-0">
          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
            Want to know more about us?
            <span className="font-light ml-2 text-blue-200 text-lg sm:text-xl lg:text-2xl">
                just download brochure...
            </span>
          </p>
        </div>

        {/* Button Section */}
        <button
          onClick={() => console.log('Downloading brochure...')}
          className="
            flex items-center space-x-3
            bg-white text-blue-950 font-bold
            px-8 py-3 rounded-full
            shadow-lg transition-all duration-300
            hover:bg-gray-100 hover:shadow-xl
            whitespace-nowrap
            ring-2 ring-transparent hover:ring-white/50 focus:outline-none focus:ring-4 focus:ring-white/70
          "
        >
          <DownloadIcon className="w-5 h-5" />
          <span>Download Brochure</span>
        </button>

      </div>
    </div>
  );
};