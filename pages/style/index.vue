<template>
    <div class="cont flex flex-col mt-12">
        <div class="flex mt-10 py-2 px-4">
            <div class="w-full bg-white h-auto px-4 py-4" style="border: 1px solid black">
                <div data-aos="fade-up" data-aos-duration="4000">  
                    <h1 class="self-end text-black pt-16 pl-4 pb-4 text-5xl ">
                        THIS IS SOME TEXT
                    </h1>
                    <h2 class="text-black pl-5 pb-4 text-2xl ">
                        THIS IS ALSO SOME TEXT TO GO BENEATH THE LINE OF TEXT ABOVE<br>
                        AND <em>THIS</em> IS ALSO SOME TEXT TO GO BENEATH THE LINE OF TEXT ABOVE
                    </h2>
                </div>
            </div>
        </div>

        <!-- Two columns -->
        <div class="flex flex-wrap  px-4">
             
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-black p-12 text-white text-left">
                <div data-aos="fade-right" data-aos-duration="4000">  
                    <h1>Title</h1>
                    <br>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus veritatis, minima soluta est aut. Sunt quibusdam quaerat quae est voluptates exercitationem. Cum sequi nam porro exercitationem! Et, quis quibusdam?</p>
                </div> 
            </div>
            
           <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-red-dark p-12 text-left">
                <div data-aos="fade-left" data-aos-duration="4000">    
                    <h3>Title</h3>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus veritatis, minima soluta est aut. Sunt quibusdam quaerat quae est voluptates exercitationem. Cum sequi nam porro exercitationem! Et, quis quibusdam?</p>
                </div>
            </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="4000">
            <h1 class="pt-8 pb-2 px-4 text-5xl">WORK</h1>
        </div>

      
            <carousel :nav="false">
                <div @click="$store.commit('isStylin')">
                    {{ stylin ? 'SCHTYLIN' : 'PROFILIN'}}
                    <img src="https://placeimg.com/200/150/any?1">
                </div>
                <img src="https://placeimg.com/200/150/any?2">

                <img src="https://placeimg.com/200/150/any?3">

                <img src="https://placeimg.com/200/150/any?4">

                <img src="https://placeimg.com/200/150/any?3">

                <img src="https://placeimg.com/200/150/any?4">

            </carousel>
            
      

        
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
</template>

<script>

export default {

    head: {
        title: 'Style page'
    },
  
    data: () => {
        return {
        
        };
    },

    computed: {
        stylin () {
            return this.$store.state.isStylin
        }
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
</style>
