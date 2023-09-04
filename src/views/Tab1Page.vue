<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Header/>

      <h2 class="title">Today's Chores</h2>

      <ChoreCard/>
      <ChoreCard/>

      <h2 class="title">Future Chores</h2>
      <ChoreCard/>
      <ChoreCard/>

      <h2 class="title">Past Chores</h2>
      <ChoreCard/>
      <ChoreCard/>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';

import { defineComponent } from 'vue';
import { checkmarkCircleOutline, logoIonic } from 'ionicons/icons';

import ChoreCard from '@/components/ChoreCard.vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Tab1Page',
  components: { IonIcon, ChoreCard, Header, IonPage, IonContent },
  setup() {
    return {
      logoIonic,
      checkmarkCircleOutline
    };
  }
});
</script>

<style scoped>
  h3 {
    font-size: 1.2em;
    margin: 4px 0;
  }

  p {
    color: var(--ion-color-medium-tint, #000);
    font-size: 0.9em;
    margin: 4px 0;
  }

  ion-col {
    vertical-align: middle;
  }

  .title {
    padding: 10px 30px;
  }
</style>