import { fileURLToPath } from 'node:url'
import path from 'node:path'

// import vue from '@vitejs/plugin-vue'
const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^jin-ui/,
    replacement: path.resolve(baseUrl, 'packages/jin-ui/src'),
  },
  {
    find: /^@blibli-jin-ui\/utils/,
    replacement: path.resolve(baseUrl, 'packages/utils/src'),
  },
  {
    find: /^@blibli-jin-ui\/icons/,
    replacement: path.resolve(baseUrl, 'packages/icons/src'),
  },
]
