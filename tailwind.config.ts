import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "f-6f-9fc": "var(--f-6f-9fc)",
        primary: "var(--primary)",
        "primary-l10": "var(--primary-l10)",
        "primary-l60": "var(--primary-l60)",
        "primary-l70": "var(--primary-l70)",
        secondary: "var(--secondary)",
        "secondary-l10": "var(--secondary-l10)",
        "secondary-l30": "var(--secondary-l30)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
}
export default config
