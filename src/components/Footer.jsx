import React from 'react';
import TennisIcon from '@/components/icons/TennisIcon';

const Footer = ({ sections }) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (section) => {
    if (section?.href) {
      window.location.href = section.href;
      return;
    }

    if (section?.id) {
      scrollToSection(section.id);
    }
  };

  const handleManageCookies = () => {
    if (typeof window !== 'undefined' && typeof window.__showCookieConsent === 'function') {
      window.__showCookieConsent();
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
             <div
              className="flex items-center cursor-pointer mb-4"
              onClick={() => scrollToSection('home')}
            >
              <TennisIcon className="w-8 h-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold">Omnibus Tennis</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Omnibus Tennis is dedicated to friendly, personalized, high-performance tennis instruction in Aruba’s most convenient locations.
            </p>
          </div>
          
          <div>
            <span className="font-bold text-lg text-emerald-500 uppercase tracking-wider">Navigate</span>
            <ul className="mt-4 space-y-2">
              {sections.slice(1).map((section, index) => (
                 <li key={`footer-${section.id || section.title}-${index}`}>
                   {section.href ? (
                     <a
                       href={section.href}
                       className="text-gray-300 hover:text-white transition-colors duration-300"
                     >
                       {section.title}
                     </a>
                   ) : (
                     <button
                       onClick={() => handleNavigate(section)}
                       className="text-gray-300 hover:text-white transition-colors duration-300"
                     >
                       {section.title}
                     </button>
                   )}
                 </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg text-emerald-500 uppercase tracking-wider">Contact</span>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Palm Beach Area & Oranjestad, Aruba</li>
              <li>
                <a href="mailto:harry@omnibustennis.com" className="hover:text-white transition-colors">
                  harry@omnibustennis.com
                </a>
              </li>
              <li>T: (+297) 560-0090</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 space-y-4">
          <p>
            omnibustennis.com is proudly powered by{' '}
            <a href="/2xgen/" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              2xGen
            </a>
            — creators of next-gen digital platforms.
          </p>
          <button
            type="button"
            onClick={handleManageCookies}
            className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
          >
            Manage cookies
          </button>
          <p>&copy; {currentYear} Omnibus Tennis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;