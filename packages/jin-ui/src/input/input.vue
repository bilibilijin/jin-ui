<!--  -->
<script setup lang='ts'>
import { nextTick, onMounted, ref } from 'vue'
import { useClassnames } from '@jin-ui/utils'
import type { InputProps } from './interface'

defineOptions({
  name: 'JinInput',
})

const props = defineProps<InputProps>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()
const { cx, c, cm } = useClassnames('input')
const inputRef = ref<HTMLInputElement>()

const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
  }
})

const inputCls = cx(() => {
  return {
    [c('input')]: true,
  }
})

function setInputValue() {
  const _input = inputRef.value
  if (!_input || _input.value === props.modelValue)
    return

  _input.value = props.modelValue ?? ''
}

// 触发@input事件之后返回target，target是input框的dom元素
function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  if (props.modelValue === target.value)
    return
  emit('update:modelValue', target.value)
  nextTick(() => {
    setInputValue()
  })
}

onMounted(() => {
  setInputValue()
})
</script>

<template>
  <div :class="cls">
    <input ref="inputRef" :class="inputCls" :value="modelValue" @input="handleInput">
  </div>
</template>

<style  scoped>

</style>
