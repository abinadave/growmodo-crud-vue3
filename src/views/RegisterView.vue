<script setup>
import { onMounted } from 'vue'
import { reactive } from 'vue'
import { useCounterStore } from '../stores'

const store = useCounterStore()

let Header = 'Registration Form'

const form = reactive({
  username: '',
  email: '',
  contact: '',
  password: '',
  password_confirmation: ''
})

onMounted(() => {
  console.log('LoginView is mounted')
  focusInput();
})

const focusInput = () => {
  setTimeout(() => {
    document.getElementById('username').focus()
  }, 350)
}

const onSubmit = async () => {
  // console.log('Submitting form')
  // console.log(form)
  const response = await store.registerUser(form);
  if (response.status === 201) {
    clearForm();
    focusInput();
  } else if (response.status == 422) {
    let errors = response.data.errors;
    console.log(errors);
    let errMessage = '';
    for (const [key, value] of Object.entries(errors)) {
      console.log(`${key}: ${value}`);
      errMessage += value + ' \n';
    }

    alert(errMessage)

    // console.log(response.data);
  }
}
const clearForm = () => {
  form.username = '';
  form.email = '';
  form.contact = '';
  form.password = '';
  form.password_confirmation = '';
}
</script>

<template>
  <div>
    <h3>{{ Header }}</h3>
    <hr />
    <br />
    <form @submit.prevent="onSubmit">
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-3 col-form-label">Username</label>
        <div class="col-sm-10">
          <input v-model="form.username" type="text" class="form-control" id="username" required />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-3 col-form-label">Email</label>
        <div class="col-sm-10">
          <input v-model="form.email" type="email" class="form-control" required />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-3 col-form-label">Phone Number</label>
        <div class="col-sm-10">
          <input v-model="form.contact" type="number" class="form-control" required />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
        <div class="col-sm-10">
          <input v-model="form.password" type="password" class="form-control" required />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-3 col-form-label">Confirm Password</label>
        <div class="col-sm-10">
          <input v-model="form.password_confirmation" type="password" class="form-control" required />
        </div>
      </div>
      <div>
        <button class="btn btn-success" type="submit">REGISTER</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
