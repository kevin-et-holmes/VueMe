<template>
  <header>
    <div>
      <ProfileCard
        fullName="Kevin Holmes"
        username="kevin-et-holmes"
        email="kevinholmes921@gmail.com"
      />
    </div>
  </header>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import axios from 'axios'

const urlUsername = window.location.href.split('/')[3]

export default {
  name: 'ProfileView',
  components: {
    ProfileCard
  },

  methods: {
    getUser() {
      axios
        .get(`/profile/${urlUsername}`)
        .then((response) => {
          console.log(response.data)
          // this.user = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
