import axios from 'axios';

export default {
  get(url, payload = {}) {
    return axios
      .get(url, payload)
      .then(r => r.data);

  },
  post(url, payload = '') {
    return axios
      .post(url,payload)
      .then(r => r.data);
  }
}
