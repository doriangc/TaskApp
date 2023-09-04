<template>
  <div class="chore-card">
    <ion-row>
      <ion-col size="8" class="task-text">
        <h3>Clean the Main Floor</h3>
        <p>Clean the bananas</p>
      </ion-col>
      <ion-col>
        <Rive src="checkmark.riv" :width="100" :height="100" class="checkmark"></Rive>
      </ion-col>
    </ion-row>
  </div>
</template>
<script lang="ts">
import Rive from '@/components/Rive.vue';

import { defineComponent } from 'vue';
import { IonRow, IonCol } from '@ionic/vue';

export default defineComponent({
  name: 'ChoreCard',
  components: { Rive, IonRow, IonCol }
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


  .chore-card {
    border-radius: 20px;
    background-color: var(--ion-card-background, #000);
    background-image: linear-gradient(var(--ion-card-background, #000), rgba(2, 121, 129, 0.096));
    
    /* background-color: rgba(31, 14, 31, 0.397); */
    box-shadow: 1px 2px 10px rgba(2, 121, 129, 0.096);
    margin: 15px 15px;
    /* padding: 15px 0px; */
  }

  ion-col {
    vertical-align: middle;
  }

  .checkmark {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-40%, -50%);
  }

  .task-text {
    padding: 15px 0px 15px 25px;
  }
</style>