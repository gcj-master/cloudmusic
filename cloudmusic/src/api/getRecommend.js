import axios from 'axios'

//获取歌单
export function getPlayList(id){
    const url = "https://api.imjad.cn/cloudmusic/"
    const params = {
        type: 'playlist',
        id:id
    }
    return axios.get(url,{params:params})
    .then((response) => {
        return Promise.resolve(response.data);
    })
}


//获取专辑
export function getAlbum(id){
    const url = "https://api.imjad.cn/cloudmusic/"
    const params = {
        type: 'album',
        id:id
    }
    return axios.get(url,{params:params})
    .then((response) => {
        return Promise.resolve(response.data);
    })
}