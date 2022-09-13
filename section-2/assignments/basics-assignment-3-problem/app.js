Vue.createApp({
  data() {
    return {
      number: 0,
      randomNumber: 100,
    };
  },
  computed: {
    maxHiddenNumber() {
      return Math.floor(Math.random() * this.randomNumber) + 1;
    },
    hiddenNumber() {
      return Math.floor(Math.random() * this.maxHiddenNumber) + 1;
    },
    state() {
      switch (true) {
        case this.number === 0:
          return `Find out the hidden number (you have 5 seconds and is less than ${this.maxHiddenNumber})`;
        case this.number < this.hiddenNumber:
          return "Not there yet";
        case this.number === this.hiddenNumber:
          return "You got it!";
        default:
          return "Too much!";
      }
    },
  },
  methods: {
    addToNumber(value) {
      this.resetNumber();
      this.number += value;
    },
    resetNumber() {
      this.number === 0 && setTimeout(() => (this.number = 0), 5000);
    },
    generateNewRandomNumber() {
      this.randomNumber = Math.floor(Math.random() * 100) + 1;
    }
  },
}).mount("#assignment");
