Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "01234 5678 982",
          email: "julie@localhost.com",
        },
      ],
      detailsAreVisible: false,
    };
  },
  computed: {
    detailsLabel() {
      return this.detailsAreVisible ? "Hide" : "Show";
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
}).mount("#app");
