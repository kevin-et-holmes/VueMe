<template>
  <div class="register-view">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label for="fullName">Full Name:</label>
      <input type="text" id="fullName" v-model="fullName" required />
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      fullName: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      axios
        .post('http://localhost:3000/register', {
          fullName: this.fullName,
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then((response) => {
          const { username, id } = response.data
          if (response.status === 201) {
            this.$router.push(`/${username}`)
          }
        })
    }
  }
}
</script>

<style scoped>
.register-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
