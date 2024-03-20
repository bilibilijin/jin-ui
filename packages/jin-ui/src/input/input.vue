<!--  -->
<script setup lang='ts'>
import { nextTick, onMounted, ref } from 'vue'
import { useClassnames } from '@jin-ui/utils'
import { omit, pick } from 'lodash-es'
import { type InputProps, originInputProps } from './interface'

defineOptions({
  name: 'JinInput',
  inheritAttrs: false,
})

const props = defineProps<InputProps>()

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

defineSlots<{
  prefix(): any
  suffix(): any
}>()

const { cx, c, ce, cm } = useClassnames('input')
const inputRef = ref<HTMLInputElement>()

const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
  }
})

const inputCls = cx(() => {
  return {
    [c(ce('inner'))]: true,
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

function focus() {
  inputRef.value?.focus()
}

function blur() {
  inputRef.value?.blur()
}

defineExpose({
  focus,
  blur,
})
</script>

<template>
  <div :class="cls" v-bind="omit($attrs, originInputProps)">
    <span v-if="$slots.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input ref="inputRef" v-bind="pick($attrs, originInputProps)" :disabled="disabled" :class="inputCls" :value="modelValue" @input="handleInput">
    <span v-if="$slots.suffix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>

<style  scoped>

</style>
