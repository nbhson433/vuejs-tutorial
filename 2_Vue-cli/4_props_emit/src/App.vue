<template>
  <div>Parent Component: {{ name }}</div>
  <button class="btn btn-sm btn-outline-success" @click="name = 'Phương Trinh'">
    Change Name
  </button>
  <hr />
  <hello-work-component :name="name" :age="20" @nameChange="name = $event"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      name: "Sơn Nguyễn",
    };
  },
  components: {
    "hello-work-component": HelloWorld,
  },
});
</script>
