module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':   'var(--bg)',
        'bg-secondary': 'var(--bg2)',
        'bg-tertiary':  'var(--bg3)',
        'color-border': 'var(--border)',
        'color-muted':  'var(--muted)',
        'color-body':   'var(--body)',
        'color-heading':'var(--heading)',
        'color-accent': 'var(--accent)',
        'color-accent2':'var(--accent2)',
        'tag-bg':       'var(--tag-bg)',
        'tag-color':    'var(--tag-color)',
        'tag-border':   'var(--tag-border)',
      },
      fontFamily: {
        // Legacy fonts (keep for existing components)
        'recursive': ['Recursive'],
        'inter':     ['Inter'],
        // New design system fonts
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans':    ['"DM Sans"', 'sans-serif'],
        'mono':    ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        'content': '900px',
      },
      spacing: {
        'section': '7rem',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.6s forwards',
        'fade-up-1': 'fadeUp 0.6s 0.1s forwards',
        'fade-up-2': 'fadeUp 0.6s 0.2s forwards',
        'fade-up-3': 'fadeUp 0.6s 0.3s forwards',
        'fade-up-4': 'fadeUp 0.6s 0.4s forwards',
        'fade-up-5': 'fadeUp 0.6s 0.5s forwards',
        'fade-up-6': 'fadeUp 0.6s 0.6s forwards',
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
