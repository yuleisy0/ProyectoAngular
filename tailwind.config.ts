import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        colorOscuro: '#2c6975',
        colorClaro: '#2E6A47',


      },
    },
  },
  plugins: [],
} satisfies Config
