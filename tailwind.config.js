/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flyonui/flyonui.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Merriweather', 'Oswald', 'Open Sans'],
      serif: ['Raleway', 'Merriweather'],
    },
  },
  plugins: [
    require('flyonui'),
    require('flyonui/plugin'),
    require('tailwindcss-motion'),
    require('tailwindcss-intersect'),
  ],
  flyonui: {
    themes: [
      {
        mytheme: {
          primary: '#aaa57b',
          secondary: '#005aff',
          accent: '#00c0ab',
          neutral: '#110c0e',
          'base-100': '#ffffff',
          info: '#00e0ff',
          success: '#00ffb4',
          warning: '#ef8300',
          error: '#f84960',
        },
      },
    ],
  },
}
