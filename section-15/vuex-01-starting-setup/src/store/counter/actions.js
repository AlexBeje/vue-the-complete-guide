export default {
  increment(context) {
    setTimeout(() => context.commit('increment'));
  },
  increase(context, payload) {
    setTimeout(() => context.commit('increase', payload));
  },
};
