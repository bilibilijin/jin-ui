import type { App } from 'vue'

import InfiniteScroll from './virtual-list'

// 组件
InfiniteScroll.install = (app: App) => {
  app.component(InfiniteScroll.name, InfiniteScroll)
}

export default InfiniteScroll
