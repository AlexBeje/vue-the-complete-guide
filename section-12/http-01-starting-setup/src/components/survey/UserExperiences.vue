<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <p v-if="this.isLoadingSurvey.value" class="loading">
        Loading experiences ...
      </p>
      <p v-if="this.surveyList.value.value && this.surveyList.value.error">
        {{ this.surveyList.value.error.message }}
      </p>
      <p
        v-if="
          this.addSurveyResponse.value && this.addSurveyResponse.value.error
        "
      >
        {{ this.addSurveyResponse.value.error.message }}
      </p>
      <p
        v-if="
          !this.isLoadingSurvey.value &&
          !this.surveyList.value.error &&
          this.surveyList.value.data &&
          !this.surveyList.value.data.length
        "
      >
        No sumbitted experiences found.
      </p>

      <ul>
        <survey-result
          v-for="result in surveyList.value.data"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  inject: ['loadSurveys', 'isLoadingSurvey', 'surveyList', 'addSurveyResponse'],
  mounted() {
    this.loadSurveys();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
p {
  color: gray;
}
</style>
