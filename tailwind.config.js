/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/Header.tsx',
    './components/BackgroundCircles.tsx',
    './components/Hero.tsx',
    './components/About.tsx',
    './components/WorkExperience.tsx',
    './components/ExperienceCard.tsx',
    './pages/**/*.tsx',
    '.components/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

