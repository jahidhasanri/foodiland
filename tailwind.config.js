/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
 plugins: [
  require('daisyui'),
],

daisyui: {
  themes: [
    {
      mytheme: {
        "primary": "#ffffff",       // white
        "secondary": "#f3f4f6",     // light gray (like Tailwind gray-100)
        "accent": "#e5e7eb",        // even lighter gray
        "neutral": "#d1d5db",       // gray-300
        "base-100": "#ffffff",      // white background
        "info": "#60a5fa",          // blue-400
        "success": "#34d399",       // green-400
        "warning": "#fbbf24",       // yellow-400
        "error": "#f87171",         // red-400
      },
    },
  ],
}

}
