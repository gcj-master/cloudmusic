
const state = {
    //推荐歌单
    playListMsg:{},
    playListSongs:[],
  

    //推荐专辑
    albumListMSG:{},
    albumListSongs:[]
}
const getters = {
    playListMsg(state){
        return state.playListMsg;
    },
    playListSongs(state){
        return state.playListSongs; 
    },

    albumListMSG(state){
        return state.albumListMSG;
    },
    albumListSongs(state){
        return state.albumListSongs;
    }
}
const mutations = {
    ADDTO_PLAYLIST(state,payload){
        state.playListMsg = payload;
        //console.log(state.playListMsg);
    },
    ADDTO_PLAYLISTSONGS(state,payload){
        state.playListSongs = payload.sourceData;
    },

    ADDTO_ALBUMLIST(state,payload){
        state.albumListMSG = payload;
        console.log(state.albumListMSG);
    },
    ADDTO_ALBUMLISTSONGS(state,payload){
        state.albumListSongs = payload;
        console.log(state.albumListSongs);
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