export default function CTA() {
  return (
    <section className="py-20 bg-gray-700 text-white mt-8">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Brand Visibility?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Join hundreds of businesses that trust our signage solutions to attract more customers and elevate their brand presence. Let’s create something remarkable together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => {
              const phoneNumber = "+918299497567"; // Replace with your number

              // Copy to clipboard
              navigator.clipboard.writeText(phoneNumber).then(() => {
                // Redirect to dial pad
                window.location.href = `tel:${phoneNumber}`;
              }).catch(err => {
                console.error("Failed to copy number: ", err);
                // Fallback to redirect if copy fails
                window.location.href = `tel:${phoneNumber}`;
              });
            }}
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition text-lg"
          >
            Get a Free Design Consultation
          </button>

          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition text-lg">
            View Our Portfolio
          </button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-8 text-sm">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Custom signage tailored to your business
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Fast installation & reliable support
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Premium materials, long-lasting results
          </div>
        </div>
      </div>
    </section>
  );
}


