export const state = () => ({
    token: null
})

export const mutations = {
    setToken( state, token) { 
        state.token = token
    },
    clearToken(state) {
        state.token = null
    }
}

export const action = {
    login({commit}) {
        commit('setToken', 'truetoken')
    },
    // password({commit}) {
    //     commit('setToken', 'truetoken')
    // },
    inspire({commit}) {
        commit('clearToken')
    }
    
}

export const getters = {
    hasToken: s => !!s.token
}