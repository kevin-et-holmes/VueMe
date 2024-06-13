<template>
  <header>
    <div>
      <ProfileCard :fullName="user.fullName" :username="user.username" :email="user.email" />
    </div>
  </header>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import axios from 'axios'

const url = 'http://localhost:3000/profile'

export default {
  async beforeMount() {
    this.getUser()
  },

  name: 'ProfileView',
  components: {
    ProfileCard
  },

  data() {
    return {
      user: {
        fullName: '',
        username: '',
        email: ''
      }
    }
  },

  methods: {
    getUser() {
      const urlUsername = this.$route.path
      axios
        .get(`${url}${urlUsername}`)
        .then((response) => {
          // console.log('response: ', response.data)
          this.user = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
