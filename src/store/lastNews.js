import axios from 'axios';

const lastNews = {
  state: {
    lastNews: [],
    categoryNews: '',
    loaderLastNews: false,
  },
  mutations: {
    SET_LAST_NEWS_TO_STATE(state, lastNews) {
      state.lastNews = lastNews
    },
    CHANGE_CATEGORY_NEWS(state, category) {
      state.categoryNews = category
    },
    CHANGE_LOADING(state, value) {
      state.loaderLastNews = value
    }
  },
  actions: {
    GET_LAST_NEWS_FROM_API({ commit }, category) {
      commit('CHANGE_LOADING', true)
      commit('CHANGE_CATEGORY_NEWS', category)
      return axios(`https://newsapi.org/v2/everything?q=(${category} AND movie)&from=2021-10-01&sortBy=popularity&apiKey=785f3390a46c4763ad6976cb77aeacca`, {
        method: "GET"
      })
        .then(({ data }) => {
          commit('SET_LAST_NEWS_TO_STATE', data.articles.slice(0, 6))
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
    loaderLastNews: ({ loaderLastNews }) => loaderLastNews,
  }
}

export default lastNews;