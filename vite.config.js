import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,tailwindcss()],
   server: {
    host: true, // 👈 This exposes the server on your local network
    port: 5173, // optional: change port if needed
  }
})
