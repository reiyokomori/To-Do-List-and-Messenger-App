<template>
  <v-toolbar color="blue" dark fixed>
  <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">

      <v-btn flat to="/register" v-if="!isLoggedIn">
        <v-icon class="mr-2">account_box</v-icon>
        Register
      </v-btn>

      <v-btn flat to="/login" v-if="!isLoggedIn">
        <v-icon class="mr-2">fingerprint</v-icon>
        Login
      </v-btn>

      <v-btn flat to="/jobs" v-if="isLoggedIn" @click="fetchJobs();setCurrentProjectNull()">
        <v-icon class="mr-2">feed</v-icon>
        News Feeds
      </v-btn>
      <v-btn flat to="/myjobs" v-if="isLoggedIn" @click="fetchMyJobs();setCurrentProjectNull()">
        <v-icon class="mr-2">feed</v-icon>
        My Posts
      </v-btn>
       <v-btn flat to="/projects" v-if="isLoggedIn" @click="setCurrentProjectNull()">
        <v-icon class="mr-2">playlist_add_check</v-icon>
        Projects
      </v-btn>
      <v-btn flat v-if="isLoggedIn" @click="setCurrentProjectNull();logout()">
        <v-icon class="mr-2">exit_to_app</v-icon>
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
  methods: {
    ...mapActions('projects', [
      'setCurrentProjectNull',
    ]),
    ...mapActions('authentication', [
      'logout',
    ]),
    ...mapActions('myjobs', [
      'fetchMyJobs',
    ]),
    ...mapActions('jobs', [
      'fetchJobs',
    ]),
  },
};
</script>

<style>

</style>
