<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users', 'teams'],
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  created() {
    this.getTeamData(this.teamId);
    console.log('💀', this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    console.log('👟', to, from);
    this.getTeamData(to.params.teamId);
    next();
  },
  watch: {
    teamId(newId) {
      this.getTeamData(newId);
    },
  },
  methods: {
    getTeamData(teamId) {
      const team = this.teams.find((team) => team.id === teamId);
      this.teamName = team.name;

      const members = [];
      for (const member of team.members) {
        const users = this.users.find((user) => user.id === member);
        members.push(users);
      }
      this.members = members;
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
