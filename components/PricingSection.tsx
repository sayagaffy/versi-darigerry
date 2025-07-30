'use client'

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    features: ["100 AI conversations/month", "Basic support", "Web access"],
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    features: ["Unlimited conversations", "Priority support", "API access", "Advanced analytics"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Custom integrations", "Dedicated support", "On-premise deployment", "SLA guarantee"],
    popular: false
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-20 bg-black bg-opacity-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-purple-200">
            Flexible pricing options to suit your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-1">
                  {plan.price}
                  <span className="text-lg text-purple-300">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-purple-200">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular 
                    ? 'text-white' 
                    : 'text-black'
                }`}
                style={{
                  backgroundColor: plan.popular ? '#6A2FF7' : '#ffffff'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = plan.popular ? '#5A1FE7' : '#f0f0f0'
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = plan.popular ? '#6A2FF7' : '#ffffff'
                }}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
