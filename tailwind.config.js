/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0a',
        'neon-blue': '#00f2ff',
        'neon-purple': '#b300ff',
        'neon-green': '#00ff9d',
      },
      fontFamily: {
        'cyber': ['Space Grotesk', 'sans-serif'],
        'code': ['Fira Code', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00f2ff, 0 0 20px #00f2ff, 0 0 30px #00f2ff' },
          '100%': { textShadow: '0 0 20px #00f2ff, 0 0 30px #00f2ff, 0 0 40px #00f2ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};