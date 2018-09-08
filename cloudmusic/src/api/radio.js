import axios from 'axios'
//获取电台
//获取电台
export function getRadioList(search_name,num){
    const url = "https://api.imjad.cn/cloudmusic/?type=search&search_type=1009&s=读书&limit=5"
    const params = {
        type: 'search',
        search_type: 1009,
        s: search_name,
        limit: num
    }
    return axios.get(url,{params:params})
    .then((response) => {
        return Promise.resolve(response.data);
    })
}