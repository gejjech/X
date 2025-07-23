/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00ff41',
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
        'cyber-light': '#2a2a2a',
        'terminal-green': '#00ff41',
        'terminal-dark': '#0d1117',
        'terminal-border': '#30363d',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'cyber': ['Orbitron', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'type': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            'text-shadow': '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
            'box-shadow': '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41'
          },
          '100%': { 
            'text-shadow': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
            'box-shadow': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41'
          }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      },
      backgroundImage: {
        'cyber-pattern': 'linear-gradient(45deg, #0a0a0a 25%, transparent 25%), linear-gradient(-45deg, #0a0a0a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #0a0a0a 75%), linear-gradient(-45deg, transparent 75%, #0a0a0a 75%)',
        'terminal-gradient': 'linear-gradient(145deg, #0d1117 0%, #161b22 100%)',
        'cyber-gradient': 'linear-gradient(145deg, #00ff41 0%, #00cc33 100%)',
      },
    },
  },
  plugins: [],
}