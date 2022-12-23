<template>
  <h3>{{ normalizedCounter }}</h3>
</template>

<script>
export default {
  computed: {
    normalizedCounter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
