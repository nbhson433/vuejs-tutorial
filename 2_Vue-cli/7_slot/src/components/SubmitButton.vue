<template>
  <button class="submit-btn">
    <slot>Submit</slot> <!-- slot outlet -->
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SubmitButton',
  data() {
    return {
    }
  },
});
</script>