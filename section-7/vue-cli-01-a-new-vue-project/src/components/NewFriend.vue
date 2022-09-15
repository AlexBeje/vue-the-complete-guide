<template>
  <div class="container">
    <form class="form" @submit.prevent="addNewFriend">
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
      <button type="submit" class="submit-button">New Friend</button>
    </form>
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
      const { name, phone, email, isFavorite } = this;
      const id = name && name.toLocaleLowerCase().split(' ').join('-');

      if (!name || !phone || !email) {
        alert('Friend name, phone and email are required');
        return;
      }

      const newFriendData = {
        id,
        name,
        phone,
        email,
        isFavorite,
      };

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

  .submit-button {
    margin: 0.5rem auto auto auto;
  }
}
</style>
