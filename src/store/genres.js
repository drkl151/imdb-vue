import axios from 'axios';

const genres = {
  state: {
    genres: [],
  },
  mutations: {
    SET_GENRE_FILMS_TO_STATE: (state, genres) => {
      state.genres = genres
    },
  },
  actions: {
    GET_GENRE_FILMS_FROM_API({ commit }) {
      return axios('https://api.themoviedb.org/3/genre/movie/list?api_key=f0c018c1a27b48295e2ba8a0006611e0&language=en-US', {
        method: "GET"
      })
        .then(({ data }) => {
          commit('SET_GENRE_FILMS_TO_STATE', data.genres)
        })
        .catch((error) => {
          console.log(error);
          return error
        })
    }
  },
  getters: {
    genres: (state) => state.genres
  }
}

export default genres;
