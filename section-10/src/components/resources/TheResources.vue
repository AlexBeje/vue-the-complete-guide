<template>
  <div>
    <base-card>
      <div class="button-list">
        <base-button
          @click="changeTab('resources-list')"
          :mode="setFlatMode('resources-list')"
        >
          Stored Resources
        </base-button>
        <base-button
          @click="changeTab('new-resource-item')"
          :mode="setFlatMode('new-resource-item')"
        >
          New Resource
        </base-button>
      </div>
    </base-card>
    <component :is="selectedTab" />
  </div>
</template>

<script>
import ResourcesList from './ResourcesList.vue';
import NewResourceItem from './NewResourceItem.vue';
export default {
  components: {
    ResourcesList,
    NewResourceItem,
  },
  data() {
    return {
      selectedTab: 'resources-list',
      resourcesList: [
        {
          id: 'official-guide',
          title: 'Official guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google.',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resourcesList: this.resourcesList,
    };
  },
  methods: {
    changeTab(tab) {
      this.selectedTab = tab;
    },
    setFlatMode(selectedTab) {
      return this.selectedTab !== selectedTab && 'flat';
    },
  },
};
</script>

<style scoped>
.button-list {
  display: flex;
  gap: 0.5rem;
}
</style>
