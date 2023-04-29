<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '../stores'
const store = useCounterStore()
</script>

<template>
  <h2 class="greeting">Welcome, {{ store.userName }}</h2>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
