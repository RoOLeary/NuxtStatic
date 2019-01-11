
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
      }
    }
  })
}

export default createStore