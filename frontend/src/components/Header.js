import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-dark/90 backdrop-blur-sm border-b border-cyber-green/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyber-green rounded-sm flex items-center justify-center">
              <span className="text-cyber-dark font-bold text-xl">🚀</span>
            </div>
            <div className="text-cyber-green font-cyber font-bold text-xl">
              NOWHERE
              <div className="text-xs font-mono opacity-70">DIGITAL_MATRIX</div>
            </div>
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['HOME', 'SERVICES', 'ABOUT', 'PORTFOLIO', 'CONTACT'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'text-white' : ''}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="cyber-button"
            >
              JACK_IN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-cyber-green">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;