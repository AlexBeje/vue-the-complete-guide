<template>
  <li>
    <h2>{{ name }} {{isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails">{{ showHideLabel }} Details</button>
  <br/>
  <br/>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "lopez@localhost.com",
      },
    };
  },
  computed: {
    showHideLabel() {
      return this.detailsAreVisible ? "Hide" : "Show";
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>
