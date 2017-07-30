//引入相关文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义初始化变量
const state = {
  first:'热点',
  focus:'关注',
  program:'栏目 '
}

//定义动作 事件处理方法
const mutations = {
  changeTitle(state,status){
    state.first = status[0];
    state.focus = status[1];
    state.program = status[2];
  },
  
}

//对外的事件方法
const actions = {
  changeTitle:({commit},status)=>commit('changeTitle',status)
}

const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
