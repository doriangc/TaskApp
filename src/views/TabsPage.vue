<template>
  <ion-page>
    <ion-tabs>
      <!-- <ion-grid id="header">
        <ion-row>
          <ion-col size="9" id="title-text">
            <h3>{{ titleMessage }}</h3>
            <p>{{ subtitleMessage }}</p>
          </ion-col>
          <ion-col>
            <img class="avatar" alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-col>
        </ion-row>
      </ion-grid> -->
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="sparklesOutline" />
          <ion-label>Your Chore</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="statsChartOutline" />
          <ion-label>Stats</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="settingsOutline" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { settingsOutline, sparklesOutline, statsChartOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const getRandItem = (array: any[]) => {
      return array[Math.floor((Math.random()*array.length))];
    };

    const today = new Date();

    const isMorning = today.getHours() >= 4 && today.getHours() < 12;
    const isEvening = today.getHours() > 18 || today.getHours() < 4;
    const isAfternoon = !isMorning && !isEvening;

    const titleMessages = [
      ... isMorning ? ['Good Morning!'] : [],
      ... isEvening ? ['Good Evening!'] : [],
      ... isAfternoon ? ['Good Afternoon!'] : [],
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

    const titleMessage = getRandItem(titleMessages);
    const subtitleMessage = (today.getDay() == 6) ?
      saturdaySubtitle :
      getRandItem(subtitleMessages);
    
    return {
      titleMessage,
      subtitleMessage,
      settingsOutline,
      sparklesOutline,
      statsChartOutline
    };
  }
});

</script>

<style scoped>
  .avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  #title-text {
    padding-left: 30px;
  }

  #header {
    position: sticky;
    top: 0px;
    padding: 20px 10px 15px;
    background-color: var(--ion-card-background, #ffff);
    border-radius: 0px 0px 20px 20px;
    box-shadow: 0px 0px 10px var(--ion-color-light-shade, #000);
  }

  img {
    display: block;
    margin: auto;
  }

  h3 {
    margin: 4px 0;
    font-size: 1.2em;
  }

  p {
    font-size: 0.9em;
    margin: 4px 0;
    color: var(--ion-color-medium-tint, #000);
  }
</style>
