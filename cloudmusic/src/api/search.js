import axios from 'axios'

export function getSearchList(search_name){
    const url = "https://api.imjad.cn/cloudmusic/"
    const params = {
        type: 'search',
        search_type: 1,
        s: search_name,
        limit: 30
    }
    return axios.get(url,{params:params})
    .then((response) => {
        return Promise.resolve(response.data);
    })
}