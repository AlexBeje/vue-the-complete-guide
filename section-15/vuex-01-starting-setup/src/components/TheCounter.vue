<template>
  <h3>{{ finalCounter }}</h3>
  <h3>{{ normalizedCounter }}</h3>
</template>

<script>
export default {
  computed: {
    finalCounter() {
      return this.$store.getters.finalCounter;
    },
    normalizedCounter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
