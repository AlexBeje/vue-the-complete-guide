<template>
  <learning-survey />
  <user-experiences />
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';
import { computed } from 'vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  provide() {
    return {
      loadSurveys: this.loadSurveys,
      addSurvey: this.addSurvey,
      isLoadingSurvey: computed(() => this.isLoadingSurvey),
      surveyList: computed(() => this.surveyList),
    };
  },
  data() {
    return {
      isLoadingSurvey: false,
      surveyList: [],
    };
  },
  methods: {
    async loadSurveys() {
      this.isLoadingSurvey = true;
      // GET / POST / DELETE / PATCH
      this.surveyList = await fetch(
        'https://vue-http-demo-a8890-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoadingSurvey = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          return { data: results };
        })
        .catch((err) => {
          this.isLoadingSurvey = false;
          return {
            error: {
              nativeMessage: err,
              message: 'Failed to fetch data - please try again later',
            },
          };
        });
    },
    addSurvey(data) {
      // GET / POST / DELETE / PATCH
      fetch(
        'https://vue-http-demo-a8890-default-rtdb.europe-west1.firebasedatabase.app/surveys.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      ).then(() => this.loadSurveys());
    },
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
