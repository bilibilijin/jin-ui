import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import fs from 'fs-extra'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => 'jin-ui.css',
      },
    },
    lib: {
      entry: 'src/styles.ts',
      formats: ['es'],
      fileName: () => 'jin-ui-style.js',
    },
  },
  plugins: [
    {
      name: 'remove:jin-ui-style.js',
      closeBundle() {
        const jinPath = fileURLToPath(new URL('./dist', import.meta.url))
        const styleFilePath = path.resolve(jinPath, 'jin-ui-style.js')
        fs.removeSync(styleFilePath)
      },
    },
  ],
})
