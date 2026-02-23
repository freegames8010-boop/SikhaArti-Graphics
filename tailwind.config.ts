import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        section: '#f5f7fa'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(17, 24, 39, 0.08)',
        premium: '0 20px 50px rgba(255, 140, 66, 0.18)'
      },
      backgroundImage: {
        orangeGradient: 'linear-gradient(135deg, #ff6a00 0%, #ff8c42 52%, #ffb347 100%)'
      },
      borderRadius: {
        card: '20px'
      }
    }
  },
  plugins: []
};

export default config;
