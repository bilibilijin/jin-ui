<!--  -->
<script lang='ts'>
import { defineComponent } from 'vue'
import { useClassnames } from '@jin-ui/utils'
export default defineComponent({
  name: 'JinButton', // 如果需要导出组件的名字，则不能使用setup语法糖
  emits: ['click'],
  setup(_props, { emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
    }
    const { c, cx } = useClassnames('button')
    const cls = cx(() => {
      return {
        [c()]: true,
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
  <button :class="cls" @click="handleClick">
    button
    {{ cls }}
  </button>
</template>

<style  scoped>

</style>
