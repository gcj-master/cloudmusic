
const state = {
    song:{
        al:{
            name:'刘德华',
            picUrl:''
        },
        name: '笨小孩'
    },  //初始化首歌曲的名字
    isPlay: false,
    classifySonger: {}
}
const getters = {
    //使用getter方法只能单方向获取state状态的数据，不能修改
    songDetail(state){
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
    SET_SONG(state,song){
        state.song = song;
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