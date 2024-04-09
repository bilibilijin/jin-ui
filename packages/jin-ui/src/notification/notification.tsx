import { TransitionGroup, defineComponent, onMounted, ref } from 'vue'
import { useClassnames } from '@bilibili-jin-ui/utils'
import { Close } from '@element-plus/icons-vue'
import type { NotificationConfig, NotificationConfigType, NotificationInstance } from './interface'
export default defineComponent<{
  onReady: (instance: NotificationInstance) => void // 在组件挂载后调用MountedMethod方法，然后将add方法传给onReady方法作为其中的参数
}>({
      name: 'JinNotification',
      setup(props, { expose }) {
        const data = ref<NotificationConfigType[]>([])
        const index = 0
        let _instance: any
        const add = (config: NotificationConfig) => {
          const instance: NotificationConfigType = {
            ...config, // config 包含了title和content还有duration
            _id: `notification-${index}`, // _id是自动生成的
            // duration: 3000,
          }
          _instance = instance
          const close = () => {
            const index = data.value.findIndex(item => item._id === instance._id)
            if (index !== -1)
              data.value.splice(index, 1)
            if (instance._timer)
              clearTimeout(instance._timer)
          }

          if (instance.duration !== 0) {
            instance._timer = setTimeout(() => {
              close()
            }, instance.duration ?? 3000)// 如果instance.duration 为空 返回 3000 不为空 返回设置的值
          }
          data.value.push(instance)
          return close
        }

        const { c, ce } = useClassnames('notification')
        const notificationCls = {
          [c()]: true,
        }

        const Immidate_close = (item: NotificationConfigType) => {
          const index = data.value.findIndex(item => item._id === _instance._id)
          if (index !== -1)
            data.value.splice(index, 1)
          if (item._timer)
            clearTimeout(item._timer)
        }

        const MountedMethod = () => {
          props.onReady?.({
            add,
          })
        }
        onMounted(() => { // 挂载完成之后执行MountedMethod方法，调用props上面的onReady属性，这个onReady接收的是NotificationInstance
          MountedMethod()
        })

        expose({
          add,
        })
        return () => {
          const renderNotification = () => {
            const cls = {
              [c('wrapper')]: true,
            }
            const titleCls = {
              [c('wrapper', 'title')]: true,
            }
            const contentCls = {
              [c('wrapper', 'content')]: true,
            }
            const iconCls = {
              [c('wrapper', 'icon')]: true,
            }
            const closeBtnCls = {
              [c('wrapper', 'icon', ce('closeBtn'))]: true,
            }
            return data.value.map((item) => {
              return (
                <div class={cls} key={item._id}>
                  <div class={titleCls}>{item.title}</div>
                  <div class={contentCls}>{item.content}</div>
                  <div class={iconCls}>
                    <i class={closeBtnCls} onClick={() => Immidate_close(item)}>
                      <Close />
                    </i>
                  </div>
                </div>
              )
            })
          }
          return (
            <>
              <div class={notificationCls}>
                <TransitionGroup name="jin-slide-right" tag="div">
                  {renderNotification()}
                </TransitionGroup>
              </div>
            </>
          )
        }
      },
    })
