import type { App, Plugin } from 'vue'
import pkg from '../package.json'
import * as components from './components'

// 给所有组件进行注册
// 第一种导入方式
// imort jin from "jin-ui"
// app.use(jin)
export default {
  install(app: App) {
    Object.entries(components).forEach(([_name, comp]) => {
      // 如果该组件有注册的方法，就进行注册
      if ((comp as unknown as Plugin).install)
        app.use(comp as any)
    })
  },

  version: pkg.version,
} as Plugin

// 第二种导入方式
// import { Button } from "jin-ui"
export * from './components'
