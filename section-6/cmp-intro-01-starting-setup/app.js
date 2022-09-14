const app = Vue.createApp({
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
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

// The components are mini Vue apps
app.component("friend-contact", {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">
        {{detailsLabel}} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      friend: {
        id: "Manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
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
});

app.mount("#app");
