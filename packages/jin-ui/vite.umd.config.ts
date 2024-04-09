import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import vue from '@vitejs/plugin-vue'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    tsxResolveTypes(),
  ],
  resolve: {
    alias: [
      {
        find: /^@bilibili-jin-ui\/utils/,
        replacement: path.resolve(baseUrl, '../utils/src'),
      },
    ],
  },
  build: {
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'vue',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      fileName: () => 'jin-ui.js',
      name: 'jinUI',
    },
  },
})
