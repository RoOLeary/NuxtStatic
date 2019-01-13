<template>
    <section class="home">
        <div class="container w-full mx-auto header">
            <div data-aos="fade-up" data-aos-duration="4000">  
                <h1 class="text-white pt-16 pl-4 pb-4 text-5xl ">
                    DANGER <span class="text-red">RO</span>
                </h1>
                <h2 class="text-white pl-5 pb-4 text-2xl ">
                    BUILDER OF INTERNETS, WEAVER OF THINGS DIGITAL
                </h2>
                <br>
                <button @click="$store.commit('gethigh')" class="bg-red hover:bg-red-dark text-white py-4 px-4">LEARN MORE</button>
                <button @click="$store.commit('gethigh')" class="bg-red hover:bg-red-dark text-white py-4 px-4">LATEST POSTS</button>

            </div>
        <br>
    </div>
    <div class="flex flex-col mx-auto">
        <div class="flex mt-2 mb-2 py-2 px-4">
            <div class="w-full bg-white h-auto px-4 pt-16 pb-2">
                <div data-aos="fade-up" data-aos-duration="4000">  
                    <h1 class="text-black text-center pl-4 pb-4 text-5xl ">
                        PLEASE ALLOW ME TO INT<span class="text-red">RO</span>DUCE MYSELF...
                    </h1>
                    <p class="text-black text-center pl-5 pb-4 text-2xl px-16 leading-loose">
                        ...I'm a multi disciplined web developer with 9 years (and counting...) professional experience.<br>
                        In actuality, I'm kind of like a web-dev "jack of <i>many</i> trades" - in that I know a little bit about loads of stuff, but my specialities are mainly in the area 
                        of CMS (i.e. PHP - Craft, WP, Laravel, Netlify) and javascript application development with Vue and occasionally React.
                    <p class="text-black text-center pl-5 pb-4 text-2xl px-16 leading-loose">
                        Welcome to my sort of portfolio, sort of rant-site. Previous iterations were always Craft, WP or (ugh) ExpressionEngine, but this one was
                        hand made with VueJS, Nuxt and the awesome Netlify</p>
                </div>
            </div>
        </div>

        <!-- Two columns -->
       
        <div data-aos="fade-down" data-aos-duration="4000">
            <h1 class="pt-8 pb-2 px-4 text-5xl text-center">BITS <span class="text-red">&&</span> PIECES...</h1>
            <h3 class="pt-8 pb-2 px-4 text-2xl text-center">Here are some of the organisations for whom I have worked</h3>
        </div>

        <div data-aos="fade-up" data-aos-duration="4000">
             <no-ssr>
                <carousel :dots="true" :nav="false" :responsive="{0:{items:1,nav:true},600:{items:3,nav:true}}">
                    
                    
                    <div v-for="post in portfolio" :key="post.slug" @click="$store.commit('isStylin')" v-bind:class="[ stylin ? 'border border-red' : '']">
                        <img :src="post.thumbnail">
                    </div>
                
                </carousel>
             </no-ssr>
        </div>
        <br><br>
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
         <div class="flex flex-col sm:flex-row w-full">
             
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-black p-12 text-white text-left">
                <div data-aos="fade-right" data-aos-duration="4000">  
                    <h1>Who The...?</h1>
                    <br>
                    <p class="text-white leading-normal bl">Hi, I'm Ronan, a Web Developer from Dublin, based in Amsterdam. I build websites using Craft, WordPress, Vue and other goodies.
                        When not coding, I'm either watching Liverpool FC, or thinking about coding.
                    </p>
                    <br>
                    <h3>Development</h3>
                    <br>
                    <p class="text-white leading-normal bl">I have developed websites, frameworks, apps and features for numerous Web Development agencies, Ad agencies, CMS providers, Event Companies and online media publications.
                        I have over 9 years experience in multi-faceted development and cross functional technical departments in some big-name players. Put it this way, a <strong>lot</strong> of people have seen my work.
                    </p>
                    <br>
                    <h3>Consultancy</h3>
                    <br>
                    <p class="text-white leading-normal bl">Part of the joy of this profession, is sharing the benefit of my experience with others....for a price. Maybe you need an assessment or consultation with someone who knows what they're doing and how to do it. Look no further, Ol' Danger Ro's got ya. <span class="text-2xl pt-4 align-middle">&#128521</span>
                    </p>

                </div> 
            </div>
            
           <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-red-dark p-16 text-center">
                
                <div data-aos="fade-left" data-aos-duration="4000">    
                    <h1 class="text-white text-center mb-8">People Say the Nicest Things...</h1>
                    <no-ssr>
                        <carousel :dots="true" :nav="false" :responsive="{0:{items:1,nav:true},600:{items:1,nav:true}}">
                            <div class="quote">
                                <blockquote class="tracking-wide leading-loose px-12 sm:px-4 "><em>“Ronan was a pleasure to deal with. He took the time to understand what our business, and developed a site which was the perfect solution for us. Ronan was professional, honest, and transparent from the word go. I would have no hesitation in ever recommending Ronan for any project” </em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote class="tracking-wide leading-loose px-12 sm:px-4 "><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote class="tracking-wide leading-loose px-12 sm:px-4 "><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote class="tracking-wide leading-loose px-12 sm:px-4 "><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote class="tracking-wide leading-loose px-12 sm:px-4 "><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote class="tracking-wide leading-loose px-12 sm:px-4 "><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote class="tracking-wide leading-loose px-12 sm:px-4 "><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                            <div class="quote">
                                <blockquote class="tracking-wide leading-loose px-12 sm:px-4 "><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, laboriosam nemo adipisci, voluptas commodi similique quis tempore a, ratione ipsa saepe provident earum est quidem?</em></blockquote>
                            </div>
                        </carousel>
                    </no-ssr>
                </div>
            </div>
        </div>
        <!-- Four columns -->
        <div data-aos="fade-down" data-aos-duration="4000">
            <h1 class="pt-12 pb-4 px-4 text-5xl text-center">MUSINGS, RANTS <span class="text-red">&&</span> MEANDERINGS...</h1>
        </div>
        <div class="sm:flex flex-wrap md:flex-no-wrap px-2 py-2">
            <div v-for="post, index in posts" :key="post.slug" v-if="index < 3" class="sm:w-full md:w-1/3 rounded overflow-hidden shadow-lg m-2">
                <img class="sm:w-full" src="http://www.fillmurray.com/800/490" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                    <p class="text-grey-darker text-base bl">
                    {{ post.excerpt }}
                    </p>
                    <br>
                    <nuxt-link :to="post._path" class="bg-red hover:bg-red-dark text-white py-2 px-2 rounded">Read...</nuxt-link>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#code</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#nuxt</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#vuejs</span>
                </div>
            </div>
        </div>

        
        <div class="flex flex-wrap">
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-red-dark px-16 py-16 ">
                <div data-aos="fade-right" data-aos-duration="4000">  
                    <h3 class="text-white text-3xl">Heard enough? Wanna grab a coffee?</h3>
                    <br>
                    <p class="text-white tracking-wide leading-tight">I am available to discuss Web Consultancy and Development services. Introductory chat is free as a dickie bird...then we'll talk.</p>
                </div>
            </div>
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-black p-8 pt-16">
                <p class="text-white text-1xl">Leave your email and a brief hint as to the subject, and I may or may not get back to you</p>
                <form class="w-full pt-4" name="contact" method="POST" data-netlify="true">
                    <div class="flex items-center border-b border-b-2 border-red-dark py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your Email Here..." name="email" aria-label="Full name">
                        <br>
                        <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your Message..." name="message" aria-label="Full name">
                        <br>
                        <button class="flex bg-red hover:bg-red-dark border-red hover:border-red-dark text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        SEND
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import ModalAdaptive from '~/components/Modal_Adaptive.vue'
import InputFocusModal from '~/components/Funny_Modal.vue'

export default {

    head: {
        title: 'Danger Ro'
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

blockquote{
    color: #fff; 
}
</style>

