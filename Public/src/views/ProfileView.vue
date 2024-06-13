<template>
  <header>
    <div>
      <ProfileCard :fullName="user.fullName" :username="user.username" :email="user.email" />
    </div>
  </header>
  <!-- <div class="homePosts" v-if="posts.length > 0">
    <PostCard
      v-for="post in sortedPosts"
      :key="post.id"
      :id="post.id"
      :username="post.username"
      :content="post.content"
      :date="post.date"
    />
  </div> -->
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import axios from 'axios'

const url = 'http://localhost:3000/'

export default {
  async beforeMount() {
    this.getUser()
    this.getPosts()
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
      axios
        .get(`${url}profile${this.$route.path}`)
        .then((response) => {
          // console.log('response: ', response.data)
          this.user = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getPosts() {
      axios
        .get(`${url}posts${this.$route.path}`)
        .then((response) => {
          // console.log(response.data)
          this.posts = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
