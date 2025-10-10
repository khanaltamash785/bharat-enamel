export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies like Next.js, React, and Tailwind CSS.",
      image: "/service-1.jpg",
      price: "Starting at $2,999",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      image: "/service-2.jpg",
      price: "Starting at $4,999",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce platforms with payment integration and inventory management.",
      image: "/service-3.jpg",
      price: "Starting at $3,499",
    },
    {
      title: "Digital Marketing",
      description:
        "SEO, social media marketing, and content strategy to grow your online presence.",
      image: "/service-4.jpg",
      price: "Starting at $1,499/mo",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">
                    {service.price}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
