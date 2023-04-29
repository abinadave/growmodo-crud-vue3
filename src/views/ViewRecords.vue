<script setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from '../stores'
import UserRecordsList from '@/components/UserRecordsList.vue'

const store = useCounterStore()
onMounted(async () => {
  let response = await store.fetchAllUsers()
  console.log(response)
})
</script>

<template>
  <main>
    <UserRecordsList />
  </main>
</template>
