<template>
  <li class="container">
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="deteleFriend">🗑</button>
    <button @click="toggleDetails" class="mx-1">
      {{ showHideLabel }} Details
    </button>
    <button @click="toggleFavorite">⭐️</button>
    <ul v-if="detailsAreVisible" class="mt-1">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  // props: [id, name, phoneNumber, emailAddress, isFavorite],
  props: {
    id: {
      String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // emits: {
  //   'toggle-favorite': (id) => {
  //     return id ? true : false;
  //   },
  // },
  emits: ['toggle-favorite', 'delete-friend'],
  computed: {
    showHideLabel() {
      return this.detailsAreVisible ? 'Hide' : 'Show';
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deteleFriend() {
      this.$emit('delete-friend', this.id);
    },
  },
};
</script>
