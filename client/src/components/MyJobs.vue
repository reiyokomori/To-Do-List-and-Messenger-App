<template>
  <Panel title="My Posts">
    <div
      class="job mt-2"
      v-for="job in myjobs.slice().reverse()"
      :key="job.id">
      <span>User: {{users[job.user_id-1].username}}<br>Date: {{job.updated_at}} </span>
      <v-spacer></v-spacer>
      <EditableRecord
        :isEditMode="job.isEditMode"
        :title="job.description"
        @onInput="setJobDescription({
          job,
          description: $event,
        })"
        @onEdit="setEditMode(job)"
        @onSave="saveJob(job)"
        @onDelete="deleteJob(job)"
      />

    </div>
  </Panel>
</template>

<script>
import {mapMutations,mapState,mapActions} from 'vuex';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  mounted() {
    this.fetchMyJobs();
    this.fetchUsers();
  },
  components: {
    EditableRecord,
  },
  computed: {
    ...mapState('myjobs', [
      'myjobs',
      'users',
    ]),
  },
  methods: {
    ...mapMutations('myjobs', [
      'setEditMode',
      'setJobTitle',
      'setCurrentJob',
      'setJobDescription',
    ]),
     ...mapActions('myjobs', [
      'fetchMyJobs',
      'fetchUsers',
      'saveJob',
      'deleteJob',
    ]),
  },
};
</script>

<style>
.myjob {
  font-size: 15px;
}

.icon {
  cursor: pointer;
}

.icon:hover {
  color: #333;
}
</style>
