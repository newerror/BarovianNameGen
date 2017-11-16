<template lang="pug">
  v-app(dark)
    Drawer
    AppNavigation
    v-content
      router-view
    AppFooter
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppNavigation from '@/components/AppNavigation'
import Drawer from '@/components/Drawer'

export default {
  components: {
    AppFooter,
    AppNavigation,
    Drawer
  }
}
</script>

<style lang="stylus">
#app
  background url('/static/images/backgrounds/dark_embroidery.png') fixed
  font-family 'EB Garamond', serif

.application a
  color #f44336
</style>
