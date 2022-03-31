<template>
  <div>
    <button @click="myAction" class="btn btn-dark">act</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'ActionComponent',
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      'myAction'
    ])  
  }
});
</script>
