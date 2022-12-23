export default {
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
};
