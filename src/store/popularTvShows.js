import axios from 'axios'

const popularTvShows = {
  state: {
    popularTvShows: [],
  },
  mutations: {
    SET_POPULAR_TV_SHOWS_TO_STATE: (state, popularTvShows) => {
      state.popularTvShows = popularTvShows
    }
  },
  actions: {
    GET_POPULAR_TV_SHOWS_FROM_API({ commit }) {
      const getRandomPage = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const tvShows = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/top_rated?api_key=f0c018c1a27b48295e2ba8a0006611e0&language=en-US&page=${getRandomPage(1, 20)}`,
      };

      axios.request(tvShows).then(function (response) {
        const randomPopularTvShows = response.data.results
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);
          console.log(randomPopularTvShows);
        commit('SET_POPULAR_TV_SHOWS_TO_STATE', randomPopularTvShows)
      }).catch(function (error) {
        console.error(error);
      });

    }
  },
  getters: {
    popularTvShows: (state) => state.popularTvShows
  },
}

export default popularTvShows