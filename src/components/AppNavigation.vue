<template lang="pug">
  v-toolbar(dense app)
    v-toolbar-title 🙞🙤 Barovian Name Generator 🙦🙜
    v-spacer
    v-btn(flat @click.stop='switchDrawer') #[v-icon(left) {{chevron}}] About
</template>

<script>
export default {
  computed: {
    chevron () {
      const drawer = this.$store.getters.drawer
      if (drawer) {
        return 'chevron_right'
      }
      return 'chevron_left'
    }
  },
  methods: {
    switchDrawer () {
      return this.$store.dispatch('switchDrawer')
    }
  }
}
</script>

<style lang="stylus" scoped>
.toolbar__title
  font-family 'Berkshire Swash', cursive
</style>
