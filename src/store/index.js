import { createStore } from 'vuex'
import moviesPlayingNow from './moviesPlayingNow.js'
import genres from './genres.js'
import todaysWallpapers from './todaysWallpapers.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moviesPlayingNow, genres, todaysWallpapers
  }
})
