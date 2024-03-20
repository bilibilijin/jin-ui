<docs>
---
title: 带有图标标记输入类型
---

要在输入框中添加图标，你可以简单地使用 `prefix` 和 `suffix` 属性
</docs>

<script setup lang='ts'>
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <div>
    <jin-input v-model="input" style="width: 240px;" placeholder="Please input">
      <template #prefix>
        A
      </template>
      <template #suffix>
        B
      </template>
    </jin-input>
  </div>
</template>

<style  scoped>

</style>
