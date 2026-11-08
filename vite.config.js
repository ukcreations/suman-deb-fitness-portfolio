import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'force-exit-after-build',
      apply: 'build',
      closeBundle() {
        // Forces Node to exit cleanly once bundling is completely finished on CI/CD (Vercel)
        process.exit(0)
      }
    }
  ],
})
