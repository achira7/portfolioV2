/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';

export default {
  darkMode: ["class"],
  // content: ["./index.html", "./src/**/*.{js,jsx}"],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

 
    // Or if using `src` directory:
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()
  ],
};
