<template>
    <div id="recommendPlayList">
        <div class="top">
            <div class="topNav">
                <i class="fa fa-arrow-left fa-lg" aria-hidden="true" @click="goBack()"></i>
                <span>专辑</span>
            </div>
            <div class="picMsg">
                <div class="coverImg">
                    <img v-lazy="albumListMSG.picUrl" alt="">
                </div>
                <span class="title">{{albumListMSG.name}}</span>
            </div>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in albumListSongs" :key="index" @click="_getMusic(item)">
                    <span class="songMessage">
                        <span class="num">{{index+1}}</span>
                        <span class="songName">
                            <span>{{item.name}}</span>
                            <span>{{item.al.name}}</span>
                        </span>
                    </span>
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script> 

import {mapGetters,mapMutations} from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters([
            'albumListMSG',
            'albumListSongs'
        ])
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        _getMusic(item){
            this.setSong(item);
            this.pushToView({name:'play'},{item:item});
        },
         ...mapMutations({
             setSong: 'SET_SONG'
         })
    },
}
</script>
<style lang="scss" scoped>
    #recommendPlayList{
        overflow:scroll;
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index: 101;
        background:burlywood;
        .top{
            width:92%;
            margin:0 auto;
            
            .topNav{
                width:100%;
                height:40px;
               
                display:flex;
                flex-direction: row;
                align-items: center;
                color:white;
                span{
                    margin-left:15px;
                }
            }
            .picMsg{
                margin-top:30px;
                width:100%;
                height:200px;
                
                display:flex;
                flex-direction: row;
              
                .coverImg{
                    width:150px;;
                    height:150px;
                    background:yellowgreen;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .title{
                    margin:15px;
                    width:56%;
                    font-size:18px;
                    color:white;
                    font-weight: bold;

                }
            }
        }
        .content{     
            width:100%;
            margin:auto;
            background:white;
            ul{
                margin-top:16px;
                width:92%;
                margin:0 auto;
                li{
                    width:100%;
                    height:56px;
                    border-bottom:1px lightgray solid;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    .songMessage{
                        width:85%;
                        display: flex;
                        flex-direction:row;
                         align-items: center;
                        .num{
                            margin-left:5px;
                        }
                        .songName{
                            margin-left:15px;
                            display: flex;
                            flex-direction: column;
                            span:nth-child(2){
                                margin-top:8px;
                                font-size:12px;
                                color:rgb(93, 85, 85);
                            }
                        }
                    }
                }
            }
        }
    }
</style>


