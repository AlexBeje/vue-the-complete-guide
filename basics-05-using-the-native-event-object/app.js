const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: ''
    };
  },
  watch: {
    // execute ONCE
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   this.fullName = value + ' ' + this.lastName
    // },
    // lastName(value) {
    //   this.fullName = this.name + ' ' + value;
    // }
  },
  computed: {
    // execute EVERY TIME the VALUES CHANGE
    fullName() {
      return this.name && this.name + ' ' + this.lastName
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
