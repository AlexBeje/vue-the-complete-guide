Vue.createApp({
  data() {
    return {
      tasks: [],
      taskDescription: "",
      taskListVisible: true,
    };
  },
  computed: {
    hideTasksListButtonLabel() {
      return `${this.taskListVisible ? "Hide" : "Show"} list`;
    },
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
