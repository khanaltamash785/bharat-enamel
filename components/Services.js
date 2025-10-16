import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Custom Signage Design",
      description:
        "Eye-catching signs that perfectly capture your brand identity — available in both 2D and 3D designs.",
      image: "/signage/signage-1.jpg",
    },
    {
      title: "Vintage & Retro Sign Boards",
      description:
        "Bring timeless charm to your space with our Vintage & Retro Sign Boards, crafted to evoke a bold statement.",
      image: "/signage/signage-2.jpg",
    },
    {
      title: "Vehicle & Fleet Branding",
      description:
        "Transform vehicles into mobile advertisements with vibrant vinyl wraps and branding graphics.",
      image: "/signage/signage-3.jpg",
    },
    {
      title: "Hazard & Danger Signage",
      description:
        "Durable warning and safety signs for industrial, construction, and commercial environments.",
      image: "/signage/signage-4.png",
    },
  ];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
            Our Signage Services
          </h2>
          <div className="w-72 h-1 bg-gray-800 mx-auto rounded-full"></div>
          <p className=" pt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Creative and durable signage solutions that elevate your brand’s visibility and presence.
          </p>
        </div>

        {/* About Section (Compact & Readable) */}
        <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            We’re committed to delivering signage that blends creativity with durability.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            With advanced manufacturing setups and skilled artisans, we ensure precision in every design.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Our goal is to exceed expectations and create signage that truly makes your brand shine.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
