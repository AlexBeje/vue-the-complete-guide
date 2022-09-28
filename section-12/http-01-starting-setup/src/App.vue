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
      addSurveyResponse: computed(() => this.addSurveyResponse),
    };
  },
  data() {
    return {
      isLoadingSurvey: false,
      surveyList: [],
      addSurveyResponse: {},
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
    async addSurvey(data) {
      this.addSurveyResponse = await fetch(
        'https://vue-http-demo-a8890-default-rtdb.europe-west1.firebasedatabase.app/surveys.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => {
          if (response.ok) {
            this.loadSurveys();
          } else {
            return {
              error: {
                nativeMessage: `Error code: ${response.status}, Message: ${response.statusText}`,
                message: 'Could not save data',
              },
            };
          }
        })
        .catch((err) => {
          return {
            error: {
              nativeMessage: err,
              message: 'Something went wrong - please try again later',
            },
          };
        });
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
