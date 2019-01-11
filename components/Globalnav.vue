<template>
  	<div data-aos="fade-in" data-aos-duration="6000">  
	  <nav v-bind:class="[navBg ? 'bg-white switcheroo' : 'bg-transparent hidey']" class="flex items-center justify-between flex-wrap py-6 px-2 fixed w-full z-10 pin-t">
		<div class="flex items-center flex-no-shrink text-black mr-6">
			<nuxt-link class="flex flex-row text-black no-underline hover:text-red-dark hover:no-underline nuxt-link-active items-center" to="/">
				<img class="starting-logo dark-version default-logo" alt="Ronan O'Leary" src="https://ronan-oleary.com/wp/wp-content/uploads/2017/06/rosenberg.png" srcset="https://ronan-oleary.com/wp/wp-content/uploads/2017/06/rosenberg.png 1x, https://ronan-oleary.com/wp/wp-content/uploads/2017/06/rosenberg.png 2x" style="height: 60px;">
			</nuxt-link>
		</div>

		<div class="block lg:hidden">
			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-gray mr-2" @click="$store.commit('toggleNav')">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>
        
		<div v-bind:class="[navOpen ? '' : 'hidden']" class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
                    <nuxt-link class="inline-block py-2 px-4 text-black no-underline" to="/">HOME</nuxt-link>
				</li>
				<li class="mr-3">
					<nuxt-link class="inline-block text-grey-dark no-underline hover:text-red-dark hover:text-underline py-2 px-4" to="/about">ABOUT</nuxt-link>
				</li>
				<li class="mr-3">
					<nuxt-link class="inline-block text-grey-dark no-underline hover:text-red-dark hover:text-underline py-2 px-4" to="/posts">POSTS</nuxt-link>
				</li>
				<li class="mr-3">
					<nuxt-link class="inline-block text-grey-dark no-underline hover:text-red-dark hover:text-underline py-2 px-4" to="/style">STYLE</nuxt-link>
				</li>
			</ul>
		</div>
	</nav>
	</div>
</template>



<script>
import { mapState } from 'vuex';
export default {
	data(){
		return {
			scrollPosition: null,
			navBg: false
		}
	},
  	methods: {
		updateScroll() {
			this.scrollPosition = window.scrollY
			if(this.scrollPosition > 250){
				this.navBg = true
			} else {
				this.navBg = false
			}
		},
		destroy() {
			window.removeEventListener('scroll', this.updateScroll)
		}
	},

	mounted() {
		window.addEventListener('scroll', this.updateScroll);
	},

    computed: {
        navOpen(){
			return this.$store.state.showMobileNav
		}
    }
}
</script>

<style>
.switcheroo{
	transition: all .5s ease-in-out;
	padding-left: 4rem;
    padding-right: 3rem;
	border-bottom: 1px solid #b8c2cc;
}
.hidey{
	transition: all .5s ease-in-out;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
	padding-left: 1.5rem;
}
</style>
