import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'ALEX_MORGAN',
      role: 'CEO & FOUNDER',
      description: 'Visionary leader with 15+ years in digital transformation',
      specialties: ['Strategic Planning', 'Market Analysis', 'Innovation']
    },
    {
      name: 'SARAH_TECH',
      role: 'CTO',
      description: 'Technical architect specializing in AI & blockchain solutions',
      specialties: ['AI Development', 'Blockchain', 'System Architecture']
    },
    {
      name: 'OMAR_DUBAI',
      role: 'UAE MARKET SPECIALIST',
      description: 'Local market expert with deep cultural understanding',
      specialties: ['Market Research', 'Cultural Marketing', 'Local Partnerships']
    }
  ];

  const achievements = [
    { metric: '500+', label: 'Projects Delivered' },
    { metric: '150+', label: 'Happy Clients' },
    { metric: '99%', label: 'Success Rate' },
    { metric: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-cyber-green mb-4">
            ABOUT_THE_MATRIX
          </h2>
          <p className="text-cyber-green/70 font-mono text-lg max-w-4xl mx-auto">
            DIGITAL_PIONEERS | INNOVATION_ARCHITECTS | MARKET_DOMINATORS
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">COMPANY_STORY.txt</span>
            </div>
            <div className="terminal-content">
              <h3 className="text-cyber-green font-bold text-xl mb-4">OUR_MISSION</h3>
              <p className="text-cyber-green/80 mb-4">
                At NOWHERE Digital Matrix, we don't just create digital solutions – we architect 
                digital supremacy. Founded in the heart of Dubai, we've established ourselves as 
                the premier digital marketing agency in the UAE.
              </p>
              <p className="text-cyber-green/80 mb-4">
                Our mission is to transform businesses through cutting-edge technology, 
                innovative strategies, and deep understanding of the Middle Eastern market.
              </p>
              <p className="text-cyber-green/80">
                We specialize in AI-powered solutions, multi-language marketing, and 
                culturally-aware digital strategies that resonate with the diverse UAE audience.
              </p>
            </div>
          </div>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">CORE_VALUES.exe</span>
            </div>
            <div className="terminal-content">
              <h3 className="text-cyber-green font-bold text-xl mb-4">CORE_VALUES</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-cyber-green">▸</span>
                  <span className="text-cyber-green/80">Innovation through technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-cyber-green">▸</span>
                  <span className="text-cyber-green/80">Cultural sensitivity & local expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-cyber-green">▸</span>
                  <span className="text-cyber-green/80">Results-driven approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-cyber-green">▸</span>
                  <span className="text-cyber-green/80">Transparent communication</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-cyber-green">▸</span>
                  <span className="text-cyber-green/80">Continuous learning & adaptation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-cyber font-bold text-cyber-green text-center mb-8">
            CORE_TEAM
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-red"></div>
                  <div className="terminal-button terminal-yellow"></div>
                  <div className="terminal-button terminal-green"></div>
                  <span className="text-cyber-green text-xs ml-2">{member.name}.profile</span>
                </div>
                <div className="terminal-content">
                  <h4 className="text-cyber-green font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-cyber-green/70 text-sm mb-3">{member.role}</p>
                  <p className="text-cyber-green/80 text-sm mb-4">{member.description}</p>
                  <div className="border-t border-cyber-green/20 pt-3">
                    <p className="text-cyber-green/50 text-xs mb-2">SPECIALTIES:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-cyber-green/10 text-cyber-green px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="stats-card">
              <div className="text-3xl font-bold text-cyber-green mb-2">{achievement.metric}</div>
              <div className="text-cyber-green/70 text-sm uppercase tracking-wider">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;