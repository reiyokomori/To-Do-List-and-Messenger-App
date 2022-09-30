<template>

 <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        
        
        <h1>Post a Status</h1>

        <v-text-field
          placeholder="What is on your mind?"
          @input="setStatus($event)"
          :value = "status"
          @keyup.enter="applyStatus"
        ></v-text-field>
        <v-btn color="blue" dark @click="applyStatus">
          <v-icon class="mr-2">fingerprint</v-icon>
          Post
        </v-btn>



      </v-flex>
    </v-layout>
  

    <v-layout>
      <v-flex xs20 >
        <MyJobs></MyJobs>
      </v-flex>
    </v-layout>

</v-container>
</template>

<script>

import {mapState, mapMutations, mapActions } from 'vuex';
import MyJobs from '@/components/MyJobs.vue';
import router from '../router';


export default {
  components: {
    MyJobs,
  },
  mounted() {
    
  },
  methods: {
    ...mapMutations('myjobs', [
      'setStatus',
    ]),
    ...mapActions('myjobs', [
      'applyStatus',
    ]),
  },
  computed: {
    ...mapState('myjobs', [
      'status',
    ]),
  },
};
</script>
