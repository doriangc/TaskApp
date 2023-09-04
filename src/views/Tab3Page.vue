<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Header/>

      <h3>Monday</h3>
      <ChoreCard/>
      <ChoreCard/>
      <ChoreCard/>
      <h3>Tuesday</h3>
      <ChoreCard/>
      <ChoreCard/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

import ChoreCard from '@/components/ChoreCard.vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { ChoreCard, IonPage, IonContent, Header },
});
</script>

<style scoped>
  h3 {
    text-align: center;
  }

  .title {
    padding: 10px 30px;
    background-color: var();
  }
</style>
