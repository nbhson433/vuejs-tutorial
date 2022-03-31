<template>
  <div>
    Result: {{tenItem}} <br>
    Name: {{nameItem}}
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'GettersComponent',
  computed: mapGetters([
    'tenItem',
    'nameItem'
  ])
});
</script>
