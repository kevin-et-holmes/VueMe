<template>
  <div class="home">
    <div class="homeWelcome">
      <h1>Welcome to VueMe</h1>
      <p>VueMe is a social media platform built with Vue.js.</p>
    </div>
    <div class="homeBody">
      <form @submit.prevent="submitPost" class="homePostForm">
        <input type="text" id="post" v-model="newPost" placeholder="New Post" autocomplete="off" />
      </form>
      <div class="homePosts" v-if="posts.length > 0">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :username="post.username"
          :content="post.content"
          :date="post.date"
        />
      </div>
    </div>
  </div>
</template>

<script>
console.log('HomeView.vue')
import axios from 'axios'
import PostCard from '@/components/PostCard.vue'

const url = 'http://localhost:3000'

export default {
  beforeMount() {
    this.getPosts()
  },
  name: 'HomeView',
  components: {
    PostCard
  },

  data() {
    return {
      newPost: '',
      posts: []
    }
  },

  methods: {
    submitPost() {
      if (this.newPost.trim() !== '') {
        this.posts.push({
          id: this.posts.length + 1,
          content: this.newPost,
          date: new Date().toISOString()
        })
        this.newPost = ''
      }
    },
    getPosts() {
      console.log('getPosts')
      axios
        .get(`${url}/posts`)
        .then((response) => {
          console.log(response.data)
          this.posts = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.homeWelcome {
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.homeBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.homeBody .homePostForm {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  width: 100%;
}

.homeBody .homePostForm input:focus {
  outline: none;
}

.homeBody .homePostForm #post {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: transparent;
  border: 2px solid rgb(0, 189, 126);
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  font-size: 1.2em;
  color: white;
}

.homeBody .homePosts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
