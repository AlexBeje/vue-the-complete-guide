<template>
  <div>
    <the-header title="Remember me" />
    <the-resources />
  </div>
</template>

<script>
import TheResources from './components/resources/TheResources';
import TheHeader from './components/layouts/TheHeader';
export default {
  components: {
    TheResources,
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
