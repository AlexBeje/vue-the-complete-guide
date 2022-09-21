<template>
  <button :type="type" :class="mode">
    <slot />
  </button>
</template>

<script>
export default {
  props: ['type', 'mode'],
};
</script>

<style scoped>
button {
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  font-family: inherit;
  padding: 0.75rem 1.5rem;
}

button:hover,
button:active {
  border-color: #270041;
  background-color: #270041;
}

.flat { 
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
