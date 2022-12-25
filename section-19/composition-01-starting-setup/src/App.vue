<template>
  <section class="container">
    <UserData :user="user" @changeAge="changeAge" />
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
import { ref, reactive, computed, provide } from 'vue';
import UserData from './components/UserData.vue';

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

function setLastName() {
  lastName.value = lastNameInput.value.value;
}

function changeAge(age) {
  user.userAge = age;
}

provide('fullName', fullName);
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
