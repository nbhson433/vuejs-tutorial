<template>
  <span class="hello">
    <button
      class="btn btn-sm btn-outline-success"
      @click="changeName()"
    >
      Child Change Name
    </button>
    <button
      class="btn btn-sm btn-outline-success"
      @click="parentChangeName('param')"
    >
      Parent Change Name
    </button>
     
    <br>
    {{ nameAssign }} - {{ age }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildOne",
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
  data() {
    return {
      nameAssign: this.name
    }
  },
  beforeUpdate() {
    this.nameAssign = this.name
  },
  methods: {
    changeName() {
     this.nameAssign = 'Sơn Nguyễn'
     this.$emit('nameChange', this.nameAssign)
    }
  },
});
</script>