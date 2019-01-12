<template>
  <div class="container">
    <div class="single-post">
        <h1>{{ post.title }}</h1>
        <p>id: {{ post.id }}</p>
        <p v-html="post.body" />
        {{ this.$route.params.title }}
        <nuxt-link to='/posts'>Back to Posts</nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  head: function() {
    return {
      title: `${this.post.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      post: (await app.$content("/posts").get(route.path)) || payload
    };
  }
};
</script>


<style scoped>

  .container{
      background: darkred;
      min-height: 100vh;
      min-width: 100vw;
  }

  h1, p, a{
    color: #fff;
    font-weight: bold;
  }
  .single-post{
    display: flex; 
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
  }
</style>
