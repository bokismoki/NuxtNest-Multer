export const state = () => ({
    images: []
})

export const getters = {
    images: state => state.images
}

export const mutations = {
    SET_IMAGES: (state, payload) => {
        state.images = payload
    },
    ADD_IMAGE: (state, payload) => {
        state.images.push(payload)
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }, { $axios }) {
        await $axios.get('/image')
            .then(response => {
                dispatch('setImages', response.data)
            }).catch(err => {
                console.error(err)
            })
    },
    setImages: ({ commit }, payload) => {
        commit('SET_IMAGES', payload)
    },
    addImage: ({ commit }, payload) => {
        commit('ADD_IMAGE', payload)
    }
}