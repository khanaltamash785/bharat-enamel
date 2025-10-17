import { DownloadIcon } from "lucide-react";

export default function CTAB() {
  return (
    // Outer container: Deep Navy Blue background, rounded corners, responsive padding
    <div className="w-full max-w-6xl bg-blue-950 text-white rounded-xl shadow-2xl p-5 sm:p-8 lg:p-10 mx-auto">
      
      {/* Content wrapper: Fully responsive flex layout */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 text-center md:text-left">
        
        {/* Text Section */}
        <div className="flex-1 min-w-0">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug md:leading-tight">
            Want to know more about us?
            <span className="block md:inline font-light text-blue-200 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 md:mt-0">
              Just download our brochure...
            </span>
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <button
            onClick={() => console.log('Downloading brochure...')}
            className="
              flex items-center justify-center space-x-2
              bg-white text-blue-950 font-semibold
              px-6 sm:px-8 py-3 rounded-full
              shadow-lg transition-all duration-300
              hover:bg-gray-100 hover:shadow-xl
              ring-2 ring-transparent hover:ring-white/50 
              focus:outline-none focus:ring-4 focus:ring-white/70
              text-sm sm:text-base
            "
          >
            <DownloadIcon className="w-5 h-5" />
            <span>Download Brochure</span>
          </button>
        </div>

      </div>
    </div>
  );
}
