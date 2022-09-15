<template>
  <li class="container">
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetails">{{ showHideLabel }} Details</button>
    <button @click="toggleFavorite" class="ml-1">⭐️</button>
    <ul v-if="detailsAreVisible">
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
  // emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': (id) => {
      return id ? true : false;
    },
  },
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
  },
};
</script>
