import assasinImg from '../assets/assassins-creed.png'
import fantasticBeasts  from '../assets/fantastic.png'

const films = {
  state: {
    films: [{
      title: 'Assassins Creed',
      genre: ['Action', 'adventure', 'fantasy','adventure', 'fantasy',],
      img: assasinImg,
      id: 1,
    },
    {
      title: 'Fantastic Beasts and Where to Find Them',
      genre: ['Adventure', 'family', 'fantasy'],
      img: fantasticBeasts,
      id: 2,
    }]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    films: (state) => state.films
  }
}

export default films;
