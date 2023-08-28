<template>
  <div class="user-card">
    <ion-row>
      <ion-col>
        <img class="avatar" alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-col>
      <ion-col size="8" class="task-text">
        <h3>{{ name }}</h3>
      </ion-col>
    </ion-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserCard',
  props: {
    name: String,
  },
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

.avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.user-card {
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