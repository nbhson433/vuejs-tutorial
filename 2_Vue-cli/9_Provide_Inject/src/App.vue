<template>
  <p>
     <input v-model="dangerMessage">
    <ChildComponent/>
  </p>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ChildComponent from './components/Child-Component.vue'

export default defineComponent({
  name: 'App',
  provide() {
    return {
      warnMsg: this.warnMessage,
      dangerMsg: computed(() => this.dangerMessage),
    }
  },
  data() {
    return {
      warnMessage: 'Warning message!',
      dangerMessage: 'Danger message!'
    };
  },
  components: {
    ChildComponent
  },
});
</script>