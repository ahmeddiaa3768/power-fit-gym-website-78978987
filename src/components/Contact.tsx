import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                Transformation?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join our community today and take the first step towards a stronger, healthier you.
              Our team is ready to support your journey.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: MapPin, text: '123 Fitness Street, Workout City, WC 12345' },
                { icon: Phone, text: '+1 (555) 123-4567' },
                { icon: Mail, text: 'hello@powerfit.com' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-600 transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © 2024 PowerFit. All rights reserved. Developed By Ahmed Diaa
          </p>
        </div>
      </div>
    </section>
  );
}
