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
      this.$store.commit('increaseByOne');
    },
    add(increment) {
      this.$store.commit('increaseBy', { increment });
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
