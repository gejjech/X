import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/services`);
        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-cyber-green font-mono text-xl animate-pulse">
              LOADING_SERVICES...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-cyber-green mb-4">
            COMPREHENSIVE_ARSENAL
          </h2>
          <p className="text-cyber-green/70 font-mono text-lg max-w-4xl mx-auto">
            WEB_DEVELOPMENT | LEAD_GENERATION | AI_AGENTS | UAE_MARKET_DOMINANCE
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className="service-card">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-cyber-green text-xs ml-2">{service.file_name}</span>
              </div>
              <div className="terminal-content">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-2xl">{service.icon}</div>
                  <div className="text-cyber-green font-bold text-lg">{service.title}</div>
                </div>
                <p className="text-cyber-green/70 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-cyber-green/20">
                  <div className="flex items-center justify-between">
                    <span className="text-cyber-green/50 text-xs font-mono">STATUS: ACTIVE</span>
                    <button className="text-cyber-green text-xs font-mono hover:text-white transition-colors">
                      EXECUTE &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="terminal-window max-w-2xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">SYSTEM_MESSAGE.txt</span>
            </div>
            <div className="terminal-content text-center">
              <p className="text-cyber-green mb-4">
                READY TO DOMINATE THE DIGITAL LANDSCAPE?
              </p>
              <button className="cyber-button">
                INITIALIZE_PROJECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;