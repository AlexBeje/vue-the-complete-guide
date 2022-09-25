<template>
  <div>
    <base-dialog
      :dialogIsVisible="dialog.visibility"
      :title="dialog.title"
      @closeDialogEvent="dialog.visibility = !dialog.visibility"
    >
      {{ dialog.content }}
      <template #actions>
        <base-button @click="dialog.visibility = !dialog.visibility">
          Ok
        </base-button>
      </template>
    </base-dialog>
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
    <keep-alive>
      <component :is="selectedTab" />
    </keep-alive>
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
      dialog: {
        visibility: false,
        title: '',
        content: '',
      },
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
      addResourceItem: this.addResourceItem,
      removeResource: this.removeResource,
    };
  },
  methods: {
    changeTab(tab) {
      this.selectedTab = tab;
    },
    setFlatMode(selectedTab) {
      return this.selectedTab !== selectedTab && 'flat';
    },
    addResourceItem(resourceItem) {
      const { title, description, link } = resourceItem;
      if (!title || !description || !link) {
        this.dialog.visibility = true;
        this.dialog.title = 'Invalid';
        this.dialog.content =
          'Resource title, descritpion and link are required';
        return;
      }
      const id =
        resourceItem.title &&
        resourceItem.title.toLocaleLowerCase().split(' ').join('-');
      const duplicatedResource = this.checkIfDuplicatedResource(id, title);
      if (duplicatedResource) {
        this.dialog.visibility = true;
        this.dialog.title = 'Duplicated';
        this.dialog.content =
          'The resource "' + duplicatedResource + '" already exists';
        return;
      }
      this.resourcesList.unshift({
        id,
        ...resourceItem,
      });
    },
    removeResource(resourceId) {
      // Not working because we are providing the new array but modifing the old array
      // const newResourceList = this.resourcesList.filter(
      //   (resource) => resource.id !== resourceId
      // );
      // this.resourcesList = newResourceList;

      const resourceIndex = this.resourcesList.findIndex(
        (resource) => resource.id === resourceId
      );
      this.resourcesList.splice(resourceIndex, 1);
    },
    checkIfDuplicatedResource(id, title) {
      const duplicatedResource = this.resourcesList.find(
        (resource) => resource.id === id
      );
      return duplicatedResource && title;
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
