<template>
  <section class="container">
    <h2>{{ user.userName }}</h2>
    <h3>{{ user.userAge }}</h3>
    <button @click="changeAge(1993)">Change Age</button>
    <div>
      <br />
      <input type="text" placeholder="First Name" v-model="firstName" />
      <br />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
      <br />
      <p>
        Name: <strong>{{ fullName }}</strong>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const user = reactive({
  userName: 'Alexandru',
  userAge: 29,
});

const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

function changeAge(age) {
  user.userAge = age;
}

function setLastName() {
  lastName.value = lastNameInput.value.value;
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
