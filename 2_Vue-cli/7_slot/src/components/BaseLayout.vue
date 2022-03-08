<template>
 <div class="container">
  <header>
    <slot name="header"></slot>
    <!-- <slot #header></slot> -->
  </header>
  <main>
    <slot></slot>
    <!-- <slot #default></slot> -->
  </main>
  <footer>
    <slot name="footer"></slot>
    <!-- <slot #footer></slot> -->
  </footer>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseLayout',
  data() {
    return {
    }
  },
});
</script>