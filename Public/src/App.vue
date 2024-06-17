<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
import axios from 'axios'
const id = localStorage.getItem('id')
const username = localStorage.getItem('username')
export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  // beforeMount() {
  //   this.refreshProfiles()
  // },
  mounted() {
    if (id) {
      this.isLoggedIn = true
    }
  },
  methods: {
    refreshProfiles() {
      axios.post('http://localhost:3000/profile/refresh').then((response) => {
        console.log(response.data)
      })
    },
    logout() {
      localStorage.clear()
      this.isLoggedIn = false
    }
  }
}
</script>

<template>
  <body>
    <header>
      <nav>
        <div class="navLeft"><RouterLink to="/">Home</RouterLink></div>
        <div v-if="isLoggedIn" class="navRight">
          <RouterLink :to="username">Profile</RouterLink> |
          <RouterLink to="/" @click="logout">Logout</RouterLink>
        </div>
        <div v-else class="navRight">
          <RouterLink to="/register">Register</RouterLink> |
          <RouterLink to="/login">Login</RouterLink>
        </div>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </body>
</template>

<style scoped>
@import 'src/assets/main.css';

body {
  margin: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 60%;
}

header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
}

nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
}
</style>
