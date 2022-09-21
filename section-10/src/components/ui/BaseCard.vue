<template>
  <div class="container">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 40rem;
}
.content {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem;
}
</style>
