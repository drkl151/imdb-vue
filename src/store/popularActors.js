import axios from 'axios'

const popularActors = {
  state: {
    popularActors: [],
  },
  mutations: {
    SET_POPULAR_ACTORS_TO_STATE: (state, popularActors) => {
      state.popularActors = popularActors
    }
  },
  actions: {
    GET_POPULAR_ACTORS_FROM_API({ commit }) {
      const getRandomPage = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const actors = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/person/popular?api_key=f0c018c1a27b48295e2ba8a0006611e0&language=en-US&page=${getRandomPage(1, 20)}`,
      };

      axios.request(actors).then(function (response) {
        const randomPopularActors = [];

        for (let i = 0; i < 5; i++) {
          let idx = Math.floor(Math.random() * response.data.results.length);
          randomPopularActors.push(response.data.results[idx]);
          response.data.results.splice(idx, 1);
        }
        commit('SET_POPULAR_ACTORS_TO_STATE', randomPopularActors)
      }).catch(function (error) {
        console.error(error);
      });

    }
  },
  getters: {
    popularActors: (state) => state.popularActors
  },
}

export default popularActors