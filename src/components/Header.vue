<template>
  <ion-grid id="header">
    <ion-row>
      <ion-col size="9" id="title-text">
        <h3>{{ titleMessage }}</h3>
        <p>{{ subtitleMessage }}</p>
      </ion-col>
      <ion-col>
        <img class="avatar" alt="Silhouette of a person's head"
          src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

import { IonCol, IonRow, IonGrid } from '@ionic/vue';

import { store } from '@/stores/header_store'

export default defineComponent({
  name: 'Header',
  components: {IonCol, IonRow, IonGrid},
  setup() {
    const getRandItem = (array: any[]) => {
      return array[Math.floor((Math.random() * array.length))];
    };

    const today = new Date();

    const isMorning = today.getHours() >= 4 && today.getHours() < 12;
    const isEvening = today.getHours() > 18 || today.getHours() < 4;
    const isAfternoon = !isMorning && !isEvening;

    const titleMessages = [
      ...isMorning ? ['Good Morning!'] : [],
      ...isEvening ? ['Good Evening!'] : [],
      ...isAfternoon ? ['Good Afternoon!'] : [],
      'Hello There!',
      'Bello!',
      'Howdy there!',
      'Hello!',
      'Hiya!',
      'Good day!',
    ];

    const subtitleMessages = [
      'How ya doin\'?',
      'Ready for some chores?'
    ];

    const saturdaySubtitle = 'It\'s Saturday chore day!';

    const titleMessage = store.title.length ? store.title : getRandItem(titleMessages);
    const subtitleMessage = store.subtitle.length ? store.subtitle : ((today.getDay() == 6) ?
      saturdaySubtitle :
      getRandItem(subtitleMessages));

    store.setTitle(titleMessage);
    store.setSubtitle(subtitleMessage);

    return {
      titleMessage,
      subtitleMessage
    };
  }
})
</script>

<style scoped>
  .avatar {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }

  #title-text {
    padding-left: 30px;
  }

  #header {
    background-color: var(--ion-card-background, #ffff);
    border-radius: 0px 0px 20px 20px;
    box-shadow: 0px 0px 10px var(--ion-color-light-shade, #000);
    padding: 20px 10px 15px;
    position: sticky;
    top: 0px;
    z-index: 100;
  }

  img {
    display: block;
    margin: auto;
  }

  h3 {
    font-size: 1.2em;
    margin: 4px 0;
  }

  p {
    color: var(--ion-color-medium-tint, #000);
    font-size: 0.9em;
    margin: 4px 0;
  }
</style>
