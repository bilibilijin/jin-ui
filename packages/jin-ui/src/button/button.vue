<!--  -->
<script lang='ts'>
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useClassnames } from '@blibli-jin-ui/utils'

export default defineComponent({
  name: 'JinButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'Success' | 'Warning' | 'Danger'>,
      default: 'default',
    },
    plain: {
      type: Boolean as PropType<boolean>,
      defalut: 'false',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      defalut: 'false',
    },
    size: {
      type: String as PropType<'large' | 'default' | 'small'>,
      default: 'default',
    },
  }, // 如果需要导出组件的名字，则不能使用setup语法糖
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
    }
    const { c, cx, cm } = useClassnames('button')
    //
    const cls = cx(() => {
      return {
        // c()得到的是一个string
        [c()]: true,
        [c(cm(props.type))]: true,
        [c('size', cm(props.size))]: true,
      }
    })
    return {
      handleClick,
      cls,
    }
  },
})
</script>

<template>
  <button :class="cls" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<style  scoped>

</style>
