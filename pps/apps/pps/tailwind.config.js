const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      padding: {
        responsive: 'calc(12px + 4vw)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.pl-responsive': {
          paddingLeft: 'calc(12px + 4vw)',
        },
        '.pr-responsive': {
          paddingRight: 'calc(12px + 4vw)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
