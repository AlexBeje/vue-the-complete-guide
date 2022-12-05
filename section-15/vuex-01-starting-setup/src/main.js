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
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_state, getters) {
      switch (true) {
        case getters.finalCounter < 0:
          return 0;
        case getters.finalCounter > 100:
          return 100;
        default:
          return getters.finalCounter;
      }
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
