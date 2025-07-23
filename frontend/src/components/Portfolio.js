import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [loading, setLoading] = useState(true);

  const categories = ['ALL', 'AR/VR_MARKETING', 'AI_SOLUTIONS', 'E-COMMERCE', 'HEALTHCARE', 'REAL_ESTATE', 'SMART_CITY'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/portfolio`);
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    if (category === 'ALL') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-500';
      case 'LIVE':
        return 'bg-blue-500';
      case 'DEVELOPMENT':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <section id="portfolio" className="py-20 bg-cyber-gray">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-cyber-green font-mono text-xl animate-pulse">
              LOADING_PORTFOLIO...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-cyber-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-cyber-green mb-4">
            DIGITAL_PORTFOLIO
          </h2>
          <p className="text-cyber-green/70 font-mono text-lg max-w-4xl mx-auto">
            SHOWCASE_OF_SUCCESSFUL_PROJECTS | TRANSFORMING_DUBAI_DIGITALLY
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`filter-button ${activeFilter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-cyber-green text-xs ml-2">{project.file_name}</span>
              </div>
              
              {/* Project Image */}
              <div className="relative h-48 bg-cyber-light">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <span className="text-xs bg-cyber-green text-cyber-dark px-2 py-1 rounded font-mono">
                    {project.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded font-mono text-white ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="terminal-content">
                <h3 className="text-cyber-green font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-cyber-green/70 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="border-t border-cyber-green/20 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-cyber-green/50 text-xs font-mono">
                      CLIENT: {project.client}
                    </span>
                    <button className="text-cyber-green text-xs font-mono hover:text-white transition-colors">
                      VIEW_PROJECT &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="terminal-window max-w-md mx-auto">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-cyber-green text-xs ml-2">NO_RESULTS.txt</span>
              </div>
              <div className="terminal-content text-center">
                <p className="text-cyber-green/70">
                  NO PROJECTS FOUND IN THIS CATEGORY
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="terminal-window max-w-2xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-cyber-green text-xs ml-2">COLLABORATION_INVITE.txt</span>
            </div>
            <div className="terminal-content text-center">
              <p className="text-cyber-green mb-4">
                READY TO CREATE THE NEXT DIGITAL MASTERPIECE?
              </p>
              <button className="cyber-button">
                START_COLLABORATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;