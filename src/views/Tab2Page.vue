<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Header/>

      <h2 class="title">Who are you?</h2>
      <UserCard name="Johnny"/>
      <UserCard name="Robby"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

import { defineComponent } from 'vue';
import UserCard from '@/components/UserCard.vue';

import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { UserCard, Header, IonContent, IonPage }
});
</script>

<style scoped>
.title {
  text-align: center;
  margin: 30px 0px;
}
</style>