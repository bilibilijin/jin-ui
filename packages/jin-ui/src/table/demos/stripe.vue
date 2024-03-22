<docs>
---
title: 带斑马纹表格
---

使用带斑马纹的表格，可以更容易区分出不同行的数据。
stripe 可以创建带斑马纹的表格。 如果 true, 表格将会带有斑马纹
</docs>

<script setup lang='ts'>
import { ref } from 'vue'

const data = ref(Array.from({ length: 4 }).map((_, index) => {
  return {
    name: `John Brown'${index + 1}`,
    age: 32 + index,
    address: `New York No. ${index + 1} Lake Park`,
    money: index * 1000,
  }
}))
</script>

<template>
  <div>
    <jin-table stripe :data="data">
      <jin-table-column key="name" title="姓名" />
      <jin-table-column key="age" title="年龄" />
      <jin-table-column key="address" title="住址" />
      <jin-table-column key="money" title="存款" />
    </jin-table>
  </div>
</template>

<style  scoped>

</style>
