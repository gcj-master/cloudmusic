<template>
    <div id="recommend">
        <div class="bg"></div>
        <Focus :focus="images"></Focus>
        <ul class="nav">
            <li v-for="(item,index) in navs" :key="index">
                <div>
                    <i :class="item.icon" aria-hidden="true"></i>
                </div>
                <span>{{item.title}}</span>
            </li>
        </ul>
        <div class="content">
            <div class="title">
                推荐歌单
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <ul v-if="songListData.length">
                <li v-for="(item,index) in songListData" :key="index" @click="pushToPlayListStore(item)">
                <img v-lazy="item.coverImgUrl" alt="">
                <div>
                   <span class="songName">{{item.name}}</span>
                </div>
                </li>
            </ul>
            <div class="title">
                推荐音乐
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <ul v-if="songsData.length">
                <li v-for="(item,index) in songsData" :key="index" @click="playSong(item)">
                    <img v-lazy="item.al.picUrl" alt="">
                    <div>
                        <span class="songName">{{item.al.name}}</span>
                        <!-- <span class="songAuthor">author</span> -->
                    </div>
                </li>
            </ul>
            <div class="title">
                推荐专辑
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <ul>
                <li v-for="(item,index) in albumList" :key="index" @click="pushToAlbumListStore(item)">
                    <img v-lazy="item.picUrl" alt="">
                    <div>
                        <span  class="songName">{{item.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bottom-title">
            U2公司提供技术支持，请与980227856@qq.com联系
        </div>
    </div>
</template>
<script>
import Focus from '@/components/Common/Focus'
import {getSongPlayLiST,getSongList,getAlbumList} from '@/api/api'
import {getPlayList} from '@/api/getRecommend'
import {getAlbum} from '@/api/getRecommend'
import {mapMutations} from 'vuex'
export default {
    components:{Focus},
    data(){
        return {
            navs: [
                {title:'私人FM', icon:'fa fa-television fa-lg'},
                {title:'每日推荐', icon:'fa fa-calendar-check-o fa-lg'},
                {title:'歌单', icon:'fa fa-align-center fa-lg'},
                {title:'排行榜', icon:'fa fa-bar-chart fa-lg'}
            ],
            images:[],  //轮播图
            songListData:[], //推荐歌单栏
            songsData:[],    //推荐音乐栏
            albumList:[],    //推荐专辑
           // playLists:[]    //存放歌单里的全部歌曲
        }
    },
    methods:{
         _getSongPlayLiST(search_name,num){
            var that = this;
            getSongPlayLiST(search_name,num).then((res) => {
                that.songListData = res.result.playlists;
                //console.log(that.songListData);
            })  
        },
        _getSongList(search_name,num){
            var that = this;
            getSongList(search_name,num).then((res) => {
                that.songsData = res.result.songs;
                //console.log(that.songsData);
            })  
        },
        _getAlbumList(search_name, num){
            var that = this;
            getAlbumList(search_name, num).then((res) => {
                that.albumList = res.result.albums;
                //console.log(that.albumList);
            })
        },
        
        //把歌单列表取出来
         _getPlayList(id){
            getPlayList(id).then((res)=>{
                //console.log(res);
                var playLists = res.playlist.tracks;
                //提交歌单列表到仓库
                this.addToPlaySongs({sourceData:playLists});
                 //跳转页面->歌单页面
                this.pushToView({name:'recommendPlayList'});
            })
        },
        //把专辑列表取出来
        _getAlbum(id){
            getAlbum(id).then((res)=>{
                var albumList = res.songs;
                this.addToAlbumListSongs(albumList);
                //console.log(res);
                //跳转页面->歌单页面
                this.pushToView({name:'recommendAlbumList'});
            })
        },
        pushToPlayListStore(item){
            //歌单信息上传仓库
            this.addToPlayList(item);
            //触发_getPlayList函数获取歌单列表
            this._getPlayList(item.id); 
        },

        pushToAlbumListStore(item){
            //专辑信息上传仓库
            this.addToAlbumList(item);
            //触发_getPlayList函数获取歌单列表
            this._getAlbum(item.id);
        },
        //播放推荐单曲
        playSong(item){
            this.setSong(item);
            this.setIsPlay(true);
            this.$router.push({name:'play'});
        },
        ...mapMutations({
            setSong:'SET_SONG',
            setIsPlay: 'SET_ISPLAY',
            addToPlayList:'ADDTO_PLAYLIST',
            addToPlaySongs:'ADDTO_PLAYLISTSONGS',

            addToAlbumList:'ADDTO_ALBUMLIST',
            addToAlbumListSongs: 'ADDTO_ALBUMLISTSONGS'

        })
  
    },
    created(){
        this.loadData('/api/focus','get','images');
        this._getSongList('许巍',6);
        this._getSongPlayLiST('u2',6);
        this._getAlbumList('爵士',6);
    }
}
</script>
<style lang="scss" scoped>
    #recommend{
        position: absolute;
        top:122px;
        bottom:0;
        left:0;
        right:0;
        .bg{
            width:100%;
            height:80px;
            background:#d43c33;
        }
        .nav{
            width:100%;
            height:164px;
            display:flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-end;
            border-bottom:1px lightgray solid;
            padding-bottom:16px;
            li{
                display:flex;
                flex-direction:column;
                width:20%;
                align-items:center;
                div{
                    width:50px;
                    height:50px;
                    background:red;
                    border-radius:50%;
                    margin-bottom:10px;
                    box-shadow:0 0 10px 2px rgb(247, 159, 159);
                    text-align:center;
                    line-height:50px;
                    color:white;
                }
                span{
                    font-size:14px;
                    color:rgb(0, 0, 0);
                }
            }
        }
        .content{
            width:96%;
            padding:2%;
            .title{
                width:100%;
                height:36px;
                line-height: 36px;
                margin-top:15px;
                font-weight:bold;
            }
            ul{
                width:100%;
                display:flex;
                flex-direction:row;
                flex-wrap: wrap;
                justify-content:space-between;
                li{
                    width:32%;
                    height:146px;
                    margin:10px 0;
                    display:flex;
                    flex-direction:column;
                    img{
                        width:100%;
                        height:108px;
                        border-radius: 5px;
                        overflow: hidden;
                    }
                    div{
                        margin-top:8px;
                        width:100%;
                        height:38px;
                        padding-left:5px;
                        display: flex;
                        flex-direction: column;
                        .songName{
                            width:100%;
                            height:26px;
                            font-size:13px;
                            color:#000;
                            margin-bottom:5px;
                            overflow: hidden;
                            text-overflow:ellipsis;/*文字溢出的部分隐藏并用省略号代替*/
			               white-space: nowrap; //文字不会换行
                        }
                        .songAuthor{
                            font-size:12px;
                            color:rgb(59, 56, 56);
                        }
                    }
                }
            }
        }
        bottom-title{
            width:100%;
            height:30px;
        }
    }
</style>


