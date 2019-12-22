import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
/*new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})*/
