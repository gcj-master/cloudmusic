<template>
    <div id="redioStation">
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
            <div class="todySelected">
                <div class="todyTitle">
                    <span class="title">今日优先</span>
                    <span class="refesh">
                        <i class="fa fa-repeat" aria-hidden="true"></i>
                        换一换
                    </span>
                </div>
                 <ul class="todyList">
                    <li v-for="(item,index) in radioList" :key="index">
                        <img v-lazy="item.dj.backgroundUrl" alt="">
                        <div>
                            <span class="playTitle">{{item.name}}</span>
                            <span class="playContext">
                                <span>节目:num</span>
                                <span></span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div> 
        </div>
        <div class="bottom-title">
            U2公司提供技术支持，请与980227856@qq.com联系
        </div>
    </div>
</template>
<script>
import Focus from '@/components/Common/Focus'
import {getRadioList} from '@/api/radio'
export default {
    components:{Focus},
    data(){
        return {
            navs: [
                {title:'电台分类', icon:'fa fa-qrcode fa-lg'},
                {title:'电台排行', icon:'fa fa-newspaper-o fa-lg'},
                {title:'付费精品', icon:'fa fa-btc fa-lg'},
                {title:'小冰电台', icon:'fa fa-snowflake-o fa-lg'}
            ],
            images:[],
            radioList:[]
        }
    },
    methods:{
        _getRadioList(search_name,num){
            getRadioList(search_name,num).then((res)=>{
                this.radioList = res.result.djRadios;
                //console.log(this.radioList);
            })
        }
    },
    created(){
        this.loadData('/api/focus2','get','images');
        this._getRadioList('读书',10);
    }
}
</script>
<style lang="scss" scoped>
      #redioStation{
        position: absolute;
        top:123px;
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
              box-sizing: border-box;
            width:96%;
            padding:2%;
            margin-top:10px;
            .todySelected{
                width:100%;
                .todyTitle{
                    width:100%;
                    height:50px;
                    line-height:50px;
                    display:flex;
                    flex-direction:row;
                    justify-content:space-between;
                    span.title{
                        font-weight:bolder;
                    }
                    span.refesh{
                        font-size:13px;
                        color:rgb(139, 132, 132);
                    }
                }
                .todyList{
                    width:100%;
                     display:flex;
                    flex-direction: column;
                    li{
                        width:100%;
                        height:110px;
                        margin-bottom:12px;
                        display:flex;
                        flex-direction:row;
                        img{
                            width:35%;
                            background:pink;
                            border-radius: 6px;
                        }
                        div{
                            width:65%;
                            padding:10px 0;
                            margin-left:5%;
                            display:flex;
                            flex-direction: column;
                            justify-content:space-around;
                          
                            .playTitle{
                                font-weight:bolder;
                                width:60%;
                                overflow: hidden;
                                text-overflow:ellipsis;/*文字溢出的部分隐藏并用省略号代替*/
			                    white-space:nowrap; //文字不会换行
                            }
                            .playContext{
                                display:flex;
                                flex-direction:column;
                                span{
                                    font-size:13px;
                                    margin: 2px 0;
                                    color:rgb(139, 132, 132);
                                }
                            }
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


