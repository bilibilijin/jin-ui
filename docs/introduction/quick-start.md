# 用法
## 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会很方便
``` typescript
import {createApp} from 'vue'
import App from './App.vue'
import JINUI from 'jin-ui'
import 'jin-ui/es/style.css'
const app = createApp(App)
app.use(JINUI).mount('#app')
```


## 开始使用
现在你可以启动项目了。对于每个组件的用法，请参考单个组件对应的文档

---
lastUpdated: true
---