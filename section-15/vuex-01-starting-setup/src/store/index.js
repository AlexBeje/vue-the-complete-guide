import { createStore } from 'vuex';

import counterModule from './counter/index';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

export default createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
