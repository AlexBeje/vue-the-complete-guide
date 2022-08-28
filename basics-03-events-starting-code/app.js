const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter >= 0 && this.counter++;
    },
    reduce() {
      this.counter && this.counter--;
    },
  },
});

app.mount("#events");
