import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss';
import minipic from 'vite-plugin-minipic'
import { dynamicChunkPlugin } from 'vite-plugin-dynamic-chunk';
import CleanBuild from 'vite-plugin-clean-build';


const SPLIT_EXPERIENCE_MODULES = {
  react: ["react", "react-dom", "react-router-dom"],
  coreui: ["@coreui/react"],

};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginPurgeCss(),
    minipic(),
    
    CleanBuild({
      targets: ['dist'],  
      hook: 'buildStart'   
    }),
    dynamicChunkPlugin({
      dependencySplitOption: SPLIT_EXPERIENCE_MODULES
    })
  ],
  build:{
    outDir: 'build', 
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name].[hash][extname]';  // Output CSS files to `css` folder
          }
          if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
            return 'images/[name].[hash][extname]';  // Output images to `images` folder
          }
          if (/\.(js)$/i.test(assetInfo.name)) {
            return 'javascript/[name].[hash][extname]';  // Output images to `images` folder
          }

          if (/\.(ttf)$/i.test(assetInfo.name)) {
            return 'fonts/[name].[hash][extname]';  // Output images to `images` folder
          }

          return 'assets/[name].[hash][extname]';  // Default for other assets
        }
      }
    }
  }
  
});
