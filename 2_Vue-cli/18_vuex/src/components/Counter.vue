<template>
  <div>
    <button @click="cong()" class="btn btn-success">Cộng</button>
    <button @click="tru()" class="btn btn-danger">Trừ</button>
    <br>
    <input type="text" class="form-control" :value="value" @input="update">
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CounterComponent',
  data() {
    return {
      value: this.$store.state.result
    };
  },
  methods: {
    cong() {
      return this.$store.state.result++
    },
    tru() {
      return this.$store.state.result--
    },
    update(event) {
      this.$store.dispatch('updateState', event.target.value)
    }
  }
});
</script>
