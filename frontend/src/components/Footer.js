import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Web Development',
      'Mobile Apps',
      'AI Solutions',
      'Digital Marketing',
      'E-commerce',
      'SEO Services'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'News',
      'Contact',
      'Privacy Policy'
    ],
    social: [
      { name: 'LinkedIn', icon: '💼' },
      { name: 'Twitter', icon: '🐦' },
      { name: 'Instagram', icon: '📸' },
      { name: 'Facebook', icon: '📘' }
    ]
  };

  return (
    <footer className="bg-cyber-dark border-t border-cyber-green/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">COMPANY_INFO.txt</span>
            </div>
            <div className="terminal-content">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-cyber-green rounded-sm flex items-center justify-center">
                  <span className="text-cyber-dark font-bold">🚀</span>
                </div>
                <div>
                  <div className="text-cyber-green font-cyber font-bold">NOWHERE</div>
                  <div className="text-xs font-mono text-cyber-green/70">DIGITAL_MATRIX</div>
                </div>
              </div>
              <p className="text-cyber-green/70 text-sm mb-4">
                Leading Digital Marketing Agency in Dubai, UAE. Transforming businesses through 
                cutting-edge technology and innovative strategies.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((social, index) => (
                  <button
                    key={index}
                    className="text-cyber-green hover:text-white transition-colors"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">SERVICES.exe</span>
            </div>
            <div className="terminal-content">
              <h3 className="text-cyber-green font-bold text-lg mb-4">SERVICES</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <button className="text-cyber-green/70 hover:text-cyber-green transition-colors text-sm">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">COMPANY.exe</span>
            </div>
            <div className="terminal-content">
              <h3 className="text-cyber-green font-bold text-lg mb-4">COMPANY</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <button className="text-cyber-green/70 hover:text-cyber-green transition-colors text-sm">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">NEWSLETTER.exe</span>
            </div>
            <div className="terminal-content">
              <h3 className="text-cyber-green font-bold text-lg mb-4">STAY_CONNECTED</h3>
              <p className="text-cyber-green/70 text-sm mb-4">
                Get the latest updates on digital trends and our services.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 bg-cyber-dark border border-cyber-green/30 text-cyber-green px-3 py-2 text-sm font-mono focus:border-cyber-green focus:outline-none"
                />
                <button className="bg-cyber-green text-cyber-dark px-4 py-2 font-mono text-sm font-bold hover:bg-cyber-green/90 transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-green/20 mt-12 pt-8">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">COPYRIGHT.txt</span>
            </div>
            <div className="terminal-content">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-cyber-green/70 text-sm font-mono">
                  © {currentYear} NOWHERE Digital Matrix. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <button className="text-cyber-green/70 hover:text-cyber-green transition-colors text-sm font-mono">
                    Privacy Policy
                  </button>
                  <button className="text-cyber-green/70 hover:text-cyber-green transition-colors text-sm font-mono">
                    Terms of Service
                  </button>
                  <button className="text-cyber-green/70 hover:text-cyber-green transition-colors text-sm font-mono">
                    Cookie Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;