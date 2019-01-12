<template>
  <div>
  <div class="container w-full mx-auto">
      <h1 class="text-white">ALL POSTS</h1>
      <p class="text-white">Example:  SOMETHING HERE</p>
      
      <ul> 
          <post v-for="post in posts" :key="post.slug" :title="post.title" :body="post.body" :path="post._path"/>
           
          <!-- <li v-bind:key='post.uid' v-for='post in posts'>
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
                <nuxt-link :to="{ path: '/posts/' + post.id, params: {id: post.id, title: post.title } }">{{ post.title }}</nuxt-link>
            </div>
          </li> -->
        
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
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/posts/', false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/posts/${key.replace('.json', '').replace('./', '')}`
    }));
    console.log(posts);
    return { posts };
  },

  created(){
    this.allBlogPosts();
   
  },
  methods: {
     allBlogPosts() {
       console.log('posts');
    }
  },
  computed: {
   
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
