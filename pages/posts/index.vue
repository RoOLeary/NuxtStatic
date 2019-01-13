<template>
  <div>
    
  <div class="container w-full mx-auto mt-24 flex-col">
      <h1 class="text-white">ALL {{ title }}</h1>
      <p class="text-white">Example:  SOMETHING HERE</p>
      
      <ul> 
          <!-- <post v-for="post in posts" :key="post.slug" :title="post.title" :body="post.body" :path="post._path"/>
            -->
         <li v-bind:key='post.uid' v-for='post in posts'>
            
                <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
         </li>
         
      </ul>
     </div> 
  </div>
</template>

<script>
import Post from '~/components/Post.vue'
import axios from 'axios';
export default {
  layout: 'blog',
  head: { 
    title: 'POSTS'
  },
  
  data() {
    
    return { 
      title: 'POSTS',
      posts: this.$store.state.posts
    };
  },

  created(){
    this.allBlogPosts();
  },
  
  methods: {
     allBlogPosts() {
       this.$store.commit('getPosts');
    }
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
