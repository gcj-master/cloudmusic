
const state = {
    song:{
        al:{
            name:'许巍',
            picUrl:'https://p1.music.126.net/OHzbyGhLdNatFNExPNkD4Q==/6670737045790111.jpg'
        },
        name: '蓝莲花'
    },  //初始化首歌曲的名字
    isPlay: false,
    classifySonger: {}
}
const getters = {
    //使用getter方法只能单方向获取state状态的数据，不能修改
    song(state){
        return state.song;
    },
    isPlay(state){
        return state.isPlay;
    },
    classifySonger(state){
        return state.classifySonger;
    }
}
const mutations = {
    SET_SONG(state,payload){
        state.song = payload;   
    },
    SET_ISPLAY(state,payload){
        state.isPlay = payload;
    }
}
const actions = {

}

export default{
    state,
    getters,
    mutations,
    actions
}