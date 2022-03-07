<template>
  Component Child 2: {{age}}
  <button
      class="btn btn-sm btn-outline-success"
      @click="changeAge()"
    >
      Change Age
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildTwo",
  props: {
    age: {
      type: Number,
    },
  },
  methods: {
    changeAge() {
      this.$emit('changeAge', 30)
    }
  }
});
</script>