import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'

// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
  ],
})
