<template>
  <!-- <TheHeader /> -->
  <the-header />
  <badge-list />
  <user-info
    :full-name="activeUser.name"
    :info-text="activeUser.description"
    :role="activeUser.role"
  />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  // Local components
  // components: { 'the-header': TheHeader },
  // components: { TheHeader: TheHeader },
  components: { TheHeader, BadgeList, UserInfo },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
