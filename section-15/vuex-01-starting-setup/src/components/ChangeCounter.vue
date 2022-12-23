<template>
  <div class="container">
    <button @click="addOne">Add 1</button>
    <button @click="add(10)">Add 10</button>
  </div>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    },
    add(increment) {
      this.$store.dispatch('increase', { increment });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: fit-content;
}
</style>
