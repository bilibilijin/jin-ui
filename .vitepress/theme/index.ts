// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import jin from 'jin-ui'
import 'jin-ui/styles.ts'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    // ...
    app.component('Demo', AntdTheme)
    app.use(jin)
    for (const [key, component] of Object.entries(ElementPlusIconsVue))
      app.component(key, component)
  },
} satisfies Theme
