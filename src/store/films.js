const films = {
  state: {
    film: '12344'
  },
  mutations: {
    changeFilm(state, newFilm) {
      state.film = newFilm;
    }
  },
  actions: {
    setNewFilm({commit}, newFilm) {
      commit('changeFilm', newFilm)
      console.log(obj);
    }
  },
  getters: {
    film: (state) => state.film
  }
}

export default films;
