<docs>
---
title: 基础使用
---

这是一个`button`基础使用的例子
</docs>

<script setup lang='ts'>
function handleClick() {
  console.log('click')
}
</script>

<template>
  <div>
    <jin-button @click="handleClick" />
  </div>
</template>

<style  scoped>

</style>
