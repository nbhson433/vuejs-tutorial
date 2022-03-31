<template>
  <div class="d-flex flex-column align-items-center">
    <CounterComponent />
    <ResultComponent />
    <GettersComponent />
    <MutationsComponent />
    <ActionComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CounterComponent from './components/Counter.vue'
import ResultComponent from './components/Result.vue'
import GettersComponent from './components/Getters.vue'
import MutationsComponent from './components/Mutations.vue'
import ActionComponent from './components/Action.vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
    };
  },
  components: {
    CounterComponent,
    ResultComponent,
    GettersComponent,
    MutationsComponent,
    ActionComponent
  },
});
</script>
