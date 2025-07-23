import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-center">
          <div className="text-cyber-green font-mono text-2xl mb-4 animate-pulse">
            INITIALIZING DIGITAL MATRIX...
          </div>
          <div className="flex space-x-1 justify-center">
            <div className="w-3 h-3 bg-cyber-green rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-cyber-green rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-cyber-green rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App relative">
      <MatrixBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;