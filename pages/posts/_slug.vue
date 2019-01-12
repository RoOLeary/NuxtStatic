<template>
  <div class="container">
    <div class="single-post">
        <h1>{{ title }}</h1>
        <p><strong>{{ date }}</strong></p>
        <p>{{ body }}</p>
        <nuxt-link to='/posts'>Back to Posts</nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ params }) {
    let post = await import('~/content/posts/' + params.slug + '.json');
    console.log(post)
    return post;
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
