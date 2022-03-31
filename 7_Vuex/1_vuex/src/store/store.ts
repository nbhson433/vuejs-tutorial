import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      result: 0
    }
  },
  // không bind được 2 chiều bằng v-model
  getters: {
    tenItem: (state: any) => {
      return state.result * 10
    },
    nameItem: (state: any) => {
      return state.result + ' name production'
    }
  },
  mutations: {
    hundredItem: (state, n) => {
      state.result ++
    },
    setState: (state, payload) => {
      state.result = payload
    }
  },
  actions: {
    // xử lí được async & bind 2 chiều từ view vào store
    myAction: ({commit}) => {
      commit('hundredItem')
    },
    updateState: ({commit}, payload) => {
      commit('setState', payload)
    }
  }
})

export default store