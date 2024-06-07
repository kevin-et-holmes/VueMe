<script>
export default {
  name: 'ProfileCard',
  props: {
    fullName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="profile">
    <!-- <img :src="profileImage" alt="Profile Picture" class="profile-image" /> -->
    <h2>{{ fullName }}</h2>
    <p>{{ username }}</p>
    <ul>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </div>
</template>
