<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores'
import { RouterLink, RouterView } from 'vue-router'
const store = useCounterStore()

import HelloWorld from './components/HelloWorld.vue'
let isLoggedIn = computed(() => store.isLoggedIn)
let isAdmin = computed(() => store.isAdmin)
</script>

<template>
  <header>
    <!-- <p>isLoggedIn: {{ isLoggedIn }}</p> -->
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :is-admin="isAdmin" :is-logged-in="isLoggedIn" msg="CRUD" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-show="!isLoggedIn" to="/login">Login</RouterLink>
        <RouterLink v-show="!isLoggedIn" to="/register">Register</RouterLink>
        <RouterLink v-show="isLoggedIn" to="/logout">Logout</RouterLink>
        <RouterLink v-show="isLoggedIn && isAdmin" to="/view/records">View Records</RouterLink>
        <RouterLink v-show="isLoggedIn && !isAdmin" to="/view/unsubscribe">Unsubscribe</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
