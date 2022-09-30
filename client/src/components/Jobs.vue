<template>
  <Panel title="News Feeds">
    <div
      class="job mt-2"
      v-for="job in jobs.slice().reverse()"
      :key="job.id">
      <v-layout row wrap>
    <v-flex xs11 class="text-xs-center">
     <div class="job-info">
      <h3>Username: {{users[job.user_id-1].username}}</h3>
      <h3>Date: {{job.updated_at}}</h3>
      <p>{{ job.description }}</p>
    </div>
      </v-flex>
      </v-layout>
    </div>
  </Panel>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  mounted() {
    this.fetchJobs();
    this.fetchUsers();
  },
  computed: {
    ...mapState('jobs', [
      'jobs',
      'users',
    ]),
  },
  methods: {
     ...mapActions('jobs', [
      'fetchJobs',
      'fetchUsers',
    ]),
  },
};
</script>

<style>
.job {
  font-size: 15px;
}

.icon {
  cursor: pointer;
}

.icon:hover {
  color: #333;
}
</style>
