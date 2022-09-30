import Vue from 'vue';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    myjobs: [],
    status: null,
    loginError: null,
    users: [],
  },
  actions: {
    saveJob({ commit }, job) {
      return HTTP().patch(`myjobs/${job.id}`, job)
        .then(() => {
          commit('unsetEditMode', job);
        });
    },
    deleteJob({ commit }, job) {
      return HTTP().delete(`myjobs/${job.id}`)
        .then(() => {
          commit('removeJob', job);
        });
    },
    applyStatus({ commit, state }) {
      commit('setLoginError', null);
      return HTTP().post('/myjobs', {
        description: state.status,
      })
        .then(({ data }) => {
          commit('appendJob', data);
          commit('setStatus', null);
        })
        .catch(() => {
          commit('setLoginError', 'An error has occured trying to login.');
        });
    },
  fetchMyJobs({ commit }) {
    return HTTP().get('/myjobs')
      .then(({ data }) => {
       commit('setJobs', data);
    });
  },
  fetchUsers({ commit }) {
    return HTTP().get('/myusers')
      .then(({ data }) => {
       commit('setUsers', data);
    });
  },
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, { job, title }) {
      job.title = title;
    },
    setEditMode(state, job) {
      Vue.set(job, 'isEditMode', true);
    },
    unsetEditMode(state, job) {
      Vue.set(job, 'isEditMode', false);
    },
    removeJob(state, myjobs) {
      state.myjobs.splice(state.myjobs.indexOf(myjobs), 1);
    },
    appendJob(state, myjobs) {
      state.myjobs.push(myjobs);
    },
    setJobs(state, jobs) {
      state.myjobs = jobs;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setStatus(state, status) {
      state.status = status;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    fetchUser(state, user){
      state.user = user;
    },
    setJobDescription(state, { job, description }) {
      job.description = description;
    },
  },
};
