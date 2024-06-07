<template>
  <div class="postBody">
    <div class="indvPost">
      <a :href="username" class="username">
        {{ username }}
      </a>
      <div class="content">
        {{ content }}
        <p class="date">{{ date }}</p>
      </div>
    </div>
  </div>
</template>

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
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.homeBody .postBody {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 80%;
}
.homeBody .indvPost {
  border: 2px solid rgb(0, 189, 126);
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
}

.homeBody .indvPost .username {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 800;
}

.homeBody .indvPost .content {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  background-color: transparent;
  color: white;
}

.homeBody .date {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8em;
  padding-left: 5px;
}

.test {
  color: red;
}
</style>
