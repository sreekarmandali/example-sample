export default {
  ADD_USER(state, payload) {
    console.log("hello2")


    state.users.push(payload);
  },

  SET_USERS(state, users) {

    state.users = users;
  }
}
