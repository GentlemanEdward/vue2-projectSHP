import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        home,
        search
    }
})

export default store