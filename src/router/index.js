import Vue from 'vue';
import Router from 'vue-router';
import ApplianceHolder from '@/components/ApplianceHolder';
import LoginUser from '@/components/LoginUser';
import DetailUser from '@/components/DetailUser';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginUser',
      component: LoginUser
    },
    {
      path: '/hello',
      name: 'ApplianceHolder',
      component: ApplianceHolder
    },
    {
      path: '/detail',
      name: 'DetailUser',
      component: DetailUser
    }

  ]
})
