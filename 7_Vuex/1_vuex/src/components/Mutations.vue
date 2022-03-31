<template>
  <div>
    <button @click="muta" class="btn btn-dark">muta</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MutationsComponent',
  data() {
    return {};
  },
  methods: {
    muta() {
      return this.$store.commit('hundredItem', 30)
    }
  }
});
</script>
