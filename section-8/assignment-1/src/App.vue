<template>
  <div class="flex mt-8 justify-center">
    <active-user :user-data="userData" />
    <div class="divider-y bg-black mx-4" />
    <user-data
      :parent-user-data="userData"
      @update-active-user-data="updateActiveUserData"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: 'Alex',
        age: '29',
      },
    };
  },
  methods: {
    updateActiveUserData(updatedUserData) {
      this.userData = { ...updatedUserData };
    },
  },
};
</script>

<style>
  .divider-y {
    width: 1px;
  }
  .divider-x {
    height: 1px;
  }
  .divider-x-adjusted {
    height: 2px;
  }
</style>