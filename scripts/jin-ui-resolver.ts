import type { ComponentResolver } from 'unplugin-vue-components/types'

export function jinUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name) {
      if (name.startsWith('Jin')) {
        return {
          name: name.slice(3),
          from: 'jin-ui',
        }
      }
    },
  }
}
