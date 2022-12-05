import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increaseByOne(state) {
      state.counter++;
    },
    increaseBy(state, args) {
      state.counter = state.counter + args.increment;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
