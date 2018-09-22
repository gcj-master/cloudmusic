<template>
    <div id="listView">
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title" >
                    <div class="content">
                    <i class="fa fa-music"></i>本地音乐
                    </div>
                </template>
                <div>暂无</div> 
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <div class="content">
                    <i class="fa fa-caret-square-o-right"></i>最近播放
                    </div>
                </template>
                <div>暂无</div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <div class="content">
                    <i class="fa fa-download"></i>下载管理
                    </div>
                </template>
                <div>暂无</div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <div class="content">
                        <i class="fa fa-user-plus"></i>我的收藏
                    </div>
                    
                </template>
                <ul class="collection">
                    <li v-for="(item,index) in collection" :key="index" @click="addToPlay(item)">
                        <span class="songMessage">
                            <span class="num">{{index+1}}</span>
                            <span class="songName">
                                {{item.name}}
                            </span>
                        </span>
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            activeNames: ['1']
        }
    },
    computed:{
        collection(){
            return this.$store.getters.collection;
        }
    },
     methods: {
      handleChange(val) {
        console.log(val);
      },
      addToPlay(item){
          this.setSong(item);
      },
     ...mapMutations({
            setSong: 'SET_SONG',
        })
    }
}
</script>
<style lang="scss" scoped>
*{
     box-sizing: border-box;
}
    #listView{
        position: fixed;
        top:84px;
        bottom:0;
        left:0;
        right:0;
        background:white;
        box-sizing: border-box;
        .content{
            height:54px;
            width:100%;
            line-height:54px;
            padding-left:10px;
            font-size:18px;
            padding-left:15px;
            i{
                color:#f75048;
                font-size:25px;
                margin-right:15px;
            }
            span{
                margin-left:10px;
                font-size:18px;
            }
        }
        .collection{      
            margin-top:16px;
            width:100%;
            margin:0 auto;
            li{
                width:100%;
                height:56px;
                border-bottom:1px lightgray solid;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                font-size:16px;
                padding:0 15px;
                .songMessage{
                    .num{
                        margin-right:10px;
                        color:rgb(179, 170, 170);
                    }
                }
                i{
                    color:rgb(179, 170, 170);
                }
            }
            
        }
       
    }
</style>


