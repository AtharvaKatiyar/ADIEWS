import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep PNG files in root of dist for easy access
          if (assetInfo.name && assetInfo.name.endsWith('.png')) {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  server: {
    allowedHosts:['bandwidth-coupons-hospitals-travis.trycloudflare.com', 'leo-television-fixes-consumer.trycloudflare.com']
  }
})
