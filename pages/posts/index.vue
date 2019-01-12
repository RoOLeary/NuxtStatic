<template>
  <div>
  <div class="container w-full mx-auto">
      <h1>ALL POSTS</h1>
      Example: 
   <div data-aos="fade-up" data-aos-duration="4000">
      <post />
    </div>
      <ul> 
        
          <li v-bind:key='post.uid' v-for='post in posts'>
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
                <nuxt-link :to="{ path: '/posts/' + post.id, params: {id: post.id, title: post.title } }">{{ post.title }}</nuxt-link>
            </div>
          </li>
        
      </ul>
     </div> 
  </div>
</template>

<script>
import Post from '~/components/Post.vue'
import axios from 'axios';
export default {
  head: { 
    title: 'POSTS'
  },
  
  data() {
    return {};
  },
  created(){
    this.allBlogPosts();
    console.log(this.allBlogPosts());
  },
  methods: {},
  computed: {
    allBlogPosts() {
      return this.$store.state.blogPosts;
    }
  },
  components: {
    Post
  }
  
}
</script>

<style scoped>

.container{
  background: black;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-flow: column;
}

li a {
  color: yellow;
}
</style>
