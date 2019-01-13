<template>
  <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">        
      <div class="container mx-auto postsindex mt-32 flex-col">
        <h1>{{ title }}</h1>
        <br>
        
        <p><strong>{{ date | formatPostDate }}</strong><br>
        Posted by {{ author }}, our man in {{ profile.address.city }}</p>
        <br>
        <p><img src="https://www.fillmurray.com/550/300" alt="placeholder" style="width: 760px"/></p>
        
        <div class="flex self-center mx-auto">
            <div class="shergar md:w-1/4 lg:w-1/4 xl:w-1/4 mb-2 py-8"></div> 
            <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-2 p-8 text-left">
                <p class="leading-loose bl">{{ body }}</p>
                <br>
                <nuxt-link to='/' class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded no-underline">Home</nuxt-link>  
                <nuxt-link to='/posts' class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded no-underline">All Posts</nuxt-link>  
                <br><br><br>
               
                <h3>Sharing is Caring...</h3>
                <br>
                <no-ssr>  
                  <social-sharing url="https://vuejs.org/"
                    :title="title"
                    :description="excerpt"
                    :quote="excerpt"
                    hashtags="vuejs,javascript,framework"
                    twitter-user="ro_oleary"
                    inline-template
                    class="flex flex-row">
                      <div>
                        <network class="sm:w-full md:w-1/3 bg-facebook hover:bg-blue-dark text-white text-center font-bold py-2 px-4 mr-2 rounded no-underline nuxt-link-active" network="facebook">
                          <i class="fa fa-facebook"></i> 
                        </network>
                        <network class="sm:w-full md:w-1/3 bg-twitter hover:bg-blue-dark text-white text-center font-bold py-2 px-4 mr-2 rounded no-underline nuxt-link-active" network="twitter">
                          <i class="fa fa-twitter"></i> 
                        </network>
                        <network class="sm:w-full md:w-1/3 bg-linkedin hover:bg-blue-dark text-white text-center font-bold py-2 px-4 mr-2 rounded no-underline nuxt-link-active" network="linkedin">
                          <i class="fa fa-linkedin"></i> 
                        </network>
                    </div>
                  </social-sharing>
              </no-ssr>
            </div> 
            <div class="shergar md:w-1/4 lg:w-1/4 xl:w-1/4 mb-2 p-8"></div> 
        </div>  
    </div>
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
  @media all and (max-width: 960px){
    .shergar{
      display: none;
    }
  }

  .container.postindex{
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
