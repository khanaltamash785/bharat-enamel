export default function Stats() {
  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "99%", label: "Customer Satisfaction" },
    { number: "50+", label: "Countries Served" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
