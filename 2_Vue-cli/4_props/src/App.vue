<template>
  <h3>{{msgProps}}</h3>
  <hello-work-component :msgProps="msgProps" /> 
  <hello-work-component :msgProps="msgProps" /> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      msgProps: `Welcome to Your Vue.js & TypeScript App`,
    };
  },
  components: {
    'hello-work-component': HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
