export default {
    state: {
        favourites: []
    },
    mutations: {
        UPDATE_FAVOURITES(state, payload) {
            state.favourites = payload
        }
    },
    actions: {
        addToFavorites(context, payload) {
            const favourites = context.state.favourites
            favourites.push(payload)
            context.commit('UPDATE_FAVOURITES', favourites)
        }
    },
}
