<template>
  <h2>{{ user.userName }}</h2>
  <h3>{{ user.userAge }}</h3>
  <h4>Full name: {{ fullName }}</h4>
  <button @click="changeAge(1993)">Change Age</button>
</template>

<script setup>
import { defineProps, defineEmits, inject } from 'vue';

defineProps(['user']);
const emit = defineEmits(['changeAge']);

function changeAge(age) {
  emit('changeAge', age);
}

const fullName = inject('fullName');
console.error('fullName', fullName);
</script>
