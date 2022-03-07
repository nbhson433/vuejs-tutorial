<template>
  <div>Parent Component: {{ name }}</div>
  <button 
    class="btn btn-sm btn-outline-success" 
    @click="name = 'Phương Trinh'">
    Change Name
  </button>
  <hr />
  <child-1 
    :name="name" 
    :age="age" 
    @nameChange="name = $event" 
    :parentChangeName="parentChangeName"
  />
  <hr>
  <child-2 
    :age="age" 
    @changeAge="age = $event"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChildOne from "./components/Child1.vue";
import ChildTwo from "./components/Child2.vue";

export default defineComponent({
  name: "App",
  components: {
    "child-1": ChildOne,
    "child-2": ChildTwo,
  },
  data() {
    return {
      name: "Sơn Nguyễn",
      age: 20
    };
  },
  methods: {
    parentChangeName() {
      this.name = 'Sơn Nguyễn'
    }
  }
});
</script>
