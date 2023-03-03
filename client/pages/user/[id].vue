<template v-if="user">
  <h1>Media and messages of {{user?.username}}</h1>
  <div class="userList">
    
  </div>

 
</template>

<script setup lang="ts">
import {
  NCard,
  NPagination
} from 'naive-ui'

const {params} = useRoute();

const user = await $fetch('/api/user', {
  method: 'POST',
  body: {
    userId: params.id
  }
})

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

</style>
