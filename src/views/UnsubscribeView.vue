<script setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores'
import router from '@/router'

const store = useCounterStore()
const Header = ref('Unsubscribing....')
onMounted(() => {
  console.log('mounted UnsubscribeView')
})
</script>

<template>
  <div>
    <div class="text-center">
      <h1>{{ Header }}</h1>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
