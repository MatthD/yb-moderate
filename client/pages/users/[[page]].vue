<template>
  <h1>List of Users</h1>
  <div class="userList">
    <a  v-for="user in users" :href="'/user/'+user.id">

      <NCard :title="user.username" class="userCard">
        <template #cover>
          <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
        </template>
        Real name: {{user.name}}
      </NCard>
    </a>
  </div>

  <div class="paginationContainer">
    <NPagination v-model:page="pageNb" :page-count="Math.round(totalUsers/NB_USE_PER_PAGE)-1" class="paginationBox" size="large" />
  </div>
</template>

<script setup lang="ts">
import {
  NCard,
  NPagination
} from 'naive-ui'

const {params} = useRoute();


const pageNb = ref(params.page ??1);
const NB_USE_PER_PAGE = 30;
const {users: tmpInitialUsers, totalUsers} = await $fetch('/api/users', {

  params: {
    page: pageNb.value
  }
})

//initial loading
const users = ref(tmpInitialUsers)

// On page change update the user list
watch(pageNb, (newPageNb, oldPageNumber) => {
  if(newPageNb !== params.page){

    window.location.href= `/users/${pageNb.value}`
  }
},{immediate:true});

</script>






<style>
h1 {
  font-size: 32px;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.userList {
  width: 75vw;
  margin-left: 25%;
  columns: 3 auto;
}

.userCard {
  margin: 50px;
}

.n-card {
  max-width: 150px;
}

.paginationContainer {
  width: 100wv;
  display: flex;
  justify-content: center;
}

.paginationBox {
  margin: 0 auto;
}
</style>
