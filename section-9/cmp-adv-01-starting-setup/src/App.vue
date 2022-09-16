<template>
  <!-- <TheHeader /> -->
  <the-header />
  <badge-list />
  <user-info
    :full-name="activeUser.name"
    :info-text="activeUser.description"
    :role="activeUser.role"
  />
  <!-- Only works if just a slot is available (default slot) -->
  <course-goals #default="slotProps">
    <!-- <template #default="slotProps">
      <h2 @click="test(slotProps)">{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
    </template> -->
    <h2 @click="test(slotProps)">{{ slotProps.item }}</h2>
    <p>{{ slotProps.anotherProp }}</p>
  </course-goals>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  // Local components
  // components: { 'the-header': TheHeader },
  // components: { TheHeader: TheHeader },
  components: { TheHeader, BadgeList, UserInfo, CourseGoals },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    test(item) {
      console.log('👩‍👩‍👦‍👦', item);
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
