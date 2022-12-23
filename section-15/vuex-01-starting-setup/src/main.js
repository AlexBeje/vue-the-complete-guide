import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.increment;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => context.commit('increment'));
    },
    increase(context, payload) {
      setTimeout(() => context.commit('increase', payload));
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
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
};

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthentificated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
