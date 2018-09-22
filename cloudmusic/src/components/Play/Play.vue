
<template>
    <div id="play" v-show="isShow">
        <div class="play-bg">
            <img src="" alt="">
        </div>
        <div class="play-header">
            <div class="play-header-left"  @click="ishide()">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div class="play-header-center">
                <span class="song-name">{{song.name}}</span>
                <span class="singer">{{song.al.name}}</span>
            </div>
            <div class="play-header-right">
                <span>Hi-Fi</span>
            </div>
        </div>
        <div class="play-pic">
            <div class="play-pic-box">
                <img :src="song.al.picUrl" alt="">
                <!-- <img v-lazy="song.al.picUrl" alt=""> -->
            </div>
        </div>
        <div class="play-control">
            <div class="play-control-other">
                <i v-show="!collectionIcon" @click="addToCollection(song)" class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                <i v-show="collectionIcon" @click="cancelToCollection(song)" style="color:red" class="fa fa-heart fa-lg" aria-hidden="true"></i>
                <i  class="fa fa-download fa-lg" aria-hidden="true"></i>
                <i class="fa fa-ellipsis-v fa-lg" aria-hidden="true"></i>
            </div>
            <div class="play-control-time">
                <span>{{progressTime1}}</span>
                <progress class="progress" :value="progressTime" :max="progressEnd"></progress>
                <span>{{progressEnd1}}</span>
                <audio style="display:none"  id="audio" :src="songMp3">
                    <source src="" id="" />
                </audio>
            </div>
            <div class="play-control-c">
                <i class="fa fa-random fa-2x" aria-hidden="true"></i>
                <i class="fa fa-step-backward fa-2x" aria-hidden="true"></i>
                <i v-show="!isplay" class="fa fa-play fa-2x" aria-hidden="true" @click="play()"></i>
                <i v-show="isplay" class="fa fa-pause fa-2x" aria-hidden="true" @click="play()"></i>
                <i class="fa fa-step-forward fa-2x" aria-hidden="true"></i>
                <i class="fa fa-outdent fa-2x" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>
<script>
import {getSongDetail} from '@/api/api'
import {mapGetters,mapMutations} from 'vuex'
export default {
    data (){
        return {
            progressTime: 0,    //进度条的value
            progressEnd: 0,     //进度条的maxvalue
            progressTime1: '00:00', //显示歌曲进度条所在的时间
            progressEnd1: '00:00', //歌曲的总时间
          
            isCollect: false,    //判断是否收藏

            songFromSearch:{}
        }
    },
    computed:{
        ...mapGetters([
            'isplay',
            'song',
            'songMp3',
            'isShow',
            'collectionIcon'
        ])
    },

    watch: {
        isplay(){ //监测歌曲播放和暂停按钮的切换，并控制播放
            if(this.isplay && this.songMp3.length){
                document.querySelector('audio').play(); //如果按钮是播放状态并且有歌曲时开始播放
            }else{
                document.querySelector('audio').pause(); //暂停
            }
        },
    //监测歌曲是否改变从而获取歌曲的播放地址
        songFromSearch(){
            var that = this;
            getSongDetail(that.song.id).then((res)=>{
                this.setSongMp3(res.data[0].url);
            })

            // document.querySelector('#Audio').autoplay=true; //歌曲准备就绪自动播放
            // this.setIsPlay(true);   //播放按钮状态为播放状态
        }
        
    },
    methods:{
        ishide(){
            this.setIsShow(!this.isShow);
        },
        //控制
        play(){
            this.setIsPlay(!this.isplay);
            //console.log(this.isPlay);
        },
        //添加收藏
        addToCollection(song){
            this.setCollection(song);
            this.setCollectionIcon(!this.collectionIcon);
        },
        //取消收藏
        cancelToCollection(song){
            this.cancelToCollectionIcon(song);
            this.setCollectionIcon(!this.collectionIcon);
        },
        ...mapMutations({
            setIsPlay: 'SET_ISPLAY',
            setSong: 'SET_SONG',
            setSongMp3:'SET_SONGMAP3',
            setIsShow:'SET_ISSHOW',
            setCollection: 'SET_COLLECTION',
            setCollectionIcon:'SET_COLLECTIONICON',
            cancelToCollectionIcon:'CANCEL_COLLECTION'
        })
    },
    updated(){
        this.songFromSearch = this.$store.getters.song;
    }
}
</script>
<style lang="scss" scoped>
    #play{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #efefef;
        z-index:101;
        .play-bg{
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index:-1;
            -webkit-filter: blur(158px);
            -moz-filter: blur(158px);
            -o-filter: blur(158px);
            -ms-filter: blur(158px);
            filter:blur(158px);
            img{
                display:inline-block;
                width:100%;
                height:100%;
                background:pink;
            }
        }
        .play-header{
            width:100%;
            box-sizing: border-box;
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            padding:15px;
            color:white;
            .play-header-center{
                display: flex;
                flex-direction:column;
                .singer{
                    font-size:14px;
                    margin-top:5px;
                }
            }
            .play-header-right{
                width:13%;
                height:46px;
                margin-top: -5px;
                span{
                    display: inline-block;
                    width:100%;
                    height:100%;
                    text-align: center;
                    line-height:46px;
                    border:1px solid #fff;
                    border-radius:50%;
                    font-size:14px;
                }
            }
        }
        .play-pic{
            width:100%;
            height:389px;
            display:flex;
            justify-content: center;
            align-items: center;
            .play-pic-box{
                width:308px;
                height:308px;
                border:10px solid #737D7C;
                border-radius:50%;
                display: inline-block;
                img{
                    display:inline-block;
                    width:100%;
                    height:100%;
                    border-radius: 50%;
                    border:25px solid #212121;
                    box-sizing: border-box;
                }
            }
        }
        .play-control{
            margin:46px auto;
            width:90%;
            i{
                color:white;
            }
            // background:green;
            .play-control-other{
                width:55%;
                margin:auto;
                // background:red;
                height:50px;
                display:flex;
                flex-direction:row;
                justify-content:space-around;
                align-items: center;
            }
            .play-control-time{
                // background: yellow;
                height:62px;
                display:flex;
                flex-direction: row;
                justify-content:space-between;
                align-items: center;
                .progress{
                    display:inline-block;
                    height:4px; 
                    width:78%;
                }
                span{
                    font-size:14px;
                }
            }
            .play-control-c{
                width:100%;
                height:62px;
                // background:blue;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items:center;
            }
        }
    }
</style>

