<template>
  <div>
    <canvas ref="canvas" :width="$props.width" :height="$props.height"></canvas>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { Rive } from '@rive-app/canvas';

export default defineComponent({
  name: 'Rive',
  props: {
    src: String,
    width: Number,
    height: Number
  },
  mounted() {
    new Rive({
      canvas: this.$refs.canvas,
      src: this.$props.src,
      autoplay: false,
      
    })
  }
})
</script>