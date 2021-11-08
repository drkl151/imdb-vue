import axios from 'axios'

const searchResults = {
  state: {
    searchResults: [],
  },

  mutations: {
    SET_SEARCH_RESULTS_TO_STATE: (state, searchResults) => {
      state.searchResults = searchResults
    }
  },

  actions: {
    GET_SEARCH_RESULTS_FROM_API({ commit }, valueSearchInput) {
      return axios(`https://api.themoviedb.org/3/search/movie?api_key=f0c018c1a27b48295e2ba8a0006611e0&language=en-US&query=${valueSearchInput}&page=1&include_adult=false `, {
        method: "GET"
      }).then(({ data }) => {
        commit('SET_SEARCH_RESULTS_TO_STATE', data.results[0])
      }).catch((error) => {
        console.log(error);
        return error
      })
    },
  },

  getters: { searchResults: (state) => state.searchResults },
}

export default searchResults