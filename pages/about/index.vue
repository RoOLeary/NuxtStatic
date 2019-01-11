<template>
    <div class="container w-full mx-auto">
        <div>
             <transition name="slide">
                 <p v-if="!baked" class="text-white">{{ whichKind }}.</p>
            </transition>
            <br>
            <button @click="$store.commit('gethigh')" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">{{ baked ? '...baked' : 'Almost...' }}</button>
        <br>
        
        <p v-if="!baked" class="text-white">Flippin' Munted</p>
       
        <p><nuxt-link to="/" class="homelink">Go back to the Home page</nuxt-link></p>
         <p><nuxt-link to="/posts" class="balls">Ask M'Arse</nuxt-link></p>
        </div>
    </div>
</template>

<script>

export default {

  head: {
    title: 'About page'
  },
  layout: 'blog',
  computed: {
    baked () {
        return this.$store.state.isStoned
    }
  },
  data: () => {
    return{
      whichKind: 'Cheese is a kind of meat',
      stoned: 'munted'
    }
  },


}
</script>

<style scoped> 

.container{
  background: yellow;
  min-height: 100vh;
  min-width: 100vw;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
p{

 color: black; 
}
a{
  color: black; 
  text-decoration: none;
}
</style>
