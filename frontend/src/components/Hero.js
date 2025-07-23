import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState({
    projects_completed: 0,
    happy_clients: 0,
    success_rate: '0%',
    support: '24/7'
  });

  const fullText = '#1_DIGITAL_MATRIX_DUBAI';

  useEffect(() => {
    // Fetch stats from API
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/stats`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const systemCapabilities = [
    { icon: '🌐', title: 'Web Dev', description: 'Full-stack solutions' },
    { icon: '📱', title: 'Mobile Apps', description: 'Cross-platform development' },
    { icon: '🤖', title: 'AI Agents', description: 'Intelligent automation' },
    { icon: '📊', title: 'Analytics', description: 'Data-driven insights' },
    { icon: '🔒', title: 'Security', description: 'Enterprise-grade protection' },
    { icon: '⚡', title: 'Performance', description: 'Optimized for speed' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Terminal Badge */}
            <div className="terminal-window w-fit">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-cyber-green text-xs ml-2">{currentText}</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="cyber-title">
                DIGITAL<br />
                <span className="text-white">SUPREMACY</span>
              </h1>
              
              {/* Subtitle Terminal */}
              <div className="terminal-window max-w-2xl">
                <div className="terminal-header">
                  <div className="terminal-button terminal-red"></div>
                  <div className="terminal-button terminal-yellow"></div>
                  <div className="terminal-button terminal-green"></div>
                  <span className="text-cyber-green text-xs ml-2">MISSION_BRIEFING.txt</span>
                </div>
                <div className="terminal-content">
                  <p className="text-cyber-green mb-2">INITIALIZING Θ</p>
                  <p className="text-cyber-green/80">&gt; Leading Digital Marketing Agency in Dubai, UAE</p>
                  <p className="text-cyber-green/80">&gt; Custom Web & App Development Solutions</p>
                  <p className="text-cyber-green/80">&gt; AI Agents Integration & Lead Generation</p>
                  <p className="text-cyber-green/80">&gt; UAE market domination protocols active</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              <button className="cyber-button">
                JACK_IN →
              </button>
              <button className="cyber-button bg-transparent">
                ► VIEW_DEMO
              </button>
            </div>
          </div>

          {/* Right Side - System Capabilities */}
          <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-cyber-green text-xs ml-2">SYSTEM_CAPABILITIES.exe</span>
              </div>
              <div className="terminal-content">
                <div className="grid grid-cols-2 gap-4">
                  {systemCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-cyber-green/10 rounded transition-colors">
                      <div className="text-2xl">{capability.icon}</div>
                      <div>
                        <div className="text-cyber-green font-bold text-sm">{capability.title}</div>
                        <div className="text-cyber-green/70 text-xs">{capability.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Powered Solutions */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-cyber-green text-xs ml-2">AI_POWERED_SOLUTIONS</span>
              </div>
              <div className="terminal-content text-center">
                <div className="text-cyber-green font-bold text-lg mb-2">AI_POWERED_SOLUTIONS</div>
                <div className="text-cyber-green/70 text-sm">
                  CUTTING_EDGE_TECHNOLOGY_MEETS_CREATIVE_EXCELLENCE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stats-card">
            <div className="text-3xl font-bold text-cyber-green mb-2">{stats.projects_completed}+</div>
            <div className="text-cyber-green/70 text-sm uppercase tracking-wider">Projects<br/>Completed</div>
          </div>
          <div className="stats-card">
            <div className="text-3xl font-bold text-cyber-green mb-2">{stats.happy_clients}+</div>
            <div className="text-cyber-green/70 text-sm uppercase tracking-wider">Happy<br/>Clients</div>
          </div>
          <div className="stats-card">
            <div className="text-3xl font-bold text-cyber-green mb-2">{stats.success_rate}</div>
            <div className="text-cyber-green/70 text-sm uppercase tracking-wider">Success<br/>Rate</div>
          </div>
          <div className="stats-card">
            <div className="text-3xl font-bold text-cyber-green mb-2">{stats.support}</div>
            <div className="text-cyber-green/70 text-sm uppercase tracking-wider">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;