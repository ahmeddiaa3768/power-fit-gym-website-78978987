import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '29',
    period: 'month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Basic fitness assessment',
      'Mobile app access',
      '2 group classes per month',
    ],
    popular: false,
    color: 'from-gray-700 to-gray-800',
  },
  {
    name: 'Pro',
    price: '59',
    period: 'month',
    description: 'For serious athletes ready to level up',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      '2 personal training sessions',
      'Nutrition consultation',
      'Priority equipment access',
      'Sauna & steam room',
    ],
    popular: true,
    color: 'from-red-600 to-orange-600',
  },
  {
    name: 'Elite',
    price: '99',
    period: 'month',
    description: 'Ultimate package for peak performance',
    features: [
      'Everything in Pro',
      '8 personal training sessions',
      'Custom meal plans',
      'Recovery & massage therapy',
      'Private training area access',
      '24/7 gym access',
      'Guest privileges',
    ],
    popular: false,
    color: 'from-cyan-600 to-blue-600',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Choose Your <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flexible membership options designed to fit your lifestyle and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border transition-all duration-500 cursor-pointer group ${
                plan.popular
                  ? 'border-red-500 scale-105 shadow-2xl shadow-red-500/20'
                  : 'border-gray-700 hover:border-gray-600 hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-white text-sm font-bold shadow-lg">
                    <Star className="h-4 w-4 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-5xl font-black text-white">${plan.price}</span>
                  <span className="text-gray-400 mb-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.popular ? 'from-red-500 to-orange-500' : 'from-gray-600 to-gray-700'} flex items-center justify-center mt-0.5`}>
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                Get Started
              </button>

              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5 rounded-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">All plans include a 7-day money-back guarantee</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              No contracts
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Pause membership
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
