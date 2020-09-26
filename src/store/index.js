import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photosData: null,
  },
  mutations: {
    setPhotosData(state, json) {
      state.photosData = json
    },
    updatePhotos(state, obj) {
      state.photosData.map(v => v.id += 1)
      state.photosData.unshift(obj)

    }
  },
  actions: {
    async fetchImgs(ctx) {
      await fetch(
        'https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10'
      )
        .then(data => data.json())
        .then(json => ctx.commit('setPhotosData', json))

    },

    createImg(ctx, obj) {
      ctx.commit('updatePhotos', obj)
    }
  },

  modules: {
  }
})
