import { createVNode, render } from 'vue'
import type { NotificationConfig, NotificationInstance } from './interface'
import Notification from './notification'

export function createNotification() {
  let instance: NotificationInstance // 如果不存在instance
  const info = (config: NotificationConfig) => { // 这里传入的NotificationConfig 是对象{title:'xxx',content:'xxx'}
    if (!instance) {
      // 不存在的情况
      const body = document.body // 获取body
      const vm = createVNode(Notification, { // 创建一个虚拟节点 然后调用组件中的onReady方法
        onReady(_instance: NotificationInstance) {
          instance = _instance // 这里是组件挂载完成之后执行了MountedMethod方法，然后将add方法传给onReady方法作为其中的参数，也就是这里的_instance 里面包含了一个add方法
          instance.add(config)
        },
      })
      if (config.appContext)
        vm.appContext = config.appContext

      render(vm, body)
    }
    else {
      instance.add(config)
    }
  }
  return {
    info,
  }
}
