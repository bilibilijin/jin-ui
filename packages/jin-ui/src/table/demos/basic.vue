<docs>
---
title: 基础使用
---

这是一个`table`基础使用的例子
</docs>

<script setup lang='ts'>
import { ref } from 'vue'

const columns = ref([
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '年龄',
    key: 'age',
  },
  {
    title: '地址',
    key: 'address',
  },
  {
    title: '存款',
    key: 'money',
  },
])

const data = ref(Array.from({ length: 10 }).map((_, index) => {
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
    <jin-table :data="data">
      <jin-table-column key="name" title="姓名" />
      <jin-table-column key="age" title="年龄" />
      <jin-table-column key="address" title="住址" />
      <jin-table-column key="money" title="存款" />
    </jin-table>
    <jin-table :columns="columns" :data="data" />
  </div>
</template>

<style  scoped>

</style>
