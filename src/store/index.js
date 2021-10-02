import { createStore } from 'vuex'
import moviesPlayingNow from './moviesPlayingNow.js'
import genres from './genres.js'
import todaysWallpapers from './todaysWallpapers.js'
import popularActors from './popularActors.js'
import lastNews from './lastNews.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moviesPlayingNow, genres, todaysWallpapers, popularActors,lastNews
  }
})
