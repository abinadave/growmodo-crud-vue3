<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useCounterStore } from '@/stores'
import router from '@/router'

const store = useCounterStore()
import axios from 'axios'
import NProgress from 'nprogress'

let Header = 'Login Form'
const loggedInUser = computed(() => store.loggedInUser)

let form = reactive({
  email: '',
  password: ''
})

onMounted(() => {
  console.log('LoginView is mounted')
  setTimeout(() => {
    document.getElementById('email').focus()
  }, 350)
})

const submitForm = () => {
  NProgress.start()
  axios
    .post('/login', form)
    .then(function (response) {
      let data = response.data
      if (response.status === 201) {
        sessionStorage.setItem('token', data.token)
        console.log(data)
        store.$patch({
          loggedInUser: data.user
        })
        setTimeout(() => {
          router.push({ name: 'home' })
        }, 450)
      } else {
        console.log(response.status)
      }

      NProgress.done()
    })
    .catch(function (error) {
      console.log(error.response)
      if (error.response.status === 401) {
        alert(error.response.data.message)
      }
      NProgress.done()
    })
}
</script>

<template>
  <div>
    <h3>{{ Header }}</h3>
    <hr />
    <br />
    <form @submit.prevent="submitForm">
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Username/Email</label>
        <div class="col-sm-10">
          <input v-model="form.email" type="text" class="form-control" id="email" autofocus />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input v-model="form.password" type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <button class="btn btn-primary" type="submit">LOGIN</button>
    </form>
  </div>
</template>

<style scoped>
.col-form-label {
  font-size: 12px;
}
</style>
