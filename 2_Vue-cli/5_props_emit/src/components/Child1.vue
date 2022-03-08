<template>
  <span class="hello">
    {{ name }} - {{ age }}

    <br />
    {{ reverseName() }}
    <button
      class="btn btn-sm btn-outline-success"
      @click="changeName()"
    >
      Child Change Name
    </button>
    <button
      class="btn btn-sm btn-outline-success"
      @click="parentChangeName()"
    >
      Parent Change Name
    </button>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildOne",
  data() {
    return {
      nameAssign: ''
    }
  },
  emits: {
    // Validate submit event
    nameChange: (nameAssign: string) => {
      if (nameAssign) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
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
    parentChangeName: Function
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