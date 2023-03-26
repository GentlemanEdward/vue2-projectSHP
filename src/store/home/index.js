import { reqThreeList } from '@/api';

const state = {
    threeListData: []
}
const mutations = {
    GETTHREELIST(state, data) {
        state.threeListData = data;
    }
}
const actions = {
    async getThreeList({ commit }) {
        let result = await reqThreeList();
        if (result.code == 200) {
            commit('GETTHREELIST', result.data)
        }
    }
}
const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}