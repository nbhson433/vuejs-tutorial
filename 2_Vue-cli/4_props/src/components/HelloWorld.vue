<template>
  <span class="hello">
    {{name}} - {{age}}

    {{reverseName()}}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    name: {
      type: String,
      required: true,
      default: 'Default Name'
    },
    age: {
      type: Number
    }
  },
  methods: {
    reverseName() {
      return this.name?.split("").reverse().join("")
    }
  }
});
</script>