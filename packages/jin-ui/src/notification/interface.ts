import type { VNode } from 'vue'

export interface NotificationConfig {
  content: string | VNode
  title: string | VNode
  duration?: number
  appContext?: any
}

export interface NotificationConfigType extends NotificationConfig {
  _id?: string
  _timer?: ReturnType<typeof setTimeout>
}

export interface NotificationInstance {
  add: (config: NotificationConfig) => (() => void)// 返回的是一个close函数

}
