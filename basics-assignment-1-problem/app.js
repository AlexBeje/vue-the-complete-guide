const app = Vue.createApp({
  data() {
    return {
      name: "Alex",
      noName: "Introduce yor name",
      age: 29,
      randomNumber: this.randomNumberFromZeroToOne(),
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHS_ZXR0GmjuA/profile-displayphoto-shrink_800_800/0/1652867446208?e=1666828800&v=beta&t=8HvkowJK8DWHKpzGQ9n4dviVY00Ta8kwqZbyd22SqB4",
    };
  },
  computed: {
    noNameCheck() {
      return this.name ? this.name : this.noName;
    },
    ageInFiveYears() {
      return this.age + 5;
    },
  },
  methods: {
    randomNumberFromZeroToOne() {
      return Math.floor(Math.random() * 10) + 1;
    },
    addFiveYears() {
      this.age = this.age + 5;
    },
    regenerateFavoriteNumber() {
      this.randomNumber = this.randomNumberFromZeroToOne();
    },
  },
});

app.mount("#assignment");
