export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      content:
        "This platform has transformed our business operations. The team is incredibly professional and the results speak for themselves. Highly recommended!",
      rating: 5,
      image: "/avatar-1.jpg",
    },
    {
      name: "Michael Chen",
      position: "Founder, Digital Solutions",
      content:
        "Outstanding service and support. They delivered exactly what we needed, on time and within budget. Our sales have increased by 150% since launch.",
      rating: 5,
      image: "/avatar-2.jpg",
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      content:
        "The attention to detail and commitment to excellence is unmatched. They truly care about their clients' success and go above and beyond.",
      rating: 5,
      image: "/avatar-3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
