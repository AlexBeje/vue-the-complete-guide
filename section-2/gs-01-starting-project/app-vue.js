Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.enteredValue &&
        this.goals.push({
          id: this.goals.length,
          value: this.enteredValue,
        });
      this.resetInput();
    },
    resetInput() {
      this.enteredValue = "";
    },
    removeGoal(id) {
      this.goals = this.goals.filter((goal) => goal.id !== id);
    },
  },
}).mount("#app");
