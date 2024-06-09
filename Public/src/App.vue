<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
import axios from 'axios'

export default {
  beforeMount() {
    this.refreshProfiles()
  },
  methods: {
    refreshProfiles() {
      axios.post('http://localhost:3000/profile/refresh').then((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>

<template>
  <body>
    <header>
      <nav>
        <div class="navLeft">
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/profile">Profile</RouterLink>
        </div>
        <div class="navRight">
          <RouterLink to="/login">Login</RouterLink> |
          <RouterLink to="/register">Register</RouterLink>
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
