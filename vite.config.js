import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wave: "waveMove 10s linear infinite",
      },
      keyframes: {
        waveMove: {
          "0%": { transform: "translateX(-20%) scale(1)" },
          "50%": { transform: "translateX(20%) scale(1.1)" },
          "100%": { transform: "translateX(-20%) scale(1)" },
        },
      },
    },
  },
  plugins: [react(), tailwind()],
})
