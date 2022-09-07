const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "Your name",
      confirmedName : "Your confirmed name",
    };
  },
  methods: {
    setName(event, uppercase) {
      this.name = uppercase === 'toUppercase'
        ? event.target.value.toUpperCase()
        : event.target.value;
    },
    add(number = 1) {
      this.counter = this.counter >= 0 && this.counter + number;
    },
    reduce(number = 1) {
      this.counter =
        this.counter && this.counter >= number
          ? this.counter - number
          : this.counter;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmName() {
      this.confirmedName = this.name;
    }
  },
});

app.mount("#events");
