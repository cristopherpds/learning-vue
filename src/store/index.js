import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  mutations: {
    setCharacters(state, payload){
      state.characters = payload;
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload;
    },
  },
  actions: {
    async getCharacters({commit}){
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
