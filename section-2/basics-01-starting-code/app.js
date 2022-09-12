const app = Vue.createApp({
  // data: function() {}
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      courseGoalBHtml: "<h3>Master Vue and build amazing apps!</h3>",
      frameworkName: "Vue",
      vueLink: "https://vuejs.org/"
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    }
  }
});

app.mount("#user-goal");
