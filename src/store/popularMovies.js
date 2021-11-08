import axios from 'axios'

const popularMovies = {
  state: {
    popularMovies: [],
    currentMovieId: null,
    loaderPopularMovies: false
  },

  mutations: {
    SET_DETALIS_MOVIES_TO_STATE: (state, popularMovies) => {
      state.popularMovies.push(popularMovies)
    },

    SET_CURRENT_MOVIE_ID_TO_STATE: (state, currentMovieId) => {
      state.currentMovieId = currentMovieId
    },

    CHANGE_LOADING(state, value) {
      state.loaderPopularMovies = value
    },
  },

  actions: {
    GET_POPULAR_MOVIES_FROM_API({ dispatch, commit }) {
      commit('CHANGE_LOADING', true)
      const movies = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=f0c018c1a27b48295e2ba8a0006611e0&language=en-US&page=6`,
      };

      axios.request(movies)
        .then(function ({ data }) {
          const movies = data.results.slice(0, 8).forEach((movie) => {
            dispatch('GET_MOVIE_TRAILER_FROM_API', movie);
          })
        }).catch(function (error) {
          console.error(error);
        });
    },

    GET_MOVIE_TRAILER_FROM_API({  dispatch }, movie) {
      return axios(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=f0c018c1a27b48295e2ba8a0006611e0&language=en-US `, {
        method: "GET"
      }).then(({ data }) => {
        dispatch('GET_DETALIS_FROM_API', { ...movie, trailers: data.results })
      }).catch((error) => {
        console.log(error);
      });
    },

    GET_DETALIS_FROM_API({ commit }, movie) {
      return axios(`https://api.themoviedb.org/3/movie/${movie.id}}?api_key=f0c018c1a27b48295e2ba8a0006611e0&language=en-US`, {
        method: "GET"
      }).then(({ data }) => {
        commit('SET_DETALIS_MOVIES_TO_STATE', { ...movie, detalis: data })
      }).catch((error) => {
        console.log(error);
      }).finally(() => { commit('CHANGE_LOADING', false) })
    },
  },
  getters: {
    popularMovies: (state) => state.popularMovies,
    currentMovieId: (state) => state.currentMovieId,
    loaderPopularMovies: (state) => state.loaderPopularMovies
  },
}

export default popularMovies