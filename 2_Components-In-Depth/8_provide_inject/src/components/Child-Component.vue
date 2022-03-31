<template>
  <div>
    {{warnMsg}}
  </div>
  <div>
    {{dangerMsg}}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChildComponent',
  inject: ['warnMsg', 'dangerMsg'],
  data() {
    return {

    }
  },
});
</script>