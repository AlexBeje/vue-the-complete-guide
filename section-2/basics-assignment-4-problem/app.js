Vue.createApp({
  data() {
    return {
      userClassName: "",
      paragraphIsVisibile: false,
      paragraphBackgroundColor: "",
    };
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisibile = !this.paragraphIsVisibile;
    },
  },
  computed: {
    getParagraphBackgroundColor() {
      return { backgroundColor: this.paragraphBackgroundColor };
    },
    getUserClass() {
      switch (this.userClassName.toUpperCase()) {
        case "USER1":
          return { user1: true };
        case "USER2":
          return { user2: true };
      }
    },
  },
}).mount("#assignment");
