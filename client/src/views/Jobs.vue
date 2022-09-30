<template>
  <v-container>
    <v-layout>
      <v-flex xs15 >
        <Jobs></Jobs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import Jobs from '@/components/Jobs.vue';
import router from '../router';

export default {
  components: {
    Jobs,
  },
  mounted() {
    
  },
  computed: {
  },
};
</script>
