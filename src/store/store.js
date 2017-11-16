import Vue from 'vue'
import Vuex from 'vuex'

import NameGenerator from '../generators/NameGenerator'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    ui: {
      drawer: false
    },
    names: []
  },
  getters: {
    drawer (state) {
      return state.ui.drawer
    },
    names (state) {
      return state.names
    }
  },
  mutations: {
    addName (state, payload) {
      state.names.push(payload)
    },
    switchDrawer (state) {
      state.ui.drawer = !state.ui.drawer
    }
  },
  actions: {
    addName ({commit}) {
      const namer = new NameGenerator()
      const name = namer.generate('random')
      return commit('addName', name)
    },
    switchDrawer ({commit}) {
      return commit('switchDrawer')
    }
  }
})
