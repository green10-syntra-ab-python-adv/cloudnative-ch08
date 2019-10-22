import Vue from 'vue';
import Router from 'vue-router';
import HelloCh08 from '@/components/HelloCh08';
import Callback from '@/components/Callback';
// import { requireAuth } from '../../utils/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloCh08',
      // beforeEnter: requireAuth,
      component: HelloCh08,
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
    },
  ],
});