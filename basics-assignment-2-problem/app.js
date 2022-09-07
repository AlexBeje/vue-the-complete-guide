const app = Vue.createApp({
  data() {
    return {
      alertMessage: "Alert!",
      output: "",
      outputOnEnter: ""
    };
  },
  methods: {
    triggerAlertMessage() {
      alert(this.alertMessage);
    },
    userInput(event) {
      this.output = event.target.value;
    },
    userInputOnEnter() {
      this.outputOnEnter = this.output;
    }
  },
});

app.mount("#assignment");
