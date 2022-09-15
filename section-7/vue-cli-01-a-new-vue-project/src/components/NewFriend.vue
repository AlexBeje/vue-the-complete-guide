<template>
  <div class="container">
    <form class="form">
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" />
      <label for="phone">Phone Number</label>
      <input type="string" name="phone" v-model="phone" />
      <label for="email">Email Address</label>
      <input type="email" name="email" v-model="email" />
      <div class="favorite" @click="toggleIsFavorite">
        <label for="is-favorite">Favorite</label>
        <input type="checkbox" name="is-favorite" v-model="isFavorite" />
      </div>
    </form>
    <button @click="addNewFriend">New Friend</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      name: '',
      phone: '',
      email: '',
      isFavorite: false,
    };
  },
  emits: ['new-friend-data'],
  methods: {
    toggleIsFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    addNewFriend() {
      this.id = this.name && this.name.toLocaleLowerCase().split(' ').join('-');

      const newFriendData = {
        id: this.id,
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite,
      };

      if (!newFriendData.name || !newFriendData.phone || !newFriendData.email) {
        alert('Friend name, phone and email are required');
        return;
      }

      this.$emit('new-friend-data', newFriendData);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > input {
    margin-bottom: 1rem;
    width: 100%;
  }
  .favorite {
    display: flex;
    gap: 0.2rem;
  }
}
</style>
