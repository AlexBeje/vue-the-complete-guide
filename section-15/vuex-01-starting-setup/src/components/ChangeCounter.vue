<template>
  <div class="container">
    <button @click="inc">Add 1</button>
    <button @click="increase({ increment: 10 })">Add 10</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('counter/increment');
    // },
    // add(increment) {
    //   this.$store.dispatch('counter/increase', { increment });
    // },
    // ...mapActions('counter', ['increment', 'increase']),
    ...mapActions('counter', {
      inc: 'increment',
      increase: 'increase',
    }),
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
