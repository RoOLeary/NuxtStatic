<template>
    <section class="home">
        <div class="container w-full mx-auto header">
            <div data-aos="fade-up" data-aos-duration="4000">  
                <h1 class="text-white pt-16 pl-4 pb-4 text-5xl ">
                    JOLLY CARSON
                </h1>
                <h2 class="text-white pl-5 pb-4 text-2xl ">
                    BAD-ASS WEB DEVELOPER
                </h2>
                <br>
                <button @click="$store.commit('gethigh')" class="bg-red hover:bg-red-dark text-white py-4 px-4">LEARN MORE</button>

            </div>
        <br>
    </div>
    <div class="flex flex-col mx-auto">
        <div class="flex mt-2 mb-2 py-2 px-4">
            <div class="w-full bg-white h-auto px-4 py-4" style="border: 1px solid black">
                <div data-aos="fade-up" data-aos-duration="4000">  
                    <h1 class="text-black text-center pl-4 pb-4 text-5xl ">
                        PLEASE ALLOW ME TO INTRODUCE MYSELF...
                    </h1>
                    <h2 class="text-black text-center pl-5 pb-4 text-2xl ">
                        THIS IS ALSO SOME TEXT TO GO BENEATH THE LINE OF TEXT ABOVE<br>
                        AND <em>THIS</em> IS ALSO SOME TEXT TO GO BENEATH THE LINE OF TEXT ABOVE
                    </h2>
                </div>
            </div>
        </div>

        <!-- Two columns -->
       
        <div data-aos="fade-down" data-aos-duration="4000">
            <h1 class="pt-8 pb-2 px-4 text-5xl">WORK</h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="4000">
             <no-ssr>
                <carousel :dots="true" :nav="false" :responsive="{0:{items:1,nav:true},600:{items:6,nav:true}}">
                    
                    
                    <div v-for="post in posts" :key="post.slug" @click="$store.commit('isStylin')" v-bind:class="[ stylin ? 'border border-red' : '']">
                        <img :src="post.thumbnail">
                        <p>{{ post.title }}</p>
                    </div>
                
                </carousel>
             </no-ssr>
        </div>

        <no-ssr>
            <InputFocusModal />
        </no-ssr>
        <no-ssr>
            <ModalAdaptive scud="ah yeah go on"/>
        </no-ssr>

        <div class="w-1/4 text-center">
            <button
            class="btn"
            @click="$modal.show('dog-profile')">
            Circle
            </button>

            <button
            class="btn"
            @click="$modal.show('demo-login')">
            Adaptive
            </button>
        </div>
         <div class="flex flex-col sm:flex-row w-full px-4">
             
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-black p-12 text-white text-left">
                <div data-aos="fade-right" data-aos-duration="4000">  
                    <h1>Title</h1>
                    <br>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus veritatis, minima soluta est aut. Sunt quibusdam quaerat quae est voluptates exercitationem. Cum sequi nam porro exercitationem! Et, quis quibusdam?</p>
                </div> 
            </div>
            
           <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-red-dark p-12 text-left">
                
                <div data-aos="fade-left" data-aos-duration="4000">    
                    <h1>People Say the Nicest Things...</h1>
                    <no-ssr>
                        <carousel :dots="true" :nav="false" :responsive="{0:{items:1,nav:true},600:{items:1,nav:true}}">
                            <div class="quote">
                                <blockquote><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                        </carousel>
                    </no-ssr>
                </div>
            </div>
        </div>
        <!-- Four columns -->
        <div class="flex flex-wrap pt-2 px-4">
            <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-grey h-32 p-32"></div>
            <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-grey-light h-32 p-32"></div>
            <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-grey h-32 p-32"></div>      
        </div>

       

        <div class="flex flex-wrap py-2 px-4">
            <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-grey h-32 p-32"></div>
            <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-grey-light h-32 p-32"></div>
            <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-grey h-32 p-32"></div>
        </div>

        <div class="flex flex-row-reverse flex-wrap px-4">
            <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/2 mb-2 bg-grey p-8">1</div>
            <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-2 bg-grey-light p-8">2</div>
            <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-2 bg-grey p-8">3</div>
            <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-2 bg-grey-light p-8">4</div>
        </div>

        <div class="flex flex-wrap px-4">
            <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/2 mb-2 bg-grey p-8">1</div>
            <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-2 bg-grey-light p-8">2</div>
            <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-2 bg-grey p-8">3</div>
            <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-2 bg-grey-light p-8">4</div> 
        </div>
    </div>
    </section>
</template>

<script>
import ModalAdaptive from '~/components/Modal_Adaptive.vue'
import InputFocusModal from '~/components/Funny_Modal.vue'

export default {

    head: {
        title: 'Style page'
    },
  
    data() {
       // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/portfolio/', false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/portfolio/${key.replace('.json', '').replace('./', '')}`
    }));
    console.log(posts);
    return { posts };
    },

    computed: {
        stylin () {
            return this.$store.state.isStylin
        }
    },

    components: {
        ModalAdaptive,
        InputFocusModal
    }
}
</script>

<style> 



.cont{
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

.container.header{
  background-image: url('https://ronan-oleary.com/wp/wp-content/uploads/2017/02/he-ro.jpg');
  background-size: cover; 
  object-fit: fill;
  min-height: 100vh;
  min-width: 100vw;
  padding-top: 200px;
}
</style>
