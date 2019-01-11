<template>
  <section class="container w-full mx-auto">
    <div>
      <div data-aos="zoom-in-up" data-aos-duration="4000">
        <logo />
      </div>
      <h1 class="title">
        nuxt-static
      </h1>
      <h2 class="subtitle">
        My exceptional Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <p>Fuckin' Sweeeet Meat - {{ meat }}</p>
      <nuxt-link to="/about">About page</nuxt-link>

      <h1>HERE!!!</h1>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
      <h1>ENDS</h1>

      <button @click="$store.commit('toggle')"><strong>{{ $store.state.isActive }}</strong></button>
      {{ blow ? '...that\'s a nice tnetennba' : 'Good morning...' }}
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Logo from '~/components/Logo.vue'

export default {
  data: () => {
    return{
      meat: 'THe meat that is so sweet',
      
    }
  },
  computed: {
    blow () {
        return this.$store.state.isActive
    }
    
  },
  head: {
    title: 'Home page'
  },
  
  components: {
    Logo
  }
}
</script>

<style>

/* .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */





 .container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} 

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
