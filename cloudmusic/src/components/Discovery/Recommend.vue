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
            <ul>
                <li v-for="(item,index) in 6" :key="index">
                    {{item}}
                </li>
            </ul>
            <div class="title">
                最新音乐
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <ul>
                <li v-for="(item,index) in 6" :key="index">
                    {{item}}
                </li>
            </ul>
            <div class="title">
                主播电台
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <ul>
                <li v-for="(item,index) in 6" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Focus from '@/components/Common/Focus'
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
            images:[]
        }
    },
    methods:{

    },
    created(){
        this.loadData('/api/focus','get','images');
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
                    width:30%;
                    height:110px;
                    background:pink;
                    margin:15px 0;
                }
            }
        }
    }
</style>


