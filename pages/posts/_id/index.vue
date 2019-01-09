<template>
  <div class="container">
    <div class="single-post">
        <h1>{{ post.title }}</h1>
        <p>id: {{ post.id }}</p>
        <p>{{ post.body }}</p>
        {{ this.$route.params.title }}
        <nuxt-link to='/posts'>Back to Posts</nuxt-link>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default{
  head: { 
    title: `SINGLE`
  },
  
  data(){
    return{
      post: []
    }
  }, 
  created () {
      this.loadPost();
  },

  methods: {
    loadPost(){
      console.log('go');
      axios.get(`http://jsonplaceholder.typicode.com/posts/` + this.$route.params.id )
        .then(response => {
            this.post = response.data
            //console.log(this.post);
        })
    }
  }
}
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
