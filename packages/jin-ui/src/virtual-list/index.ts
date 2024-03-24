import type { App } from 'vue'

import VirtualList from './virtual-list'

// 组件
VirtualList.install = (app: App) => {
  app.component(VirtualList.name, VirtualList)
}

export default VirtualList
