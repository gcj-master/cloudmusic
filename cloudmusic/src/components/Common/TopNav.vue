<template>
    <div id="topNav">
        <div class="cellLeft">
            <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
        </div>
        <ul class="cellCenter">
            <li 
                @click="pushTo(listView.name,listView.id)"
                :style="listView.id==$store.state.TopNavIndex?{color:'white'}:{color:'lightgray'}"
            >
                <i :class="listView.icon"></i>
            </li>
            <li 
                @click="pushToDiscovery(discovery.name,discovery.id)"
                :style="discovery.id==$store.state.TopNavIndex?{color:'white'}:{color:'lightgray'}"
            >
                <i :class="discovery.icon"></i>
            </li>
            <li 
                @click="pushTo(video.name,video.id)"
                :style="video.id==$store.state.TopNavIndex?{color:'white'}:{color:'lightgray'}"
            >
                <i :class="video.icon"></i>
            </li>
        </ul>
        <div class="cellRight">
            <i @click="pushToView('search')" class="fa fa-search fa-lg" aria-hidden="true"></i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // icons:[
            //     {icon:'fa fa-music fa-lg',name:'listview'},
            //     {icon:'fa fa-diamond fa-lg',name:'discovery'},
            //     {icon:'fa fa-youtube-play fa-lg',name:'video'}
            // ]

            listView:{id:0,icon:'fa fa-music fa-lg',name:'listview'},
            discovery:{id:1,icon:'fa fa-diamond fa-lg',name:'discovery'},
            video:{id:3,icon:'fa fa-youtube-play fa-lg',name:'video'}
        }
    },
    methods:{
        pushTo(name,index){
            this.$router.push({name:name});
            this.$store.commit('TOPNAVTOGGLE',{selectedIndex:index});
            localStorage.setItem('topSelectedIndex',index);
        },
        pushToDiscovery(name,index){
            //console.log(this.$store.state.DiscoveryColumnRouterName);
            //解决从其他栏目回到 'Discovery' 子栏目能够保留上一次的浏览位置 
            var childRoterName = this.$store.state.DiscoveryColumnRouterName;
            if(childRoterName){
                this.$router.push({name:childRoterName});
            }else{
                this.$router.push({name:name});
            }
            
            this.$store.commit('TOPNAVTOGGLE',{selectedIndex:index});
            localStorage.setItem('topSelectedIndex',index);
        }
    },
    mounted(){
        var selectedIndex = localStorage.getItem('topSelectedIndex');
        this.$store.commit('TOPNAVTOGGLE',{selectedIndex:selectedIndex});
    }
}
</script>
<style lang="scss" scoped>
    #topNav{
        position:fixed;
        top:0;
        left:0;
        right:0;
        height:44px;
        background:#d43c33;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding:20px 10px;
        align-items:flex-end;
        z-index:100;
        i{
            font-size:26px;
        }
        .cellLeft{
            color:white;
            width: 20%;
        }
        .cellRight{
            color:white;
            width:20%;
            text-align: right;
        }
        .cellCenter{
            display:flex;
            flex-direction: row;
            justify-content:space-around;
            width:60%;
            color:lightgray;
        }
    }
</style>


