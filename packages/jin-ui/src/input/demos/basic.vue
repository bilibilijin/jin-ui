<docs>
---
title: 基础使用
---

这是一个`input`基础使用的例子
</docs>

<script setup lang='ts'>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <jin-input v-model="value" disabled />
  </div>
</template>

<style  scoped>

</style>
