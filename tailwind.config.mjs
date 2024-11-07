/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        kaisei: ['Kaisei Decol', 'serif'],
        kurenaido: ['Zen Kurenaido', 'serif'],
      },
    },
  },
  plugins: [],
};
