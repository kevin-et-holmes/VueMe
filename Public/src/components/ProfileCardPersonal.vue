<template>
  <div class="profile">
    <!-- <img :src="profileImage" alt="Profile Picture" class="profile-image" /> -->
    <h2>{{ fullName }}</h2>
    <p>{{ bio }}</p>
    <ul>
      <li><strong>Email:</strong> {{ email }}</li>
      <li>
        <strong>Website:</strong> <a :href="website" target="_blank">{{ website }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    fullName: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      default: 'Software Developer'
    },
    email: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    },
    profileImage: {
      type: String,
      required: true
    }
  }
}
</script>
