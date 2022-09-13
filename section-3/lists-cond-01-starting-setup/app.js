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
      this.enteredGoalValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount("#user-goals");
