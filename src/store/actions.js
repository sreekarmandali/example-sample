import axios from 'axios';


export default {
  loadUsers({ commit }) {
    axios
      .get('http://localhost:8000/users')
      .then(r => r.data)
      .then(users => {

        commit('SET_USERS', users)
      })
  },
  deleteUsers({ commit }, payload) {
    axios
      .post('http://localhost:8000/users/delete/' + payload)
      .then(r => r.data)
      .then((data) => {
        console.log(data);

      })

  },
  addUsers({ dispatch }, payload) {
    axios
      .post('http://localhost:8000/users/addUser/', payload)
      .then(r => r.data)
      .then((data) => {
        if (data == 1)
          dispatch('loadUsers')

      })

  }


}
