Vue.createApp({
  data() {
    return {
      tasks: [],
      taskDescription: "",
      taskListVisible: true,
    };
  },
  methods: {
    addTask() {
      this.taskDescription && this.tasks.push(this.taskDescription);
      this.taskDescription = "";
    },
    hideTasksList() {
      this.taskListVisible = !this.taskListVisible;
    },
  },
}).mount("#assignment");
