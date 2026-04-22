import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Dumbbell className="h-8 w-8 text-red-500 transform group-hover:rotate-180 transition-transform duration-500" />
              <div className="absolute inset-0 bg-red-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              POWER<span className="text-red-500">FIT</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300">
              Join Now
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold mt-4">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
