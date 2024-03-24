<docs>
---
title: 基础使用
---

这是一个无限滚动列表基础使用的例子
</docs>

<script setup lang='ts'>
const data = Array.from({ length: 1000 }).map((_, index) => {
  return {
    id: index + 1,
    name: `test` + `_${index}`,
  }
})

function handleClick(item: any) {
  console.log(item)
}
</script>

<template>
  <div>
    <jin-infinite-scroll :delay="50" :data="data" class="infinite-list" @click-item="handleClick">
      <template #item="{ element }">
        <div class="infinite-list-item">
          {{ element.name }}
        </div>
      </template>
    </jin-infinite-scroll>
  </div>
</template>

<style  scoped>
.infinite-list-item {
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #18222c;
    color:#409eff
}
</style>
