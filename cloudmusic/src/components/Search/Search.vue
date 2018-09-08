<template>
    <div id="search">
        <div class="topNav">
            <span class="cellLeft">
                <i class="fa fa-arrow-left fa-lg" aria-hidden="true" @click="goBack()"></i>
            </span>
            <span class="cellRight">
                <input type="text" ref="searchName" placeholder="请输入歌曲名或歌手名" @keyup.13="searchCon()">
                <i style class="fa fa-search fa-lg" aria-hidden="true" @click="searchCon"></i>
            </span>
        </div>
        <div class="songList">
            <ul v-if="searchData.length">
                <li v-for="(item,index) in searchData" :key="index">
                    <div class="songName">
                        <span>{{item.name}}</span>
                        <span>{{item.al.name}}</span>
                    </div>
                    <div class="icon">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                </li>
            </ul>
            <div v-if="!searchData.length" class="hotSearch-box">
                <p>热门搜索</p>
                <div 
                    class="hotSearch-item" 
                    v-for="(item,index) in hotData" 
                    :key="index"
                    @click="addToSearch($event)"
                >
                    {{item}}
                </div>
            </div>
        </div>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import BottomNav from '@/components/Common/BottomNav'
import {getSearchList} from '@/api/search'
export default {
    name: 'search',
    components:{
        'bottom-nav':BottomNav
    },
    data(){
        return {
            hotData:['我们的纪念','笨小孩','后来的我们','再见只是陌生人','庸人自扰','超级英雄','陈奕迅','抖音神曲2018'],
            searchData: []
        }
    },
    computed:{
        
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        searchCon(){
            //console.log(this.$refs.searchName.value);
            var that = this;
            
            var searchName = this.$refs.searchName.value.trim();
            getSearchList(searchName).then((res)=>{
                if(res.code == 200){
                    that.searchData =  res.result.songs;
                }else{
                    that.searchData = []
                }
                
                // console.log(that.searchData);
            })
        },
        addToSearch(e){
            this.$refs.searchName.value = e.target.innerText
            this.searchCon();
        }
    }
}
</script>
<style lang="scss" scoped>
    i{
        font-size:26px;
    }
    #search{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:white;
        z-index:100;
        .topNav{
            position: fixed;
            top:0;
            left:0;
            right:0;
            height:44px;
            background:#d43c33;
            padding:20px 10px 10px 10px;
            display:flex;
            flex-direction:row;
            align-items:flex-end;
            .cellLeft{
                 width:10%;
                 height:100%;
                 display:flex;
                 flex-direction:column;
                 justify-content:center;
                 margin-right:10px;
                 i{
                    color:white; 
                }
            }
            .cellRight{
                width:86%;
                border-bottom:1px solid white;
                input{
                    height:32px;
                    width:90%;
                    border:none;
                    outline:none;
                    background:#d43c33;
                    color:white; 
                    font-size:18px;
                }
                i{
                    color:white;
                }
            }
        }
        .songList{
            width:100%;
            margin-top:80px;
            height:664px;
            overflow:scroll;
            ul{
                width:100%;
                overflow: scroll;
                display:flex;
                flex-direction: column;
                
                li{
                    flex:1;
                    height:44px;
                    border-bottom:1px solid rgb(216, 210, 210);
                    display:flex;
                    flex-direction:row;
                    justify-content:space-between;
                    padding:10px;
                    .songName{
                        display:flex;
                        flex-direction: column;
                        justify-content: center;
                        span:nth-child(1){
                            margin-bottom:8px;
                        }
                        span:nth-child(2){
                            font-size:12px;
                            color:rgb(139, 132, 132);
                        }
                    }
                    .icon{
                        display: flex;
                        align-items: center;
                        margin-right: 15px;
                    }
                }
            }
            .hotSearch-box{
                width:90%;
                display:flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;
                margin:20px 5%;
                p{
                    height:25px;
                    width:100%;
                }
                .hotSearch-item{
                    padding: 0.2rem 0.4rem;
                    margin: 0.2rem 0.2rem;
                    font-size: 14px;
                    border: 1px solid #eee;
                    border-radius: 1.3rem;
                    margin:10px;
                }
            }
            
        }
    }
</style>


