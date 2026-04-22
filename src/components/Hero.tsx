import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        <div
          className="absolute top-1/3 -right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * 40}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        <div
          className="absolute -bottom-1/4 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-red-400 text-sm font-semibold backdrop-blur-sm">
              🔥 Transform Your Body Today
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
            Unleash Your
            <br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 text-transparent bg-clip-text animate-gradient">
              Inner Strength
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join the ultimate fitness revolution. Expert trainers, cutting-edge equipment,
            and a community that pushes you to achieve your peak performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50">
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-5 w-5 ml-0.5" fill="white" />
              </div>
              Watch Video
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
            {[
              { value: '500+', label: 'Members' },
              { value: '50+', label: 'Expert Trainers' },
              { value: '100+', label: 'Programs' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 animate-bounce cursor-pointer"
        style={{
          transform: `translateX(-50%) translateY(${mousePosition.y * 10}px)`,
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
