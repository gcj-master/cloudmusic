<template>
    <div id="video">
        <div class="title">
            <span>精彩MV</span>
        </div>
        <ul class="content">
            <li v-for="(item, index) in mvList" :key="index">
                <div class="mv">
                    <video :src="mvs[index]"></video>
                </div>
                <div class="mvTitle">{{item.name}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import {getMVList,getMVDetail} from '@/api/api'
export default {
    data(){
        return {
            mvList:[],
            mvs:[]
        }
    },
    methods:{
        _getMVList(search_name,num){
            var that = this;
            getMVList(search_name,num).then((res) => {
                console.log(res.result.mvs);
                that.mvList = res.result.mvs;
                that.mvList.forEach((item) => {
                    //console.log(item.id);
                    getMVDetail(item.id).then((val)=>{
                        console.log(val.data.brs[240]);
                        var mv = val.data.brs[240];
                        this.mvs.push(mv);
                    })
                })
            })
        }
    },
    created(){
        this._getMVList('热门',10);
    }
}
</script>
<style lang="scss" scoped>
     #video{
        position: absolute;
        top:84px;
        bottom:0;
        left:0;
        right:0;
        .title{
            width:100%;
            height:46px;
            display:flex;
            align-items: center;
            span{
                font-size:18px;
                font-weight: bolder;
                margin-left:3%;
            }
        }
        .content{
            width:100%;
            background:rgb(219, 219, 214);
            li{
                width:100%;
                background: white;
                 padding:10px;
                 box-sizing: border-box;
                 margin-bottom:10px;
                 .mv{
                    background:blue;
                    width:100%;
                    height:260px;
                    border-radius:5px;
                    video{
                        width:100%;
                        height:100%;
                    }
                }
                .mvTitle{
                    width:100%;
                    height:44px;
                    line-height:44px;
                    font-weight: 500;
                 }
            }
           
        }
    }
</style>


