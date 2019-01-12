<template>
    <div>
        <div class="max-w-md w-full lg:flex">
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
                <div class="text-black font-bold text-xl mb-2">{{ title }}</div>
                <p class="text-grey-darker text-base">{{ body }}</p>
                </div>
                <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src="https://ronan-oleary.com/wp/wp-content/uploads/2017/06/rosenberg.png" alt="Avatar of Jonathan Reinink">
                <div class="text-sm">
                    <p class="text-black leading-none">Danger Ro</p>
                    <p class="text-grey-dark">Jan 12</p>
                </div>
                </div>
                <nuxt-link :to="path">
                    Full Text
                </nuxt-link>
                 
            </div>
        </div>        
    </div>
</template>

<script>
export default {
  props: ['title', 'body', 'path'], 
  data(){
      return{
          title: this.$props.title,
          body: this.$props.body,
          path: this.$props.path,
      }
  }
}
</script>

