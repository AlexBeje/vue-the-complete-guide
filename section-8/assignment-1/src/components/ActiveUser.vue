<template>
  <div class="flex flex-col">
    <h1 class="text-center">Active user</h1>
    <div class="divider-x-adjusted bg-black" />
    <div class="flex flex-col h-full items-center justify-center gap-4">
      <h2 class="m-0">Name: {{ userData.name }}</h2>
      <h3 class="m-0">Age: {{ userData.age }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userData'],
};
</script>
