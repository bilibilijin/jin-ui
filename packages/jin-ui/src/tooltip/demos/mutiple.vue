<docs>
---
title: 更多内容的文字提示
---

展示多行文本或者是设置文本内容的格式

用具名 slot content，替代tooltip中的content属性。
</docs>

<script setup lang='ts'>
</script>

<template>
  <jin-tooltip placement="top">
    <template #content>
      multiple lines<br>second line
    </template>
    <jin-button>Top center</jin-button>
  </jin-tooltip>
</template>

<style scoped>
</style>
