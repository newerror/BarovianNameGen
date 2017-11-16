<template lang="pug">
  v-container(fluid fill-height)
    v-layout(justify-center align-center)
      v-flex(xs12 md8 lg4)
        v-card
          v-card-text(class='text-xs-center')
            h4.display-1.mt-3.text-xs-center Names from the land of Barovia

            p.headline.my-3.grey--text 🙞🙤 🦇🧛‍🦇 🙦🙜

            v-btn(color='red darken-4' dark class='mb-4' @click='addName') ☙ New Name ❧

            ul
              li(v-for='name in sortedNames' :key='sortedNames.indexOf(name)')
                div #[span(class='name') {{name.full}}] #[span(class='emoji') {{name.emoji}}]
            
            .decorator.title.mt-3.mb-5.grey--text(v-show='sortedNames.length > 0')

            p.body-1.mt-5 Names are from the #[a(href='https://www.amazon.com/Curse-Strahd-Dungeons-Sourcebook-Supplement/dp/0786965983' target='_blank' class='grey--text') Curse of Strahd] Sourcebook, with a handful of my own thrown in for fun.
</template>

<script>
export default {
  computed: {
    sortedNames () {
      const names = this.$store.getters.names

      return names.slice(0).reverse() // returns a shallow copy to avoid flip-flopping the original
    }
  },
  methods: {
    addName () {
      return this.$store.dispatch('addName')
    }
  }
}
</script>


<style lang="stylus" scoped>
h4
  font-family 'Berkshire Swash', cursive

ul
  list-style none

li
  color #666
  font-size 1.75em
  line-height 1.8
  display grid
  grid-template-columns 1fr auto 1fr
  grid-gap 20px
  align-items center

li:before, li:after
  background rgba(255, 255, 255, 0.12)
  display block
  height 1px
  width 100%
  content ''

li:first-of-type
  color white

.name
  font-style italic

.decorator
  text-align center

.decorator:before
  content '🙞🙤 🙦🙜'
</style>
