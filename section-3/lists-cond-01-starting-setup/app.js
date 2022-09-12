const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: '',
    };
  },
  computed: {
    noGoalsAddedYet() {
      return !this.goals.length;
    },
  },
  methods: {
    addGoal() {
      this.enteredGoalValue && this.goals.push(this.enteredGoalValue);
    },
  },
});

app.mount("#user-goals");
