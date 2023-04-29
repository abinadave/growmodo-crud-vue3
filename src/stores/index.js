import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import NProgress from 'nprogress'
export const useCounterStore = defineStore('store', () => {
  const count = ref(0)
  const users = ref([])

  const loggedInUser = ref({
    email: '',
    username: '',
    contact: '',
    is_admin: '',
    id: 0
  })

  const doubleCount = computed(() => count.value * 2)
  const isAdmin = computed(() => {
    return loggedInUser.value.is_admin == 1 ? loggedInUser.value.is_admin : 0
  })
  const isLoggedIn = computed(() => {
    return loggedInUser.value.id > 0 ? true : false
  })
  const userName = computed(() => {
    return loggedInUser.value.id > 0 ? loggedInUser.value.username : ''
  })
  function increment() {
    count.value++
  }
  function fetchUserViaBearerToken(token) {
    axios
      .get('/user', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        loggedInUser.value = res.data
      })
      .catch((error) => {
        sessionStorage.setItem('token', null)
        alert('Invalid Credentials, Please sign-in!')
        console.log(error)
      })
  }

  async function fetchAllUsers(token) {
    try {
      NProgress.start()
      const response = await axios
        .get('/users', {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        })
        .then((res) => {
          let { data } = res
          users.value = data.users
          NProgress.done()
        })
        .catch((error) => {
          alert('Unable to fetch Users with given Credentials')
          console.log(error)
          NProgress.done()
        })
      return response
    } catch (error) {
      return error.response
    }
  }

  async function registerUser(form) {
    try {
      NProgress.start();
      const response = await axios.post('/user', form)
      NProgress.done();
      return response;
    } catch (error) {
      NProgress.done();
      return error.response
    }
  }

  return {
    count,
    doubleCount,
    increment,
    isAdmin,
    users,
    loggedInUser,
    fetchUserViaBearerToken,
    isLoggedIn,
    userName,
    fetchAllUsers,
    registerUser
  }
})
