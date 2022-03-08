<template>
  <button class="fancy-btn">
    <slot></slot> <!-- slot outlet -->
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FancyButton',
  data() {
    return {
    }
  },
});
</script>