import { createStore } from 'vuex'
import moviesPlayingNow from './moviesPlayingNow.js'
import genres from './genres.js'
import todaysWallpapers from './todaysWallpapers.js'
import popularActors from './popularActors.js'
import lastNews from './lastNews.js'
import search from './search.js'
import popularMovies from './popularMovies'

export default createStore({
  state: {
    screenSize: null,
  },

  mutations: {
    SET_CURRENT_SCREEN_SIZE_TO_STATE: (state, screenSize) => {
      state.screenSize = screenSize
    },
  },

  actions: {
  },

  getters: {
    screenSize: (state) => state.screenSize
  },

  modules: {
    moviesPlayingNow, genres, todaysWallpapers, popularActors, lastNews, search, popularMovies
  }
})
