<template lang="pug">
  v-navigation-drawer(persistent absolute floating v-model='drawer' right app)
    v-container
      v-layout
        v-flex(xs12)
          v-card(flat id='About')
            v-btn(dark block class='hidden-md-and-up mb-3' v-if='drawer' @click.stop='closeDrawer') #[v-icon(left) close] close
            h4.display-1.mb-3 About this app
            p What you've got here is a simple random generator that spits out the names of folk you might encounter in Barovia&mdash;the location of the #[em Ravenloft] campaign setting for #[em Dungeons & Dragons]. It's totally random, except it also applies gendered patronymic suffixes (#[em ex:] "Martikov" for men, "Martikova" for women).
            p Hit me up on #[a(href='https://twitter.com/SnailShaman' target='_blank') Twitter] if you have any ideas for improving this app, names or cool features you think I should add, or if you just want to say hi.
            p Thanks for trying out my dumb little thing.
            .decorator.grey--text
    v-footer(fixed class='no-background')
      span 🖤 #[a(href='https://vuejs.org/' target='_blank') Vue.js]
      v-spacer
      span 👨‍💻 #[a(href='https://github.com/newerror/BarovianNameGen' target='_blank') </> on Github ]
</template>

<script>
export default {
  computed: {
    drawer: {
      get () {
        return this.$store.getters.drawer
      },
      set () {
        return false
      }
    }
  },
  methods: {
    closeDrawer () {
      return this.$store.dispatch('switchDrawer')
    }
  }
}
</script>

<style lang="stylus" scoped>
aside
  font-size 1.2em

aside a
  color #f44336

.decorator
  text-align center

.decorator:before
  content '🙞🙤 🙦🙜'

.no-background span a
  color white

.no-background
  background none
</style>
