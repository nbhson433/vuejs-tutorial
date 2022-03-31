<template>
  <div>
    Result: {{result}}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ResultComponent',
  computed: {
    result() {
      // return this.$store.state.result
      return this.$store.getters.tenItem
    }
  }
});
</script>
