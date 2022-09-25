<template>
  <ul>
    <resource-item
      v-for="resourceItem in resourcesList"
      :key="resourceItem.id"
      :id="resourceItem.id"
      :title="resourceItem.title"
      :description="resourceItem.description"
      :link="resourceItem.link"
    />
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';
export default {
  components: { ResourceItem },
  inject: ['resourcesList'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
}
</style>
