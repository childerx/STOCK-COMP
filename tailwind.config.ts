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
      },
    },
     colors: {
      'active': '#0400DD',
      'selected': '#EFF6FF',
      'normal': '#324054',
     }
  },
  plugins: [],
}
export default config
