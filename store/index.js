import Vue from 'vue'
import Vuex from 'vuex'
// import USersTwit from './modules/usersTwit'

Vue.use(Vuex)

export const state = () => ({
    counter: 0
})
  
export const mutations = {
    increment (state) {
        state.counter++
    }
}