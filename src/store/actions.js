
import { LOAD_USERS, ADD_USERS, DELETE_USERS, SET_USER ,GET_USERS_URL,DELETE_USER_URL,ADD_USER_URL} from '../common/constants_type';
import api from '../common/api_service';


export default {
  async [LOAD_USERS]({ commit }) {
    await api
      .get(GET_USERS_URL)
      .then(users => {
         commit(SET_USER, users)
      })
  },
  async [DELETE_USERS]({commit },payload) {
    await api
      .post(DELETE_USER_URL+ payload)
      .then((data) => {
        console.log(data);

      })

  },
  async [ADD_USERS]({ dispatch }, payload) {
    await api
      .post(ADD_USER_URL, payload)
      .then((data) => {
        if (data.message == 'Successfully created new user.')
          dispatch(LOAD_USERS)

      })

  }


}
