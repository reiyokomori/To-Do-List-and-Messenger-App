import Vue from 'vue';
import Router from 'vue-router';
import Projects from './views/Projects.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Jobs from './views/Jobs.vue';
import MyJobs from './views/MyJobs.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/myjobs',
      component: MyJobs,
    },
    {
      path: '/jobs',
      component: Jobs,
    },
    {
      path: '/',
      component: Projects,
    },
    {
      path: '/projects',
      component: Projects,
    },
  ],
});
