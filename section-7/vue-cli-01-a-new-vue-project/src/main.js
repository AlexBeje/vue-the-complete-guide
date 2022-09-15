import { createApp } from "vue";
import App from "./App.vue";
import FriendDetails from "./components/FriendDetails.vue";
import NewFriend from "./components/NewFriend.vue";

const app = createApp(App)

app.component('friend-details', FriendDetails)
app.component('new-friend', NewFriend)

app.mount("#app");
