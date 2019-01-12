
export const strict = false
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      isActive: false,
      isStoned: true,
      isStylin: false,
      showMobileNav: false,
      modalOpen: false,
      navBg: false,
      posts: []
    }),
    mutations: {
      increment (state) {
        state.counter++
      },
      toggle (state){
        state.isActive =! state.isActive
      },
      gethigh (state){
        state.isStoned =! state.isStoned
      },
      toggleNav (state){
        state.showMobileNav =! state.showMobileNav
      },
      isStylin (state){
        state.isStylin =! state.isStylin
      },
      toggleModal (state){
        state.modalOpen =! state.modalOpen
      },
      scrollToggle (state){
        state.navBg =! state.navBg
      },
      getPosts(state){
        const context = require.context('~/content/posts/', false, /\.json$/);
        const posts = context.keys().map(key => ({
          ...context(key),
          _path: `/posts/${key.replace('.json', '').replace('./', '')}`
        }));
        console.log(state.posts);
        console.log(posts);

        state.posts = posts
      }
    }
  })
}

export default createStore