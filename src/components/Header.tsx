import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, User, Award, Mail, Menu, X, GraduationCap, Cpu, Briefcase } from 'lucide-react';

const navItems = [
  { name: 'About', icon: User, href: '#about' },
  { name: 'Education', icon: GraduationCap, href: '#education' },
  { name: 'Experience', icon: Briefcase, href: '#experience' },
  { name: 'Skills', icon: Cpu, href: '#skills' },
  { name: 'Projects', icon: Code, href: '#projects' },
  { name: 'Achievements', icon: Award, href: '#achievements' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Shield className="h-8 w-8 text-neon-blue" />
            <span className="ml-2 text-xl font-bold text-white">RS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 text-gray-300 hover:text-neon-blue transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-gray-300 hover:text-neon-blue hover:bg-gray-900"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};