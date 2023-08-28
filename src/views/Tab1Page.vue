<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="orb"></div>
    
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
import { IonPage, IonContent } from '@ionic/vue';


import { IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { checkmarkCircleOutline, logoIonic } from 'ionicons/icons';

import ChoreCard from '@/components/ChoreCard.vue';

export default defineComponent({
  components: { IonIcon, ChoreCard },
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
    margin: 4px 0;
    font-size: 1.2em;
  }

  p {
    font-size: 0.9em;
    margin: 4px 0;
    color: var(--ion-color-medium-tint, #000);
  }

  ion-col {
    vertical-align: middle;
  }

  .title {
    padding: 10px 30px;
  }
</style>