import CTAB from "./CTAB";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
        </div>

        {/* Text Content */}
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p className="text-lg">
            Since <span className="font-semibold text-gray-900">2023</span>,{" "}
            <span className="font-semibold text-gray-900">Bharat Enamel</span>{" "}
            has been a trusted manufacturer of classic signs. Our expertise lies
            in producing nostalgic enamel signage and reproductions that embody
            craftsmanship and heritage.
          </p>

          <p className="text-lg">
            Our enamel advertising signs have reached{" "}
            <span className="font-semibold text-gray-900">30+ countries</span> —
            including the US, Canada, Australia, New Zealand, Italy, Saudi
            Arabia, and India — earning global recognition for quality and
            reliability.
          </p>

          <p className="text-lg">
            With a decade of international trade experience, our team ensures a
            smooth and dependable partnership experience at every stage.
          </p>

          <p className="text-lg">
            We take pride in delivering{" "}
            <span className="font-semibold text-gray-900">
              premium signage at fair prices
            </span>
            , combining precision with long-lasting value for every customer.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex justify-center">
          <CTAB />
        </div>
      </div>
    </section>
  );
}
