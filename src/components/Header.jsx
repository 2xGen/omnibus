import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import TennisIcon from '@/components/icons/TennisIcon';

const Header = ({ sections, initialSolid = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(initialSolid);

  const scrollToSection = (id) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavigation = (section) => {
    if (section?.href) {
      window.location.href = section.href;
      setIsOpen(false);
      return;
    }
    if (section?.id) {
      scrollToSection(section.id);
    }
  };

  const handleHomeClick = () => {
    if (window.location.pathname === '/') {
      scrollToSection('home');
    } else {
      window.location.href = '/';
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (initialSolid) {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialSolid]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-md backdrop-blur-sm"
        style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 0.5rem)', paddingBottom: '0.5rem' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="/"
              onClick={(event) => {
                if (window.location.pathname === '/') {
                  event.preventDefault();
                  scrollToSection('home');
                }
                setIsOpen(false);
              }}
              className="flex items-center cursor-pointer"
            >
              <TennisIcon className="w-8 h-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold tracking-tight text-gray-900">
                Omnibus Tennis
              </span>
            </a>
            
            <div className="hidden md:flex items-center space-x-3">
              {sections.slice(1).map((section, index) => {
                const isGear = section.variant === 'gear';
                const baseClasses = 'text-base font-medium transition-all duration-300 rounded-full px-4 py-2';
                const defaultClasses = 'text-gray-600 hover:text-emerald-600';
                const gearClasses = 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm';
                const linkClasses = `${baseClasses} ${isGear ? gearClasses : defaultClasses}`;

                return section.href ? (
                  <a
                    key={`nav-${section.title}-${index}`}
                    href={section.href}
                    className={linkClasses}
                    onClick={() => setIsOpen(false)}
                  >
                    {section.title}
                  </a>
                ) : (
                  <button
                    key={`nav-${section.id || index}`}
                    onClick={() => handleNavigation(section)}
                    className={linkClasses}
                  >
                    {section.title}
                  </button>
                );
              })}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md transition-colors duration-300 text-gray-600 hover:bg-gray-100"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden"
          >
            <div className="pt-24 px-4 flex flex-col items-center space-y-8">
              {sections.map((section) => {
                const isGear = section.variant === 'gear';
                const baseClasses = 'text-2xl font-semibold transition-colors';
                const linkClasses = isGear
                  ? `${baseClasses} text-emerald-600 hover:text-emerald-500`
                  : `${baseClasses} text-gray-800 hover:text-emerald-600`;

                return section.href ? (
                  <a
                    key={`mobile-${section.title}`}
                    href={section.href}
                    onClick={() => setIsOpen(false)}
                    className={linkClasses}
                  >
                    {section.title}
                  </a>
                ) : (
                  <button
                    key={`mobile-${section.id}`}
                    onClick={() => handleNavigation(section)}
                    className={linkClasses}
                  >
                    {section.title}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;