<template>
  <form @submit.prevent="updateActiveUser" class="flex flex-col">
    <h1 class="text-center">Update user</h1>
    <div class="divider-x bg-black" />
    <div class="flex flex-col gap-3 mt-3">
      <div class="flex flex-col">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="userData.name" />
      </div>
      <div class="flex flex-col">
        <label for="age">Age</label>
        <input type="text" name="age" v-model="userData.age" />
      </div>
      <button type="submit" class="mt-1">Update Active User</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userData: { ...this.parentUserData },
    };
  },
  props: ['parentUserData'],
  emits: ['update-active-user-data'],
  methods: {
    updateActiveUser() {
      this.$emit('update-active-user-data', this.userData);
    },
  },
};
</script>
