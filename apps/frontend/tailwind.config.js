const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: `var(--font-source-code-pro)`,
        emphasized: `var(--font-better-vcr)`,
      },
      colors: {
        label: {
          primary: `var(--color-label-primary)`,
          secondary: `var(--color-label-secondary)`,
          tertiary: `var(--color-label-tertiary)`,
          quaternary: `var(--color-label-quaternary)`,
        },
        bg: {
          primary: `var(--color-bg-primary)`,
          secondary: `var(--color-bg-secondary)`,
          tertiary: `var(--color-bg-quaternary)`,
        },
        accent: `var(--color-accent)`,
        fill: {
          primary: `var(--color-fill-primary)`,
          secondary: `var(--color-fill-secondary)`,
          tertiary: `var(--color-fill-tertiary)`,
          quaternary: `var(--color-fill-quaternary)`,
        },
        gray: {
          white: `var(--color-gray-white)`,
          1: `var(--color-gray-1)`,
          2: `var(--color-gray-2)`,
          3: `var(--color-gray-3)`,
          4: `var(--color-gray-4)`,
          5: `var(--color-gray-5)`,
          6: `var(--color-gray-6)`,
          black: `var(--color-gray-black)`,
        },
        separator: {
          opaque: `var(--color-separator-opaque)`,
          'non-opaque': `var(--color-separator-non-opaque)`,
        },
        blue: '#496df6',
        electric: '#8af3fd',
        red: '#ff453a',
        green: '#30d158',
        yellow: '#ffd60a',
      },
    },
  },
  plugins: [],
};
