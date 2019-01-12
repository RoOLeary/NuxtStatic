<template>
  <div>
    <no-ssr>
      <div class="container mx-auto postsindex mt-32">
        <h1 class="text-5xl">{{ title }}</h1>
        <br>
        <p><img src="https://placehold.it/550x350" alt="placeholder" style="width: 760px"/></p>
        <p><strong>{{ date }}</strong></p>
        <div class="flex flex-wrap">
            <div class="sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-2 py-8"></div> 
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-2 p-8 text-left">
                <p class="leading-normal">{{ body }}</p>
                <br>
                <nuxt-link to='/posts' class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded no-underline">Back to Posts</nuxt-link>  
            </div> 
            <div class="sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-2 p-8"></div> 
          </div>
      </div>
    </no-ssr>
  </div>
</template>


<script>
export default {
  async asyncData({ params }) {
    let post = await import('~/content/posts/' + params.slug + '.json');
    console.log(post)
    return post;
  }
};
</script>


<style scoped>

  .container{
      background: #fff;
      min-height: 100vh;
      min-width: 100vw;
  }

  h1, a{
    font-weight: bold;
  }
  .single-post{
    display: flex; 
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
  }
</style>
