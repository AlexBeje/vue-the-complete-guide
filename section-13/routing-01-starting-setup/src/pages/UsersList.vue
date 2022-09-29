<template>
  <button @click="confirm">Confirm</button>
  <button @click="save">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirm() {
      // this.$router.back();
      // this.$router.forward();
      this.$router.push('/teams');
    },
    save() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('🕺', to, from);
    next();
  },
  beforeRouteLeave(_to, _from, next) {
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToChange = confirm(
        'Are you sure? You got unsaved changes!'
      );
      next(userWantsToChange);
    }
  },
  unmounted() {
    console.log('😉', 'unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
