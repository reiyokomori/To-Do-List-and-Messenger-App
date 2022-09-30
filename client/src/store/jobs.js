import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    jobs: [],
    users: [],
  },
  actions: {
    fetchJobs({ commit }) {
      return HTTP().get('/jobs')
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
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    setUsers(state, users) {
      state.users = users;
    },
  },
};
