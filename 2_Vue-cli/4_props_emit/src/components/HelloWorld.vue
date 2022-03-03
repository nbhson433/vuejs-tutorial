<template>
  <span class="hello">
    {{ name }} - {{ age }}

    <br />
    {{ reverseName() }}
    <button
      class="btn btn-sm btn-outline-success"
      @click="changeName()"
    >
      Change Name
    </button>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      nameAssign: ''
    }
  },
  props: {
    name: {
      type: String,
      required: true,
      default: "Default Name",
    },
    age: {
      type: Number,
    },
  },
  beforeUpdate() {
    this.nameAssign = this.name
  },
  methods: {
    reverseName() {
      return this.name?.split("").reverse().join("");
    },
    changeName() {
     this.nameAssign = 'Sơn Nguyễn'
     this.$emit('nameChange', this.nameAssign)
    }
  },
});
</script>