import axios from 'axios';

const lastNews = {
  state: {
    lastNews: [],
  },
  mutations: {
    SET_LAST_NEWS_TO_STATE: (state, lastNews) => {
      state.lastNews = lastNews
    },
  },
  actions: {
    GET_LAST_NEWS_FROM_API({ commit }) {
      return axios('https://newsapi.org/v2/everything?q=(actors AND actresses)&from=2021-10-01&sortBy=popularity&apiKey=785f3390a46c4763ad6976cb77aeacca', {
        method: "GET"
      })
        .then(({ data }) => {
          commit('SET_LAST_NEWS_TO_STATE', data.articles.slice(0, 3))
        })
        .catch((error) => {
          console.log(error);
          return error
        })
    },
  },
  getters: {
    lastNews: (state) => state.lastNews
  }
}

export default lastNews;