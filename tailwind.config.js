/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: 'var(--bg-main)',
        surface: 'var(--bg-surface)',
        'surface-hover': 'var(--bg-surface-hover)',
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
        },
        border: {
          ui: 'var(--border-ui)',
        }
      },
      backgroundImage: {
        'gradient-futuristic': 'linear-gradient(135deg, var(--bg-main) 0%, var(--bg-surface) 100%)',
        'gradient-glow': 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
      }
    },
  },
  plugins: [],
}