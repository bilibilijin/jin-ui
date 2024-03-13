import type { App } from 'vue'
import Button from './button.vue'

// 为组件提供 install 安装方法，供按需引入
Button.install = (app: App) => {
  app.component(Button.name, Button)
}
export default Button
