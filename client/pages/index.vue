<template>
  <h1>Home page</h1>

  <div  class="userList">
    <NCard v-for="user in users" :title="user.username" class="userCard">
      <template #cover>
        <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
      </template>
      Real name: {{user.name}}
    </NCard>
  </div>
</template>

<script setup lang="ts">
import {
  NCard
} from 'naive-ui'

const users = await $fetch('/api/users');

console.log('In home page')
</script>

<style>
h1{
  font-size: 32px;
  width:100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userList{
  width: 75vw;
  margin-left: 25%;
  columns: 3 auto;
}
.userCard{
  margin: 50px;
}
.n-card {
  max-width: 150px;
}
</style>
