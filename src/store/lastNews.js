import axios from 'axios';

const lastNews = {
  state: {
    lastNews: [],
    categoryNews: '',
    isLoading: false,
  },
  mutations: {
    SET_LAST_NEWS_TO_STATE(state, lastNews) {
      state.lastNews = lastNews
    },
    CHANGE_CATEGORY_NEWS(state, category) {
      state.categoryNews = category
    },
    CHANGE_LOADING(state, value) {
      state.isLoading = value
    }
  },
  actions: {
    GET_LAST_NEWS_FROM_API({ commit }, category) {
      commit('CHANGE_LOADING', true)
      commit('CHANGE_CATEGORY_NEWS', category)
      return axios(`https://newsapi.org/v2/everything?q=${category}&from=2021-10-01&sortBy=popularity&apiKey=785f3390a46c4763ad6976cb77aeacca`, {
        method: "GET"
      })
        .then(({ data }) => {
          commit('SET_LAST_NEWS_TO_STATE', data.articles.slice(0, 3))
        })
        .catch((error) => {
          console.log(error);
          return error
        })
        .finally(() => {
          commit('CHANGE_LOADING', false)
        })
    },
  },
  getters: {
    lastNews: ({ lastNews }) => lastNews,
    categoryNews: ({ categoryNews }) => categoryNews,
    isLoading: ({ isLoading }) => isLoading
  }
}

export default lastNews;