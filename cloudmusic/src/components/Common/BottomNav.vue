<template>
    <div id="bottomNav"  v-show="!isShow">
        <div class="content">
            <div class="cellLeft" @click="ishide()">
                <img :src="song.al.picUrl" alt="">
                <div>
                    <span>{{song.name}}</span>
                    <span>{{song.al.name}}</span>
                </div>
            </div>
            <div class="cellRight">
                <span >
                    <i v-show="!isplay" class="fa fa-play-circle-o fa-2x" @click="play()"></i>
                    <i v-show="isplay" class="fa fa-pause-circle-o fa-2x" @click="play()"></i> 
                </span>
                <span>
                    <i class="fa fa-list-ul fa-2x" aria-hidden="true"></i>
                </span>
            </div>
             
        </div>
        <div class="audi">
            <audio style="display:none" id="Audio" controls  :src="songMp3">
                   
            </audio> 
        </div>
    </div>
</template>
<script>
import {getSongDetail} from '@/api/api'
import {mapGetters,mapMutations} from 'vuex'
export default {
    data(){
        return {
             songFromSearch : ''
        }
    },
    computed: {
        ...mapGetters([
            'song',
            'isplay',
            'songMp3',
            'isShow'
        ])
    },
    watch: {
        //监测歌曲播放和暂停按钮的切换，并控制播放
        isplay(){
            if(this.isplay && this.songMp3.length){
                document.querySelector('#Audio').play(); //如果按钮是播放状态并且有歌曲时开始播放
            }else{
                document.querySelector('#Audio').pause(); //暂停
            }
        },
    //监测歌曲是否改变从而获取歌曲的播放地址
        songFromSearch(){
            var that = this;
            getSongDetail(that.song.id).then((res)=>{
                this.setSongMp3(res.data[0].url);
            })

            document.querySelector('#Audio').autoplay=true; //歌曲准备就绪自动播放
            this.setIsPlay(true);   //播放按钮状态为播放状态
        }
    },
    methods:{
        play(){  
             this.setIsPlay(!this.isplay);
        },
        ishide(){
            this.setIsShow(!this.isShow);
        },
        ...mapMutations({
            setIsPlay: 'SET_ISPLAY',
           
            setSongMp3:'SET_SONGMAP3',
            setIsShow:'SET_ISSHOW'
        })
    },
    updated(){
        this.songFromSearch = this.$store.getters.song;
        localStorage.setItem('SONGFROMSEARCH',JSON.stringify(this.$store.getters.song));
    }
}
</script>
<style lang="scss" scoped>
    #bottomNav{
        position:fixed;
        bottom:0;
        width:100%;
        height:50px;
        background:white;
        border-top:1px solid rgb(230, 227, 227);
         z-index:101;
        .content{
            width:96%;
            padding:2%;
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            .cellLeft{
                width:70%;
                display: flex;
                flex-direction: row;
                img{
                    width:35px;
                    height:35px;
                    background:lightblue;
                    border-radius:4px;  
                }
                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left:4px;
                    span:nth-child(1){
                        font-size:13px;
                        font-weight:500;
                        margin-bottom:3px;
                    }
                    span:nth-child(2){
                        font-size:12px;
                        color:rgb(139, 132, 132);
                    }
                }
            }
            .cellRight{
                width:25%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                color:rgb(114, 107, 107);
            }
        }
    }
    .audi{
        width:100%;
        height:30px;
    }
</style>


