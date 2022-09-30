import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import projects from './projects';
import tasks from './tasks';
import jobs from './jobs';
import myjobs from './myjobs';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api',
  },
  modules: {
    authentication,
    projects,
    tasks,
    jobs,
    myjobs,
  },
  mutations: {

  },
  actions: {
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
});
