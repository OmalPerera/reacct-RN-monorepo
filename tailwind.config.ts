import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  //content: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: ['./apps/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#1C1C1C',
      white: '#FF0000',
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
    },
  },
  plugins: [],
};

export default tailwindConfig;
