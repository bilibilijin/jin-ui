<docs>
---
title: 基础使用
---

这是一个`input`基础使用的例子
</docs>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'

const value = ref('')
const inputRef = ref()

onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <div>
    <jin-input ref="inputRef" v-model="value" style="width: 240px;" placeholder="Please input" />
  </div>
</template>

<style  scoped>

</style>
