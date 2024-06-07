<template>
  <header>
    <div>
      <ProfileCard
        fullName="Kevin Holmes"
        email="kevinholmes921@gmail.com"
        website="https://github.com/kevin-et-holmes"
      />
    </div>
  </header>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'

export default {
  name: 'ProfileView',
  components: {
    ProfileCard
  }
}
</script>
