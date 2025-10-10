export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Up to 10 users",
        "Basic analytics",
        "Email support",
        "5GB storage",
        "Basic features",
      ],
      featured: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      features: [
        "Up to 50 users",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "All features",
        "API access",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      features: [
        "Unlimited users",
        "Custom analytics",
        "24/7 phone support",
        "Unlimited storage",
        "All features",
        "Custom integrations",
        "Dedicated manager",
      ],
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                plan.featured
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl transform scale-105"
                  : "bg-white border-2 border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="text-center mb-4">
                  <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3
                className={`text-2xl font-bold mb-4 ${
                  plan.featured ? "text-white" : "text-gray-800"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span
                  className={`text-lg ${
                    plan.featured ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-2 ${
                        plan.featured ? "text-white" : "text-green-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={plan.featured ? "text-white" : "text-gray-600"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
