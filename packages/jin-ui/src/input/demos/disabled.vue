<docs>
---
title: 禁用状态
---

通过`disabled`属性指定是否禁用input组件
</docs>

<script setup lang='ts'>
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <div>
    <jin-input v-model="input" style="width: 240px;" disabled placeholder="Please input" />
  </div>
</template>

<style  scoped>

</style>
