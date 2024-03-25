<docs>
---
title: 基础使用
---

JIN UI注册了`$notification`方法并且它接收一个Object作为其参数。在最简单的情况下,你可以通过设置`title`和`content`属性来设置通知的标题和正文内容。默认情况下，通知在3000毫秒后自动关闭，但你可以通过设置`duration`属性来自定义通知的展示时间。如果你将它设为`0`，那么通知将不会自动关闭。需要注意的是`duration`接收一个`Number`，单位为毫秒
</docs>

<!--  -->
<script setup lang='ts'>
import { Notification } from 'jin-ui'

function info() {
  Notification.info({
    title: 'Title',
    content: 'This is a reminder',
    duration: 3000,
  })
}

function infoClose() {
  Notification.info({
    title: 'Prompt',
    content: 'This is a message that does not automatically close',
    duration: 0,
  })
}
</script>

<template>
  <div>
    <jin-button @click="info">
      Closes automatically
    </jin-button>
    <jin-button @click="infoClose">
      Won't close automatically
    </jin-button>
  </div>
</template>

<style  scoped>

</style>
