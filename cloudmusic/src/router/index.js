import Vue from 'vue'
import Router from 'vue-router'

//导入由路由控制的模块
//音乐列表
const ListView = () => import(/* webpackChunkName:"ListView" */ '@/components/ListView/ListView');
//发现
const Discovery = () => import(/* webpackChunkName:"Discovery" */ '@/components/Discovery/Discovery');
const Recommend = () => import(/* webpackChunkName:"Recommend" */ '@/components/Discovery/Recommend');
const RedioStation = () => import(/* webpackChunkName:"RedioStation" */ '@/components/Discovery/RedioStation');
const Friends = () => import(/* webpackChunkName:"Friends" */ '@/components/Discovery/Friends');
const RecommendPlayList = () => import(/* webpackChunkName:"RecommendPlayList" */ '@/components/Discovery/RecommendPlayList'); 
const RecommendAlbumList = () => import(/* webpackChunkName:"RecommendAlbumList" */ '@/components/Discovery/RecommendAlbumList'); 

//视频
const Video = () => import(/* webpackChunkName:"Video" */ '@/components/Video/Video');
//我的
const Mine = () => import(/* webpackChunkName:"Mine" */ '@/components/Mine/Mine');
//搜索
const Search = () => import(/* webpackChunkName:"Search" */ '@/components/Search/Search');
//播放界面
//const Play = () => import(/* webpackChunkName:"Search" */ '@/components/Play/Play');

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',redirect:'/Discovery'},
    {path:'/ListView', component:ListView, name:'listview'},
    {
      path:'/Discovery', 
      component:Discovery, 
      name:'discovery',
      redirect:'/Discovery/Recommend',
      children:[
        {
          path:'Recommend',
          component:Recommend,
          name:'recommend',
        },
        {
          path:'RedioStation',
          component:RedioStation,
          name:'redioStation'
        },
        {
          path:'Friends',
          component:Friends,
          name:'friends'
        },
      ]
    },
    {path:'/Video', component:Video, name:'video'},
    {path:'/Mine', component:Mine, name:'mine'},
    {path:'/Search', component:Search, name:'search'},
   // {path:'/Play', component:Play, name:'play'},
    {path:'/RecommendPlayList',component:RecommendPlayList,name:'recommendPlayList'},
    {path:'/RecommendAlbumList',component:RecommendAlbumList,name:'recommendAlbumList'}
  ]
})
