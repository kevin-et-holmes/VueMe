<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <body>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/profile">Profile</RouterLink>
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
}
</style>
