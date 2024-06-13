<script>
export default {
  name: 'PostCard',
  props: {
    content: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true,
      default: 'Anonymous'
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="postBody">
    <div class="indvPost">
      <div class="postHeader">
        <RouterLink v-if="username === 'Anonymous'" :to="'/'" class="username">
          {{ username }}
        </RouterLink>
        <RouterLink v-else :to="username" class="username">
          {{ username }}
        </RouterLink>
        <p class="date">{{ date }}</p>
      </div>
      <div class="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.postBody {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 80%;
}
.indvPost {
  border: 2px solid rgb(0, 189, 126);
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
}

.postHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  background-color: transparent;
}

.indvPost .username {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 800;
  padding: 0;
}

.indvPost .content {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  background-color: transparent;
  color: white;
}

.date {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8em;
  padding-left: 5px;
}

.test {
  color: red;
}
</style>
