<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2> -->
    <!-- <h3>{{ userAge }}</h3> -->
    <h2>{{ user.userName }}</h2>
    <h3>{{ user.userAge }}</h3>
    <button @click="changeAge(1993)">Change Age</button>
  </section>
</template>

<script setup>
// import { ref } from 'vue';

// const userName = ref('Alexandru');
// const userAge = ref(29);

// const user = ref({
//   userName: 'Alexandru',
//   userAge: 29,
// });

// setTimeout(() => {
//   user.value.userName = 'Alex';
//   user.value.userAge = 1993;
// }, 2000);

// For objects (it removes the .value extra method)
import { reactive } from 'vue';

const user = reactive({
  userName: 'Alexandru',
  userAge: 29,
});

// setTimeout(() => {
//   user.userName = 'Alex';
//   user.userAge = 1993;
// }, 2000);

function changeAge(age) {
  user.userAge = age;
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
