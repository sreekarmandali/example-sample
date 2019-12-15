import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {

  users: [{ "name": 'sreekar', "location": 'hyderabad', "itemcount": 2, "bill": 10000 }, { "name": 'srinivas', "location": 'Mumbai', "itemcount": 2, "bill": 20000 },
    { "name": 'maggie', "location": 'delhi', "itemcount": 2, "bill": 30000 }],

  appliances: [{ "name": "Mobile", "price": 12000, "waranty": 2, "image": "mobile.jpeg" }, { "name": "Televison", "price": 25000, "waranty": 3, "image": "televison.jpeg" },
  { "name": "Refrigirator", "price": 35000, "waranty": 3, "image": "fridge.jpeg" }, { "name": "Microwave", "price": 10500, "waranty": 3, "image": "microwave.jpeg" }
  ],
  userItems: { "sreekar": ["televison", "mobile"], "srinivas": ["televison", "fridge"], "maggie": ["televison", "mobile","fridge"]}
}
const getters = {
  getUsers(state) {
    return state.users;
  },
  getDevices(state) {
    return state.appliances;
  },
  getUserInfo(state) {
    return state.userItems;
  }
}

const mutations = {
  addUser(state,payload) {

    state.users.push(payload);
  },
  deleteUser(state, payload) {
    state.users.splice(payload, 1);
  }
}
const actions = {
  adduser(payload) {
    store.commit('addUser',payload)
  }


}

export default new Vuex.Store({

  state,
  getters,
  mutations,
  actions

})
