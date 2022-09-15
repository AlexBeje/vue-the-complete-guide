<template>
  <header>
    <h1>My Friends</h1>
  </header>
  <new-friend @new-friend-data="addNewFriend" />
  <ul>
    <friend-details
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :is-favorite="friend.isFavorite"
      @toggle-favorite="toggleFavorite"
    />
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'lopez@localhost.com',
          isFavorite: true,
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0123 45678 60',
          email: 'julie@localhost.com',
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(id) {
      const foundFriend = this.friends.find((friend) => friend.id === id);
      foundFriend.isFavorite = !foundFriend.isFavorite;
    },
    addNewFriend(newFriendData) {
      const friendAlreadyInFriendsList = this.friends.find(
        (friend) => friend.id === newFriendData.id
      );

      friendAlreadyInFriendsList
        ? alert('Friend name already registered')
        : this.friends.push(newFriendData);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app .container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.ml-1 {
  margin-left: calc(8 * 1px);
}
</style>
