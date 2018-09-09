<template>
    <div id="play">
        <div class="play-bg">
            <img src="" alt="">
        </div>
        <div class="play-header">
            <div class="play-header-left" @click="goBack()">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div class="play-header-center">
                <span class="song-name">{{songDetail.name}}</span>
                <span class="singer">{{songDetail.al.name}}</span>
            </div>
            <div class="play-header-right">
                <span>Hi-Fi</span>
            </div>
        </div>
        <div class="play-pic" @click="song">
            <div class="play-pic-box">
                <img v-lazy="songDetail.al.picUrl" alt="">
                <!-- <img src="" alt=""> -->
            </div>
        </div>
        <div class="play-control">
            <div class="play-control-time">
                <span>{{progressTime1}}</span>
                <progress class="progress" :value="progressTime" :max="progressEnd"></progress>
                <span>{{progressEnd1}}</span>
                <!-- <audio :src="songMp3" autoplay controls>

                </audio> -->
                <audio controls="controls" autoplay="autoplay"
                    :src="songMp3">
                <source  type="audio/ogg" />
                
                Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    </div>
</template>
<script>
import {getSongDetail} from '@/api/api'
import {mapGetters} from 'vuex'
export default {
    
    data (){
        return {
            progressTime: 0,    //进度条的value
            progressEnd: 0,     //进度条的maxvalue
            progressTime1: '00:00', //显示歌曲进度条所在的时间
            progressEnd1: '00:00', //歌曲的总时间
            songMp3: '', //存放歌曲的src地址
            isCollect: false    //判断是否收藏
        }
    },
    computed:{
        ...mapGetters([
            'songDetail'
        ])
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        song(){
            var that = this;
            console.log(this.songDetail);
            getSongDetail(this.songDetail.id).then((res)=>{
                console.log(res.data[0].url);
                this.songMp3 = res.data[0].url;
            })
        }
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
                background:yellow;
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
    }
</style>


