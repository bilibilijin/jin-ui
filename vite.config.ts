import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import alias from './alias'
import { jinUIResolver } from './scripts/jin-ui-resolver'

// import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
    }),
    Components({
      resolvers: [
        jinUIResolver(),
      ],
    }),
  ],
  resolve: {
    alias,
  },
})
