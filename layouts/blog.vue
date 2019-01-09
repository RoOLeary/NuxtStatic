<template>
  <div>
    <globalnav />
        <transition name="fade">
        <div>My blog navigation bar here</div>
        </transition>
    <nuxt/>
  </div>
</template>

<script>
import Globalnav from '~/components/Globalnav.vue'
export default {
  components: {
      Globalnav
  }
}
</script>

