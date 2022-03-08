<template>
  <FancyButton>
    <span style="color: red;">Click me </span>
    <AwesomeIcon/>
  </FancyButton>

  <SubmitButton/>
  <SubmitButton>Save</SubmitButton>

  <BaseLayout>
    <template v-slot:header>
      Content for the header slot
    </template>
      Main content
    <template v-slot:footer>
      Content for the footer slot
    </template>
  </BaseLayout>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FancyButton from './components/FancyButton.vue';
import AwesomeIcon from './components/AwesomeIcon.vue';
import SubmitButton from './components/SubmitButton.vue';
import BaseLayout from './components/BaseLayout.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
    };
  },
  components: {
    FancyButton,
    AwesomeIcon,
    SubmitButton,
    BaseLayout
  },
});
</script>