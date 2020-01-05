import { SET_USER, ADD_USER} from '../common/constants_type';

export default {
  [ADD_USER](state, payload) {
    state.users.push(payload);
  },

  [SET_USER](state, users) {

    state.users = users;
  }
}
