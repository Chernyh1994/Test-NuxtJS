new Vuex.Store({
    state: () => ({
      counter: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    modules: {
      twits: {
        namespaced: true,
        state: () => ({
          list: []
        }),
        mutations: {
          add (state, { text }) {
            state.list.push({
              text,
              done: false
            })
          },
          remove (state, { twit }) {
            state.list.splice(state.list.indexOf(twit), 1)
          },
          toggle (state, { twit }) {
            twit.done = !twit.done
          }
        }
      }
    }
  })