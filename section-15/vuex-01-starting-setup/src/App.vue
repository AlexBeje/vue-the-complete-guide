<template>
  <base-container title="Vuex" v-if="userIsAuthentificated">
    <the-counter />
    <favorite-value />
    <change-counter />
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    TheCounter,
    UserAuth,
  },
  computed: {
    ...mapGetters(['userIsAuthentificated']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
