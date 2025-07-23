import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service_interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI Solutions',
    'Digital Marketing',
    'E-commerce Development',
    'SEO & Search Marketing',
    'Social Media Marketing',
    'Content Marketing',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('SUCCESS: Message transmitted to the matrix!');
        setFormData({
          name: '',
          email: '',
          message: '',
          service_interest: ''
        });
      } else {
        setSubmitMessage('ERROR: Transmission failed. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('ERROR: Connection lost. Please check your network.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-cyber-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-cyber-green mb-4">
            ESTABLISH_CONNECTION
          </h2>
          <p className="text-cyber-green/70 font-mono text-lg max-w-4xl mx-auto">
            READY_TO_JACK_IN? | INITIATE_CONTACT_PROTOCOL
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">CONTACT_FORM.exe</span>
            </div>
            <div className="terminal-content">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-cyber-green text-sm font-mono mb-2">
                    NAME.require()
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-cyber-dark border border-cyber-green/30 text-cyber-green px-4 py-2 rounded-none font-mono focus:border-cyber-green focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-cyber-green text-sm font-mono mb-2">
                    EMAIL.require()
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-cyber-dark border border-cyber-green/30 text-cyber-green px-4 py-2 rounded-none font-mono focus:border-cyber-green focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-cyber-green text-sm font-mono mb-2">
                    SERVICE_INTEREST.optional()
                  </label>
                  <select
                    name="service_interest"
                    value={formData.service_interest}
                    onChange={handleChange}
                    className="w-full bg-cyber-dark border border-cyber-green/30 text-cyber-green px-4 py-2 rounded-none font-mono focus:border-cyber-green focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-cyber-green text-sm font-mono mb-2">
                    MESSAGE.require()
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-cyber-dark border border-cyber-green/30 text-cyber-green px-4 py-2 rounded-none font-mono focus:border-cyber-green focus:outline-none resize-none"
                    placeholder="Describe your project or inquiry"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cyber-button"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT_MESSAGE'}
                </button>

                {submitMessage && (
                  <div className={`text-center text-sm font-mono mt-4 ${
                    submitMessage.startsWith('SUCCESS') ? 'text-cyber-green' : 'text-red-400'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-cyber-green text-xs ml-2">CONTACT_INFO.txt</span>
              </div>
              <div className="terminal-content">
                <h3 className="text-cyber-green font-bold text-xl mb-4">DIRECT_CHANNELS</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-cyber-green">📧</span>
                    <div>
                      <p className="text-cyber-green/70 text-sm">EMAIL</p>
                      <p className="text-cyber-green">info@nowherematrix.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-cyber-green">📱</span>
                    <div>
                      <p className="text-cyber-green/70 text-sm">PHONE</p>
                      <p className="text-cyber-green">+971 50 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-cyber-green">📍</span>
                    <div>
                      <p className="text-cyber-green/70 text-sm">LOCATION</p>
                      <p className="text-cyber-green">Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-cyber-green text-xs ml-2">OFFICE_HOURS.txt</span>
              </div>
              <div className="terminal-content">
                <h3 className="text-cyber-green font-bold text-xl mb-4">AVAILABILITY</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-cyber-green/70">MON - FRI</span>
                    <span className="text-cyber-green">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyber-green/70">SATURDAY</span>
                    <span className="text-cyber-green">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyber-green/70">SUNDAY</span>
                    <span className="text-cyber-green">CLOSED</span>
                  </div>
                  <div className="border-t border-cyber-green/20 pt-2 mt-4">
                    <div className="flex justify-between">
                      <span className="text-cyber-green/70">EMERGENCY</span>
                      <span className="text-cyber-green">24/7 SUPPORT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-cyber-green text-xs ml-2">QUICK_RESPONSE.exe</span>
              </div>
              <div className="terminal-content text-center">
                <p className="text-cyber-green mb-4">
                  GUARANTEED RESPONSE WITHIN 24 HOURS
                </p>
                <div className="text-cyber-green/70 text-sm">
                  Our AI-powered response system ensures rapid communication
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;