import { Award, Users, TrendingUp } from 'lucide-react';

const trainers = [
  {
    name: 'Marcus Steel',
    specialty: 'Strength & Conditioning',
    experience: '10 Years',
    image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400',
    certifications: ['NASM-CPT', 'CSCS'],
  },
  {
    name: 'Sarah Phoenix',
    specialty: 'HIIT & Cardio',
    experience: '8 Years',
    image: 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=400',
    certifications: ['ACE', 'Spinning'],
  },
  {
    name: 'David Thunder',
    specialty: 'Bodybuilding',
    experience: '12 Years',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400',
    certifications: ['ISSA', 'Nutrition'],
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Elite <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Trainers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Train with certified professionals who are passionate about your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                <div className="absolute top-4 right-4 flex gap-2">
                  {trainer.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-red-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all">
                  {trainer.name}
                </h3>
                <p className="text-red-500 font-semibold mb-1">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm mb-4">{trainer.experience} Experience</p>

                <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Book Session
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-orange-600/0 group-hover:from-red-600/10 group-hover:to-orange-600/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Award, value: '98%', label: 'Success Rate' },
            { icon: Users, value: '5000+', label: 'Clients Trained' },
            { icon: TrendingUp, value: '15+', label: 'Avg. Years Experience' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
