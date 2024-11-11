import { build } from 'vite'

const path = require('path')
const {defineConfig} = require("vite")

export default defineConfig({ 
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true, // Enable HMR
    open: true, // Automatically open the app in the browser on startup
  },
  build:{
    outDir: path.resolve(__dirname, 'dist'), // Output directory
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name)) {
            // Custom path for CSS files
            return 'css/[name]-[hash][extname]'
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico|jpg)$/.test(assetInfo.name)) {
            // Custom path for image files
            return 'images/[name]-[hash][extname]'
          }
          if (/\.(woff2)$/.test(assetInfo.name)) {
            // Custom path for image files
            return 'fonts/[name]-[hash][extname]'
          }

          // Default for other assets
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }

})