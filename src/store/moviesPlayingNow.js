import axios from 'axios';

const moviesPlayingNow = {
  state: {
    moviesPlayingNow: [],
  },
  mutations: {
    SET_FILMS_TO_STATE: (state, moviesPlayingNow) => {
      state.moviesPlayingNow = moviesPlayingNow
    },
  },
  actions: {
    GET_FILMS_FROM_API({ commit }) {
      return axios('https://api.themoviedb.org/3/movie/now_playing?api_key=f0c018c1a27b48295e2ba8a0006611e0&language=en-US&page=1', {
        method: "GET"
      })
        .then(({ data }) => {
          commit('SET_FILMS_TO_STATE', data.results)
        })
        .catch((error) => {
          console.log(error);
          return error
        })
    },
  },
  getters: {
    moviesPlayingNow: (state) => state.moviesPlayingNow
  }
}

export default moviesPlayingNow;
