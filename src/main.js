import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useCounterStore } from '@/stores'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

axios.defaults.baseURL = 'http://laravelcrudapi.laravel/api'

const app = createApp(App)

app.use(createPinia())
app.use(router)
const store = useCounterStore()
app.mount('#app')

if (sessionStorage.getItem('token')) {
  store.fetchUserViaBearerToken(sessionStorage.getItem('token'))
}
