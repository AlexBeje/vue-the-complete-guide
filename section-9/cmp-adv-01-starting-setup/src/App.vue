<template>
  <!-- <TheHeader /> -->
  <the-header />
  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
  <!-- <active-goals v-if="selctedComponent === 'active-goals'" />
  <manage-goals v-if="selctedComponent === 'manage-goals'" /> -->
  <keep-alive>
    <component :is="selctedComponent" />
  </keep-alive>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: { TheHeader, ActiveGoals, ManageGoals },
  data() {
    return {
      selctedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(selectedComponent) {
      this.selctedComponent = selectedComponent;
    },
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
