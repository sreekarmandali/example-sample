import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import axios from 'axios';
import mutations from '@/store/mutuations.js';
import actions from '@/store/actions.js';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const state = {

  users: [],

  appliances: [{ "name": "Mobile", "price": 12000, "waranty": 2, "image": "mobile.jpeg","id":1}, { "name": "Televison", "price": 25000, "waranty": 3, "image": "televison.jpeg","id":2 },
  { "name": "Refrigirator", "price": 35000, "waranty": 3, "image": "fridge.jpeg","id":3 }, { "name": "Microwave", "price": 10500, "waranty": 3, "image": "microwave.jpeg","id":4 }
  ],
  userItems: { "sreekar": ["televison", "mobile"], "srinivas": ["televison", "fridge"], "maggie": ["televison", "mobile","fridge"]}
}
const getters = {
 
  getDevices(state) {
    return state.appliances;
  },
  getUserInfo(state) {
    return state.userItems;
  }
}


export default new Vuex.Store({

  state,
  getters,
  mutations,
  actions

})
