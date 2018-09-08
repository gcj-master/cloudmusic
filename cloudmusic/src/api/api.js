import axios from 'axios'

//获取歌单列表
function getSongPlayLiST(search_name,num){
    const url = "https://api.imjad.cn/cloudmusic/";
    const params = {
        type: "search",
        search_type: 1000,
        s: search_name,
        limit: num
    }
    return axios.get(url,{params:params})
    .then((response) => {
        return Promise.resolve(response.data);
    })
}

//获取单曲(推荐音乐栏目)
function getSongList(search_name,num){
    const url = "https://api.imjad.cn/cloudmusic/"
    const params = {
        type: 'search',
        search_type: 1,
        s: search_name,
        limit: num
    }
    return axios.get(url,{params:params})
    .then((response) => {
        return Promise.resolve(response.data);
    })

}

//获取歌曲信息
function getSongDetail(song_id){
    const url = "https://api.imjad.cn/cloudmusic/";
    const params = {
        type: "song",
        id: song_id,
        br: 128000
    }
    return axios.get(url,{params:params})
    .then((response) => {
        return Promise.resolve(response.data);
    })
}

/********************************************************************************************** */

//获取专辑
function getAlbumList(search_name,num){
    const url = "https://api.imjad.cn/cloudmusic/"
    const params = {
        type: 'search',
        search_type: 10,
        s: search_name,
        limit: num
    }
    return axios.get(url,{params:params})
    .then((response) => {
        return Promise.resolve(response.data);
    })
}


/********************************************************************************************** */

//获取热门的MV列表
function getMVList(search_name,num){
    const url = "https://api.imjad.cn/cloudmusic/";
    const params = {
        type: "search",
        search_type: 1004,
        s: search_name,
        limit: num
    }
    return axios.get(url,{params:params})
    .then((response) => {
       return Promise.resolve(response.data);
    })
}
//获取MV的视频信息
function getMVDetail(mv_id){
    const url = "https://api.imjad.cn/cloudmusic/";
    const params = {
        type: "mv",
        id: mv_id
    }
    return axios.get(url,{params:params})
    .then((response) => {
        return Promise.resolve(response.data);
    })
}
export {getSongPlayLiST,getSongList,getSongDetail,getAlbumList}
