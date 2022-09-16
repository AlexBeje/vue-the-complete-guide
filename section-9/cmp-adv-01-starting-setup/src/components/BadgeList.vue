<template>
  <base-card>
    <!-- v-slot:default can be ommited -->
    <!-- <template v-slot:default> -->
      <!-- shorthand of the v-slot: # -->
    <template #default>
      <ul>
        <li>
          <base-badge type="admin" caption="ADMIN" />
        </li>
        <li>
          <base-badge type="author" caption="AUTHOR" />
        </li>
      </ul>
    </template>
  </base-card>
</template>

<style scoped>
h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
