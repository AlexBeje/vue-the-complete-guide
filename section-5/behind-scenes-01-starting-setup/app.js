const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      messageApp1: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.messageApp1 = this.currentUserInput;
    },
  },
});

const app2 = Vue.createApp({
  template: `
    <h2>How Vue Works</h2>
    <input type="text" @input="saveInput">
    <button @click="setText">Set Text</button>
    <!-- does not work! -->
    <p>App 1 message - {{ messageApp1 }}</p>
    <p>app 2 message - {{ messageApp2 }}</p>
  `,
  data() {
    return {
      currentUserInput: '',
      messageApp2: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.messageApp2 = this.currentUserInput;
    },
  },
});

app.mount('#app');
app2.mount('#app2');

// ...

let message = 'Hello';
let longMessage = message + 'World'

// console.log('👩‍❤️‍👩', longMessage)

message = 'Hello!!!!'

// console.log('😪', longMessage)

// ...

const data = {
  message: 'Hello!',
  longMessage: 'Hello!World!'
}

const handler = {
  set(target, key, value) {
    // console.log('target', target)
    // console.log('key', key)
    // console.log('value', value)

    if (key === 'message') {
      target.longMessage = value + 'World!'
    }
    
    target.message = value;
  }
}

const proxy = new Proxy(data, handler)

proxy.message = "Hello!!!"

console.log('longMessage', proxy.longMessage)