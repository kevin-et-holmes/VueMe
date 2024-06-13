<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
import axios from 'axios'
const id = sessionStorage.getItem('id')
const username = sessionStorage.getItem('username')
export default {
  data() {
    return {
      sessionKey: 0
    }
  },
  // beforeMount() {
  //   this.refreshProfiles()
  // },
  methods: {
    refreshProfiles() {
      axios.post('http://localhost:3000/profile/refresh').then((response) => {
        console.log(response.data)
      })
    },
    logout() {
      this.sessionKey -= 1
      sessionStorage.clear()
    }
  }
}
</script>

<template>
  <body>
    <header>
      <nav>
        <div class="navLeft"><RouterLink to="/">Home</RouterLink></div>
        <div v-if="id" class="navRight" :key="sessionKey">
          <RouterLink :to="username">Profile</RouterLink> |
          <RouterLink to="/" @click.prevent="logout">Logout</RouterLink>
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
