import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gray-800 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-16">
          {/* Left Text Section */}
          <div className="lg:w-2/3 text-gray-700 space-y-6 leading-relaxed lg:pl-8">
            <p className="text-lg">
              Since <span className="font-semibold text-gray-900">2023</span>,
              Bharat Enamel has been a trusted manufacturer of classic signs.
              Our core expertise lies in producing nostalgic enamel signage and
              reproductions that embody craftsmanship and heritage. Our enamel
              advertising signs have reached over{" "}
              <span className="font-semibold text-gray-900">30 countries</span>,
              including the US, Canada, Australia, New Zealand, Italy, Saudi
              Arabia, and India — earning global recognition for quality.
            </p>

            <p className="text-lg">
              Most of our team members have over a decade of international trade
              experience with state-owned import & export enterprises, ensuring
              a smooth and reliable partnership experience.
            </p>

            <p className="text-lg">
              We warmly welcome you to choose us as your manufacturing partner.
              Our steady growth over the years is the direct result of our
              commitment to quality, precision, and customer satisfaction. We
              take pride in delivering{" "}
              <span className="font-semibold text-gray-900">
                premium signage at fair prices
              </span>
              .
            </p>
          </div>

          {/* Right Team Section */}
          <div className="lg:w-1/3 flex flex-col items-center gap-12 lg:mt-[-4rem]">
            {/* Added lg:mt-[-4rem] to vertically align with heading */}
            
            {/* Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-md hover:shadow-lg transition duration-300">
                <Image
                  src="/signage-2.jpg"
                  alt="Salman Qureshi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-5">
                Salman Qureshi
              </h3>
              <p className="text-sm text-gray-500">( Director )</p>
            </div>

            {/* Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-md hover:shadow-lg transition duration-300">
                <Image
                  src="/signage-1.jpg"
                  alt="Shakeel Qureshi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-5">
                Shakeel Qureshi
              </h3>
              <p className="text-sm text-gray-500">( Director )</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
