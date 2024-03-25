<!--  -->
<docs>
---
title: 使用 组件作为正文内容
---

message 支持传入 组件来作为正文内容
</docs>

<script setup lang='ts'>
import { Notification } from 'jin-ui'
import { getCurrentInstance, h } from 'vue'
import Test from './components/test.vue'
import Test2 from './components/test2.vue'

const instance = getCurrentInstance()
function info() {
  Notification.info({
    title: 'Title',
    content: h(Test),
    duration: 3000,
  })
}

function infoTemplate() {
  Notification.info({
    title: 'Title',
    content: h(Test2),
    duration: 3000,
    appContext: instance?.appContext,
  })
}
</script>

<template>
  <jin-button @click="info">
    Use Template
  </jin-button>
  <jin-button @click="infoTemplate">
    Use JIN Template
  </jin-button>
</template>

<style  scoped>

</style>
