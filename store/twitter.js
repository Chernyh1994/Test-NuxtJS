export const state = () => ({
    twitter: []
})

export const mutations = {
    settwitter( state, twitter) { 
        state.uesrs = twitter
    }
}

export const action = {
    async fetch({commit}){
        const twitter = await(twitter)
    }
}