
const state = {
    song:{
        al:{
            name:'许巍',
            picUrl:'https://p1.music.126.net/dX1pzxz6xLAn9abNXLBSYA==/1754820557936023.jpg'
        },
        songMp3:'',
        name: '空谷幽兰'
    },  //初始化首歌曲的名字
    isplay:false,
    songMp3:"",
    classifySonger: {},
    isShow:false, //播放页面的显示和隐藏
    collection:[],
    collectionIcon:false
}
const getters = {
    //使用getter方法只能单方向获取state状态的数据，不能修改
    song(state){
        return state.song;
    },
    songMp3(state){
        return state.songMp3;
    },
    isplay(state){
        return state.isplay;
    },
    classifySonger(state){
        return state.classifySonger;
    },
    isShow(state){
        return state.isShow;
    },
    collection(state){
        return state.collection;
        console.log(state.collection);
    },
    collectionIcon(state){
        return state.collectionIcon;
    }
   
}
const mutations = {
    SET_SONG(state,payload){  
        state.song = payload; 
        console.log(payload);
    },
    SET_ISPLAY(state,payload){
        state.isplay = payload;
    },
    SET_SONGMAP3(state,payload){
        state.songMp3 = payload;
        console.log(state.songMp3);
    },
    SET_ISSHOW(state,payload){
        state.isShow=payload;
    },
    //添加收藏
    SET_COLLECTION(state,payload){
        var repeat =false;
        state.collection.forEach((item)=>{
            if(item == payload){
                repeat = true;
                return;
            }
        })
        if(!repeat){
            state.collection.push(payload);
        }
        
        console.log(state.collection);
    },
    //取消收藏
    CANCEL_COLLECTION(state,payload){
        state.collection.forEach((item,index)=>{
            if(item==payload){
                state.collection.splice(index,1);
            }
        })
        console.log(state.collection);
    },
    //收藏图标切换
    SET_COLLECTIONICON(state,payload){
        state.collectionIcon = payload;
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