import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    modalStus: false,
    ReplyObj:{}
}

// 定义所需的 mutations
const mutations = {
    SET_ModalStus(val,stus) {
        state.modalStus = stus;
		localStorage.modalStus=stus;
    },
    SET_RePlayObj(val,stus){
    	state.ReplyObj = stus;
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})