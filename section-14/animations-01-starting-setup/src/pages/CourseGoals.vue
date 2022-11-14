<template>
  <div class="container">
    <h2>Course Goals</h2>
    <router-link to="/">All Users</router-link>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>
