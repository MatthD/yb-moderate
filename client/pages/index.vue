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

  <div class="paginationContainer">
    <NPagination v-model:page="pageNb" :page-count="100" class="paginationBox" size="large" />
  </div>
</template>

<script setup lang="ts">
import {
  NCard,
  NPagination
} from 'naive-ui'

const pageNb = ref(0);


// post is not the right way get should be used
const users = await $fetch('/api/users',{
  params:{
    page: pageNb.value
  }
});

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
.paginationContainer{
  width: 100wv;
  display: flex;
  justify-content: center;
}
.paginationBox{
  margin: 0 auto;
}
</style>
