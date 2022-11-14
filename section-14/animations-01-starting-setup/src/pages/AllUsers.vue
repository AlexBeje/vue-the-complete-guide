<template>
  <div class="container">
    <h2>All Users</h2>
    <router-link to="/goals">Course Goals</router-link>
    <users-list />
  </div>
</template>

<script>
import UsersList from '../components/UsersList.vue';

export default {
  components: {
    UsersList,
  },
  data() {
    return {
      dialogIsVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>
