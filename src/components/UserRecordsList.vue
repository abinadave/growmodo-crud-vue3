<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '../stores'
const store = useCounterStore()
const users = computed(() => store.users)
</script>

<template>
  <div>
    <h5>User Records List</h5>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Date registered</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td scope="row">{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.contact }}</td>
          <td>{{ user.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>
<style scoped>
th {
  font-weight: bolder;
}
</style>
