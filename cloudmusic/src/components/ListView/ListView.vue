<template>
    <div id="listView">
        <ul>
            <li v-for="(item,index) in lists" :key="index">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lists:[
                {title:'本地音乐',icon:'fa fa-music'},
                {title:'最近播放',icon:'fa fa-caret-square-o-right'},
                {title:'下载管理',icon:'fa fa-download'},
                {title:'我的收藏',icon:'fa fa-user-plus'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    #listView{
        position: absolute;
        top:84px;
        bottom:0;
        left:0;
        right:0;
        background:white;
        ul{
            width:100%;
            li{
                height:54px;
                width:100%;
                line-height:54px;
                padding:0 10px;
                box-sizing: border-box;
                border-bottom:1px solid rgb(219, 216, 216);
                
                i{
                    color:#f75048;
                    font-size:25px;
                }
                span{
                    margin-left:10px;
                    font-size:18px;
                }
            }
        }
    }
</style>


