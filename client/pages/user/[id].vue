<template v-if="user">
  <section class="userInfos">
    <h1>Media and messages of {{user?.username}}</h1>
    <NButton :type="user?.isDeleted? 'success' : 'error'" v-on:click="disableUser">
      {{user?.isDeleted? 'Enabled' : 'Disabled'}}
    </NButton>
    <h2>Media</h2>
    <div class="mediaList">
      <NCard v-for="media in medias" :title="media.url" class="mediaCard">
        <template #cover>
          <img :src="media.url" />
        </template>
      </NCard>
    </div>
  
    <NTable :bordered="false" :single-line="false" >
      <thead>
        <tr>
          <th>Messages sent</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="message in messages">
          <td>{{message.content}}</td>
        </tr>
      </tbody>
    </NTable>
  </section>

 
</template>

<script setup lang="ts">
import {
  NCard,
  NTable,
  NButton
} from 'naive-ui'

const {params} = useRoute();

const disableUser = ()=>{
  $fetch('/api/user', {
  method: 'PATCH',
    body: {
      userId: params.id,
    }
  });
  window.location.reload();
}

const {user, messages, medias} = await $fetch('/api/user', {
  method: 'POST',
  body: {
    userId: params.id
  }
})

</script>

<style>
.userInfos{
  width: 50vw;
  margin-left: 15%;
}
h1 {
  font-size: 32px;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mediaCard {
  margin: 50px;
  max-width: 200px;
}

.mediaList{
  width: 75vw;
  margin-left: 25%;
  columns: 3 auto;
}

</style>
