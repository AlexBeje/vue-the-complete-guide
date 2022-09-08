const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullName: ''
    };
  },
  watch: {
    name(value) {
      this.fullName = value + ' ' + this.lastName
    },
    lastName(value) {
      this.fullName = this.name + ' ' + value;
    }
  },
  computed: {
    // fullName() {
    //   return this.name && this.name + ' ' + 'Bejenaru'
    // },
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
