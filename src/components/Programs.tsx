import { useEffect, useRef, useState } from 'react';
import { Zap, Target, Heart, Flame } from 'lucide-react';

const programs = [
  {
    icon: Zap,
    title: 'Strength Training',
    description: 'Build muscle and increase power with our comprehensive strength programs.',
    color: 'from-red-500 to-orange-500',
    hoverColor: 'group-hover:from-red-600 group-hover:to-orange-600',
  },
  {
    icon: Flame,
    title: 'Fat Burning',
    description: 'High-intensity workouts designed to torch calories and reveal your best physique.',
    color: 'from-orange-500 to-yellow-500',
    hoverColor: 'group-hover:from-orange-600 group-hover:to-yellow-600',
  },
  {
    icon: Heart,
    title: 'Cardio Blast',
    description: 'Improve endurance and cardiovascular health with dynamic cardio sessions.',
    color: 'from-cyan-500 to-blue-500',
    hoverColor: 'group-hover:from-cyan-600 group-hover:to-blue-600',
  },
  {
    icon: Target,
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your specific goals and fitness level.',
    color: 'from-blue-500 to-indigo-500',
    hoverColor: 'group-hover:from-blue-600 group-hover:to-indigo-600',
  },
];

export default function Programs() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            programs.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Programs</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our diverse range of training programs designed to help you reach your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-500 cursor-pointer transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} ${program.hoverColor} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all">
                    {program.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <button className="text-sm font-semibold text-red-500 group-hover:text-orange-500 flex items-center gap-2 transition-colors">
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
