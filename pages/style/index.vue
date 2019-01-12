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
                    
                    
                    <div v-for="post in portfolio" :key="post.slug" @click="$store.commit('isStylin')" v-bind:class="[ stylin ? 'border border-red' : '']">
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
        
       

        <div class="flex flex-wrap py-2 px-4 mx-auto w-full">
            <div class="max-w-md w-full lg:flex" v-for="post in posts" :key="post.slug">
                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">
                </div>
                <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                    <p class="text-sm text-grey-dark flex items-center">
                        <svg class="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div class="text-black font-bold text-xl mb-2">{{post.title}}</div>
                    <p class="text-grey-darker text-base">{{ post.excerpt }}</p>
                    </div>
                    <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink">
                    <div class="text-sm">
                        <p class="text-black leading-none">Jonathan Reinink</p>
                        <p class="text-grey-dark">Aug 18</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
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
        const portfolio = context.keys().map(key => ({
        ...context(key),
        _path: `/portfolio/${key.replace('.json', '').replace('./', '')}`
        }));
        console.log(portfolio);

        return { 
            portfolio,
            title: 'POSTS',
            posts: this.$store.state.posts 
        }
    },

    created(){
        this.allBlogPosts();
    },
    
    methods: {
        allBlogPosts() {
        this.$store.commit('getPosts');
        }
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
