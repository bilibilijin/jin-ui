import type { CSSProperties } from 'vue'
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useClassnames } from '@bilibili-jin-ui/utils'

export default defineComponent({
  name: 'JinInfiniteScroll',
  props: {
    height: {
      type: Number,
      default: 300,
    },
    itemHeight: {
      type: Number,
      default: 50,
    },
    data: {
      type: Array,
      default: () => [],
    },
    buffer: {
      type: Number,
      default: 5,
    },
    delay: {
      type: Number,
      default: 500,
    },
  },
  emits: ['clickItem'],
  setup(props, { emit }) {
    const { c } = useClassnames('infinite-scroll')
    const containerRef = ref<HTMLElement | null>(null)// containerRef 是可视区域的div
    const scrollTop = ref(0)

    const onScroll = () => {
      scrollTop.value = containerRef.value?.scrollTop || 0
      console.log('this')
    }
    const handleItemClick = (item: any) => {
      emit('clickItem', item)
    }

    console.log(props.delay)

    function debounce(fn: Function, time: number | undefined) {
      let timer: any = null
      return function (this: any, ...args: any[]) {
        if (timer)
          clearTimeout(timer)

        timer = setTimeout(() => {
          fn.call(this, ...args)
        }, time)
      }
    }

    // 发生滚动时候监听事件，重新获取距离顶部的高度
    onMounted(() => {
      if (containerRef.value)
        containerRef.value.addEventListener('scroll', debounce(onScroll, props.delay))
    })
    onUnmounted(() => {
      if (containerRef.value)
        containerRef.value.removeEventListener('scroll', debounce(onScroll, props.delay))
    })

    // 防止dom元素没加载出来时给一个默认的高度 300px
    const containerHeight = computed(() => {
      if (containerRef.value)
        return containerRef.value.clientHeight

      return props.height
    })

    const sliceItems = computed(() => {
      const itemHeight = props.itemHeight// 50
      const buffer = props.buffer// 上下各5个
      const showCounter = Math.ceil(containerHeight.value / itemHeight) // 可视区域展示的条数 向上取整 300 / 50 = 6
      const counterIndex = Math.floor(scrollTop.value / itemHeight) - buffer // buffer的上面还有几条数据，例如 假设内容区域渲染出半条，此时假设scrollTop = 360 itemHeight = 50 则counterIndex = 7
      const startIndex = Math.max(0, counterIndex)
      const endIndex = showCounter + buffer * 2 + counterIndex
      // 这里计算出了包括可视区域的数据以及上下buffer包含的数据的startIndex和endIndex，并从data中取出对应的数据，再计算每条数据的top值
      return props.data.slice(startIndex, endIndex).map((item, index) => { // startIndex 是最上面buffer的第一条， endIndex是最下面buffer的最后一条
        return {
          item,
          top: startIndex * itemHeight + index * itemHeight,
          key: `InfiniteScroll-${startIndex + index}`,
        }
      })
    })

    return {
      c,
      containerRef,
      sliceItems,
      handleItemClick,
    }
  },
  render() {
    const { c, height, data, itemHeight, sliceItems, handleItemClick } = this
    const slots = this.$slots
    // 目前可以看到的区域
    const containCls = {
      [c()]: true,
    }
    const containerStyle: CSSProperties = {
      height: `${height}px`,
    }
    const bodyH = data.length * itemHeight

    // 真正的内容区域（可视区域 + 缓冲区域）
    const bodyCls = {
      [c('body')]: true,
    }

    const bodyStyle: CSSProperties = {
      height: `${bodyH}px`,
    }

    const renderItems = () => {
      const height = itemHeight ?? 50
      const itemCls = {
        [c('item')]: true,
      }
      return sliceItems.map((item) => {
        const itemStyle: CSSProperties = {
          height: `${height}px`,
          top: `${item.top}px`,
        }
        const onClick = () => {
          handleItemClick(item.item)
        }
        // 如果slots有item这个插槽，那么就往item里传入属性item,值为item.item
        return (
          <div class={itemCls} onClick={onClick} style={itemStyle} key={item.key}>
            {slots.item && slots.item({ element: item.item })}
          </div>
        )
      })
    }

    return (
      <div class={containCls} ref="containerRef" style={containerStyle}>
        <div class={bodyCls} style={bodyStyle}>
          {renderItems()}
        </div>
      </div>
    )
  },
})
