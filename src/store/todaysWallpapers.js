import axios from 'axios';

const todaysWallpapers = {
  state: {
    todaysWallpapers: [],
  },
  mutations: {
    SET_TODAYS_WALLPAPERS_TO_STATE: (state, todaysWallpapers) => {
      state.todaysWallpapers = todaysWallpapers
    },
  },
  actions: {
    GET_TODAYS_WALLPAPERS_FROM_API({ commit }) {
      return axios('https://api.themoviedb.org/3/movie/popular?api_key=f0c018c1a27b48295e2ba8a0006611e0&language=en-US&page=1', {
        method: "GET"
      })
        .then(({ data }) => {
          commit('SET_TODAYS_WALLPAPERS_TO_STATE', data.results)
        })
        .catch((error) => {
          console.log(error);
          return error
        })
    },
  },
  getters: {
    todaysWallpapers: (state) => state.todaysWallpapers
  }
}

export default todaysWallpapers;