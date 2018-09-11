import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import play from './play'
import recommend from './recommend'

const state = {
    //顶部导航切换高亮
    TopNavIndex: 1,
    //Discovery栏目下子栏目导航切换高亮
    MiddleNavIndex: 0,
    //保存Discovery栏目下上一次浏览的子栏目的路由名
    DiscoveryColumnRouterName:''
}
const getters = {

}
const mutations = {
    TOPNAVTOGGLE(state,payload){
        state.TopNavIndex = payload.selectedIndex;
    },
    MIDDLENAVTOGGLE(state,payload){
        
        state.MiddleNavIndex=payload.selectedIndex;
    },
    DiscoveryColumnRouterName(state,payload){
        state.DiscoveryColumnRouterName=payload.routerName;
    }
}
const actions = {

}
const modules = {
    play,
    recommend
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})