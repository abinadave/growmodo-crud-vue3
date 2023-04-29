<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  isLoggedIn: {
    type: Boolean,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <div v-if="isLoggedIn">
      <!-- <span>isAdmin: {{ isAdmin }}</span> -->
      <h3 class="text-primary" v-if="isAdmin">Welcome back Admin!</h3>
      <h3 class="text-primary" v-else>Welcome Guest</h3>
    </div>
    <div v-else>
      <h1 class="green">{{ msg }}</h1>
      <h4>
        CRUD Task for Growmodo built using
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vue.js 3</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Laravel 9x</a>.
      </h4>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
